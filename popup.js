document.getElementById('reload').onclick = async () => {
  const [tab] = await chrome.tabs.query({active:true,currentWindow:true});
  if (tab?.id) chrome.tabs.reload(tab.id);
};

document.getElementById('fill').onclick = async () => {
  const n = Number(document.getElementById('num').value || 1);
  const status = document.getElementById('status');
  status.textContent = 'Filling...';
  const [tab] = await chrome.tabs.query({active:true,currentWindow:true});
  if (!tab?.id) { status.textContent='No active tab.'; return; }
  chrome.tabs.sendMessage(tab.id, {action:'fillCurrent', number:n}, response => {
    if (chrome.runtime.lastError) {
      status.textContent = 'Open/refresh the Parul question page, then try again.';
      return;
    }
    status.textContent = response?.ok ? `Filled question ${n}.` : `Error: ${response?.error || 'Unknown error'}`;
  });
};
