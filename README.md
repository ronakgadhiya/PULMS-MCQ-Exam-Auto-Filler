# PULMS MCQ Exam Auto Filler

A Chrome Extension (Manifest V3) that helps create **Single Choice Questions** in the Parul University eLearning exam editor using a prepared "your subject" question dataset.

> **Purpose:** reduce repetitive manual data entry when adding a large set of MCQs to the exam editor.

## Features

- Supports the Parul University eLearning exam editor.
- Fills the rich-text **Question** editor.
- Fills **4 MCQ options**.
- Selects the **correct answer**.
- Selects **Category** from the searchable category field.
- Supports **Sub Category** when a value is available.
- Selects **Easy / Medium / Hard** difficulty.
- Sets **Randomize Options**.
- Sets **Point if correct** and **Point if incorrect**.
- Includes **80 Prompt Engineering MCQs** from the prepared dataset.
- Provides a small floating control panel for selecting and filling a question number.
- Also provides a Chrome extension popup.
- Uses DOM events so React-style form controls can detect programmatic changes.

## Project Structure

```text
PULMS-MCQ-Exam-Auto-Filler/
├── manifest.json      # Chrome Extension Manifest V3 configuration
├── questions.js       # 80 MCQ dataset
├── content.js         # Form detection and auto-fill logic
├── popup.html         # Extension popup UI
├── popup.js           # Popup actions
├── README.md          # Project documentation
├── LICENSE            # MIT license
└── .gitignore         # Git ignore rules
```

## Requirements

- Google Chrome or another Chromium-based browser.
- Access to the Parul University eLearning exam editor.
- A logged-in Parul University eLearning session.

## Installation in Chrome

1. Download or clone this repository.
2. Open Chrome.
3. Go to:

```text
chrome://extensions
```

4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the project folder:

```text
PU-Prompt-Exam-Auto-Filler
```

7. Open the Parul University exam question editor.
8. Refresh the page.
9. The **PULMS MCQ Exam Auto-Filler** panel will appear on the page.

## Usage

### Method 1 — Floating panel

1. Enter/select a question number.
2. Click **Fill Current**.
3. The extension fills the question, options, category, difficulty, points, randomization setting, and correct answer.
4. Review all fields.
5. Click the website's **Submit/Save** button manually.

### Method 2 — Extension popup

1. Click the extension icon in Chrome.
2. Enter the question number.
3. Click **Fill**.

## Important: Review Before Saving

The extension intentionally **does not automatically publish or submit questions**.

Always verify:

- Question text
- Option text
- Correct answer
- Category
- Sub Category
- Difficulty
- Randomize Options
- Points

Then use the website's own **Submit/Save** action.

## Dataset

The project contains 80 Single Choice MCQs in `questions.js`.

Each question includes fields similar to:

```javascript
{
  question: "...",
  options: ["...", "...", "...", "..."],
  correct: "...",
  category: "...",
  subCategory: "",
  difficulty: "Easy",
  randomizeOptions: false,
  pointCorrect: 1,
  pointIncorrect: 0
}
```

## How It Works

```text
questions.js
     │
     ▼
Chrome Content Script
     │
     ├── Detect rich-text question editor
     ├── Detect option editors
     ├── Select category
     ├── Select sub-category
     ├── Select difficulty
     ├── Set randomization
     ├── Set points
     └── Select correct answer
             │
             ▼
Parul University eLearning Exam Editor
```

## Technical Details

- **Manifest:** Chrome Manifest V3
- **Language:** JavaScript
- **UI:** HTML/CSS
- **No backend server required**
- **No external API required**
- **Host access:** `https://elearning.paruluniversity.ac.in/*`

The extension uses `contenteditable` detection because the Question and Option fields are rich-text editors rather than ordinary `<textarea>` elements.

## Limitations

- The extension depends on the current HTML/DOM structure of the Parul University eLearning editor.
- If the website changes its form components, placeholders, selectors, or editor implementation, the extension may require an update.
- The extension does not automatically click **Submit** or **Publish**.
- It should only be used by authorized users who have permission to create or edit exam questions.

## Troubleshooting

### The extension does not appear

1. Open `chrome://extensions`.
2. Confirm the extension is enabled.
3. Click **Reload** on the extension.
4. Refresh the Parul University exam page.

### The question editor is not filled

Make sure the page is the Single Choice Question editor and that the page has completely loaded before clicking **Fill Current**.

### Category is not selected

The category must exist in the website's category list and match the dataset value. If the website changes its search/dropdown component, the selector logic in `content.js` may need updating.

## GitHub Setup

Create a GitHub repository, then run:

```bash
git init
git add .
git commit -m "Initial commit: Prompt Exam Auto Filler"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/PULMS-MCQ-Exam-Auto-Filler.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and use the actual repository URL generated by GitHub.

## License

This project is released under the MIT License. See [LICENSE](LICENSE).

## Disclaimer

This is an educational/administrative browser automation project. Use it only with appropriate authorization and in accordance with your institution's policies and the eLearning platform's terms of use.
