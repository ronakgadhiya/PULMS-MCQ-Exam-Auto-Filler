(() => {
  'use strict';

  const DATA = Array.isArray(window.QUESTION_DATA) ? window.QUESTION_DATA : (typeof QUESTION_DATA !== 'undefined' ? QUESTION_DATA : []);
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const norm = v => String(v ?? '').replace(/\s+/g, ' ').trim().toLowerCase();
  const visible = el => !!el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);

  function fire(el, type, detail) {
    try { el.dispatchEvent(new Event(type, {bubbles:true, cancelable:true})); } catch {}
    if (detail !== undefined) {
      try { el.dispatchEvent(new InputEvent(type, {bubbles:true, inputType:'insertText', data:detail})); } catch {}
    }
  }

  function setNativeValue(el, value) {
    if (!el) return false;
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    el.focus();
    if (desc?.set) desc.set.call(el, String(value)); else el.value = String(value);
    fire(el, 'input', String(value));
    fire(el, 'change');
    el.dispatchEvent(new Event('blur', {bubbles:true}));
    return true;
  }

  // The question and options in this form are rich-text editors, not textareas.
  // This handles contenteditable/ProseMirror/TipTap/Quill-like editors and React state.
  function setRichText(el, value) {
    if (!el) return false;
    el.focus();
    const text = String(value ?? '');
    el.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = text;
    el.appendChild(p);
    try { el.dispatchEvent(new InputEvent('input', {bubbles:true, inputType:'insertText', data:text})); }
    catch { fire(el, 'input'); }
    fire(el, 'change');
    // Some editors listen to beforeinput/keyup to update their internal state.
    try { el.dispatchEvent(new InputEvent('beforeinput', {bubbles:true, inputType:'insertText', data:text})); } catch {}
    fire(el, 'keyup');
    el.blur();
    return true;
  }

  function meta(el) {
    return norm([
      el.getAttribute?.('placeholder'), el.getAttribute?.('aria-label'), el.getAttribute?.('name'),
      el.getAttribute?.('id'), el.getAttribute?.('data-placeholder'), el.innerText?.slice(0,120),
      el.parentElement?.innerText?.slice(0,250)
    ].filter(Boolean).join(' '));
  }

  function editors() {
    return $$('[contenteditable="true"]').filter(visible);
  }

  function findEditorByPlaceholder(part) {
    const p = norm(part);
    return editors().find(e => meta(e).includes(p));
  }

  function getQuestionAndOptionEditors() {
    const es = editors();
    const q = findEditorByPlaceholder('what will be the question') || es[0];
    const remaining = es.filter(e => e !== q);
    const opts = remaining.filter(e => /option|write option|answer option/.test(meta(e)));
    const ordered = opts.length >= 4 ? opts : remaining;
    return {question:q, options:ordered.slice(0,6)};
  }

  function inputMeta(el) {
    const label = el.closest('div, label, section, form')?.innerText || '';
    return norm([
      el.placeholder, el.getAttribute('aria-label'), el.name, el.id, label.slice(0,500)
    ].filter(Boolean).join(' '));
  }

  function textInputs() {
    return $$('input, textarea').filter(visible);
  }

  function findInputByPlaceholder(...parts) {
    const ps = parts.map(norm);
    return textInputs().find(el => ps.some(p => meta(el).includes(p) || inputMeta(el).includes(p)));
  }

  function setInputNearLabel(label, value) {
    const target = norm(label);
    const candidates = textInputs();
    // Prefer exact placeholder/name matches.
    let el = candidates.find(x => meta(x).includes(target));
    if (!el) el = candidates.find(x => inputMeta(x).includes(target));
    if (!el) return false;
    return setNativeValue(el, value);
  }

  function openSearchField(labelText, placeholder) {
    const target = norm(labelText);
    const inputs = textInputs();
    let el = inputs.find(x => norm(x.placeholder) === norm(placeholder));
    if (!el) el = inputs.find(x => inputMeta(x).includes(target));
    if (!el) return null;
    el.focus();
    el.click();
    return el;
  }

  function optionNodes() {
    return $$('[role="option"], [role="listbox"] [role="option"], [data-radix-collection-item], li, .select-option, .dropdown-item').filter(visible);
  }

  async function chooseSearch(labelText, placeholder, value) {
    if (!value) return {ok:true, skipped:true};
    const input = openSearchField(labelText, placeholder);
    if (!input) return {ok:false, reason:`Search field not found: ${labelText}`};

    // Clear first using native setter so React/Vue state is updated.
    setNativeValue(input, '');
    await sleep(120);
    setNativeValue(input, value);
    await sleep(350);

    const wanted = norm(value);
    const nodes = optionNodes();
    let hit = nodes.find(n => norm(n.innerText) === wanted);
    if (!hit) hit = nodes.find(n => norm(n.innerText).startsWith(wanted));
    if (!hit) hit = nodes.find(n => norm(n.innerText).includes(wanted));
    if (hit) {
      hit.click();
      await sleep(180);
      return {ok:true};
    }

    // Keyboard fallback for MUI/Ant/Headless comboboxes.
    input.dispatchEvent(new KeyboardEvent('keydown', {bubbles:true,key:'ArrowDown'}));
    input.dispatchEvent(new KeyboardEvent('keydown', {bubbles:true,key:'Enter'}));
    await sleep(180);
    return {ok:true, fallback:true};
  }

  function clickExactText(value, selector='*') {
    const wanted = norm(value);
    const nodes = $$(selector).filter(visible);
    let hit = nodes.find(n => norm(n.innerText) === wanted);
    if (!hit) hit = nodes.find(n => norm(n.textContent) === wanted);
    if (!hit) return false;
    hit.click();
    return true;
  }

  async function chooseDifficulty(value) {
    const wanted = norm(value);
    // Radio labels are visible in the screenshot as Easy/Medium/Hard.
    const radios = $$('input[type="radio"]').filter(visible);
    for (const r of radios) {
      const txt = norm(r.closest('label')?.innerText || r.parentElement?.innerText || '');
      if (txt === wanted || txt.includes(wanted)) {
        if (!r.checked) r.click();
        return true;
      }
    }
    return clickExactText(value, 'label,button,[role="radio"],span,div');
  }

  function setToggleByLabel(label, desired) {
    const wanted = norm(label);
    const candidates = $$('input[type="checkbox"], button[role="switch"], [role="switch"], [data-state]').filter(visible);
    for (const el of candidates) {
      const parentText = norm(el.closest('label,div,section')?.innerText || '');
      const aria = norm(el.getAttribute('aria-label') || '');
      if (parentText.includes(wanted) || aria.includes(wanted)) {
        const current = el.matches('input[type="checkbox"]') ? el.checked : (el.getAttribute('aria-checked') === 'true' || el.getAttribute('data-state') === 'checked');
        if (Boolean(current) !== Boolean(desired)) el.click();
        return true;
      }
    }
    return false;
  }

  function setPoints(correct, incorrect) {
    const inputs = textInputs().filter(el => /number|text/.test(el.type));
    let ok = 0;
    for (const el of inputs) {
      const m = inputMeta(el);
      if (/point.*correct|correct.*point/.test(m)) { setNativeValue(el, correct); ok++; }
      else if (/point.*incorrect|incorrect.*point|negative/.test(m)) { setNativeValue(el, incorrect); ok++; }
    }
    // Screenshot order fallback: the two number fields after difficulty/randomize.
    if (ok < 2) {
      const nums = inputs.filter(x => x.type === 'number' || x.inputMode === 'numeric');
      const visibleNums = nums.filter(visible);
      if (visibleNums.length >= 2) {
        setNativeValue(visibleNums[0], correct);
        setNativeValue(visibleNums[1], incorrect);
        ok = 2;
      }
    }
    return ok === 2;
  }

  function getCorrectLetter(q) {
    const idx = q.options.findIndex(x => norm(x) === norm(q.correct));
    return idx >= 0 ? String.fromCharCode(65 + idx) : null;
  }

  function setCorrectAnswer(q) {
    const letter = getCorrectLetter(q);
    const labels = $$('label, [role="radio"], [role="checkbox"], .form-check, div').filter(visible);
    const targetText = norm(q.correct);

    // Prefer a label containing the exact correct option text.
    let hit = labels.find(el => norm(el.innerText) === targetText);
    if (!hit) hit = labels.find(el => norm(el.innerText).includes(targetText) && norm(el.innerText).length < targetText.length + 30);
    if (hit) {
      const control = hit.querySelector('input[type="radio"], input[type="checkbox"]');
      if (control) { if (!control.checked) control.click(); return true; }
      hit.click(); return true;
    }

    // Last fallback: inspect radio/checkbox controls and their nearby text.
    const controls = $$('input[type="radio"], input[type="checkbox"]').filter(visible);
    for (const c of controls) {
      const txt = norm(c.closest('label')?.innerText || c.parentElement?.innerText || '');
      if (txt.includes(targetText) || (letter && txt.startsWith(letter.toLowerCase()))) {
        if (!c.checked) c.click();
        return true;
      }
    }
    return false;
  }

  async function fillQuestion(q) {
    if (!q) throw new Error('Question not found in dataset.');

    const log = [];
    const eo = getQuestionAndOptionEditors();
    if (!eo.question) throw new Error('Question rich-text editor not found.');
    setRichText(eo.question, q.question); log.push('question');

    if (eo.options.length < q.options.length) {
      throw new Error(`Only ${eo.options.length} option editors detected; expected ${q.options.length}.`);
    }
    q.options.forEach((text, i) => { setRichText(eo.options[i], text); log.push(`option${i+1}`); });

    const cat = await chooseSearch('category', 'Search Category', q.category);
    log.push(cat.ok ? 'category' : 'category-not-found');

    if (q.subCategory) {
      const sub = await chooseSearch('sub category', 'Search Sub Category', q.subCategory);
      log.push(sub.ok ? 'subcategory' : 'subcategory-not-found');
    }

    await chooseDifficulty(q.difficulty); log.push('difficulty');
    setToggleByLabel('randomize options', Boolean(q.randomizeOptions)); log.push('randomize');
    setPoints(q.pointCorrect, q.pointIncorrect); log.push('points');
    setCorrectAnswer(q); log.push('correct');

    // Trigger a final blur so validation runs.
    document.activeElement?.blur?.();
    await sleep(250);
    return log;
  }

  function status(msg, error=false) {
    const el = $('#pe-status');
    if (el) { el.textContent = msg; el.style.color = error ? '#b42318' : '#333'; }
  }

  function buildToolbar() {
    if ($('#pe-auto-toolbar')) return;
    const bar = document.createElement('div');
    bar.id = 'pe-auto-toolbar';
    bar.innerHTML = `
      <div style="font-weight:700;margin-bottom:8px">PU Prompt Exam Auto-Filler v2</div>
      <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
        <button id="pe-prev" type="button">◀</button>
        <input id="pe-num" type="number" min="1" max="${DATA.length}" value="1" style="width:55px">
        <button id="pe-next" type="button">▶</button>
        <button id="pe-fill" type="button">Fill Current</button>
      </div>
      <div id="pe-status" style="font-size:11px;margin-top:7px">${DATA.length} questions loaded</div>
    `;
    Object.assign(bar.style,{position:'fixed',right:'14px',bottom:'14px',zIndex:'2147483647',background:'#fff',color:'#111',padding:'12px',border:'1px solid #bbb',borderRadius:'10px',boxShadow:'0 4px 20px rgba(0,0,0,.18)',fontFamily:'Arial,sans-serif',fontSize:'13px',maxWidth:'320px'});
    document.body.appendChild(bar);
    const num = $('#pe-num', bar);
    $('#pe-prev', bar).onclick = () => num.value = Math.max(1, Number(num.value || 1)-1);
    $('#pe-next', bar).onclick = () => num.value = Math.min(DATA.length, Number(num.value || 1)+1);
    $('#pe-fill', bar).onclick = async () => {
      const n = Math.max(1, Math.min(DATA.length, Number(num.value || 1)));
      num.value = n;
      status(`Filling ${n}/${DATA.length}...`);
      try {
        const done = await fillQuestion(DATA[n-1]);
        status(`Filled ${n}/${DATA.length}. ${done.join(', ')}`);
      } catch (e) {
        console.error('[PU Auto Filler]', e);
        status(e.message || String(e), true);
      }
    };
  }

  chrome.runtime?.onMessage?.addListener((msg, sender, sendResponse) => {
    if (msg?.action === 'fillCurrent') {
      const n = Math.max(1, Math.min(DATA.length, Number(msg.number || 1)));
      fillQuestion(DATA[n-1]).then(x => sendResponse({ok:true, done:x})).catch(e => sendResponse({ok:false,error:e.message}));
      return true;
    }
  });

  window.PromptExamFiller = { data: DATA, fillQuestion };
  const start = () => setTimeout(buildToolbar, 700);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
