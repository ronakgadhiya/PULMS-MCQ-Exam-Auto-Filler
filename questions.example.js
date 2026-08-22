const QUESTION_DATA = [
  {
    "number": 1,
    "question": "What does the abbreviation 'AI' stand for?",
    "options": [
      "Artificial Intelligence",
      "Automated Interaction",
      "Applied Informatics",
      "Algorithmic Instruction"
    ],
    "correct": "Artificial Intelligence",
    "category": "Pe_sem_1_aiml_26_27",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 2,
    "question": "Which of the following best describes Machine Learning (ML)?",
    "options": [
      "A field where systems learn patterns from data instead of following fixed, hand-written rules",
      "A method of manually coding every possible decision a system can make",
      "A type of computer hardware used to speed up calculations",
      "A programming language used only for web development"
    ],
    "correct": "A field where systems learn patterns from data instead of following fixed, hand-written rules",
    "category": "Pe_sem_1_aiml_26_28",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 3,
    "question": "Deep Learning (DL) is best described as:",
    "options": [
      "A completely separate field unrelated to Machine Learning",
      "A method for storing large files in the cloud",
      "A type of database management system",
      "A subset of Machine Learning that uses multi-layered artificial neural networks"
    ],
    "correct": "A subset of Machine Learning that uses multi-layered artificial neural networks",
    "category": "Pe_sem_1_aiml_26_29",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 4,
    "question": "Generative AI primarily refers to systems that:",
    "options": [
      "Only sort existing data into categories",
      "Create new content such as text, images, or audio",
      "Only store and retrieve existing files",
      "Only calculate numeric statistics from spreadsheets"
    ],
    "correct": "Create new content such as text, images, or audio",
    "category": "Pe_sem_1_aiml_26_30",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 5,
    "question": "What does 'LLM' stand for in the context of AI?",
    "options": [
      "Large Language Model",
      "Logical Learning Machine",
      "Linear Language Method",
      "Limited Learning Module"
    ],
    "correct": "Large Language Model",
    "category": "Pe_sem_1_aiml_26_31",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 6,
    "question": "Prompt Engineering is best defined as:",
    "options": [
      "The process of writing the source code of an AI model from scratch",
      "The process of physically assembling computer hardware",
      "A method for compressing image files",
      "The practice of designing and refining inputs to guide an AI model toward a desired output"
    ],
    "correct": "The practice of designing and refining inputs to guide an AI model toward a desired output",
    "category": "Pe_sem_1_aiml_26_32",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 7,
    "question": "Which company developed the Claude family of AI models?",
    "options": [
      "Anthropic",
      "OpenAI",
      "Google",
      "Meta"
    ],
    "correct": "Anthropic",
    "category": "Pe_sem_1_aiml_26_33",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 8,
    "question": "ChatGPT was developed and released by which organization?",
    "options": [
      "Anthropic",
      "OpenAI",
      "Microsoft Research Labs",
      "IBM"
    ],
    "correct": "OpenAI",
    "category": "Pe_sem_1_aiml_26_34",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 9,
    "question": "Which of the following is Google's conversational large language model?",
    "options": [
      "Gemini",
      "Grok",
      "Claude",
      "DeepSeek"
    ],
    "correct": "Gemini",
    "category": "Pe_sem_1_aiml_26_35",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 10,
    "question": "Which of the following LLMs is associated with the company xAI?",
    "options": [
      "Gemini",
      "Claude",
      "ChatGPT",
      "Grok"
    ],
    "correct": "Grok",
    "category": "Pe_sem_1_aiml_26_36",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 11,
    "question": "In the standard structure of a prompt, which component tells the AI what perspective or persona to adopt?",
    "options": [
      "Task",
      "Constraints",
      "Role",
      "Output Format"
    ],
    "correct": "Role",
    "category": "Pe_sem_1_aiml_26_37",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 12,
    "question": "Which prompt component specifically tells the AI what action or job it needs to perform?",
    "options": [
      "Role",
      "Context",
      "Task",
      "Output Format"
    ],
    "correct": "Task",
    "category": "Pe_sem_1_aiml_26_38",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 13,
    "question": "Which prompt component provides background information relevant to the request?",
    "options": [
      "Task",
      "Constraints",
      "Role",
      "Context"
    ],
    "correct": "Context",
    "category": "Pe_sem_1_aiml_26_39",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 14,
    "question": "Which prompt component defines limitations such as word count, tone, or things to avoid?",
    "options": [
      "Role",
      "Context",
      "Constraints",
      "Output Format"
    ],
    "correct": "Constraints",
    "category": "Pe_sem_1_aiml_26_40",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 15,
    "question": "Which prompt component specifies how the response should be presented, such as in a table or bullet list?",
    "options": [
      "Output Format",
      "Task",
      "Role",
      "Constraints"
    ],
    "correct": "Output Format",
    "category": "Pe_sem_1_aiml_26_41",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 16,
    "question": "A prompt that allows for a wide range of possible responses, rather than a single fixed answer, is called a(n):",
    "options": [
      "Close-ended prompt",
      "Open-ended prompt",
      "Instruction prompt",
      "Persona prompt"
    ],
    "correct": "Open-ended prompt",
    "category": "Pe_sem_1_aiml_26_42",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 17,
    "question": "A prompt that restricts the AI to a limited set of answers, such as 'yes' or 'no', is called a(n):",
    "options": [
      "Open-ended prompt",
      "Close-ended prompt",
      "Question prompt",
      "Persona prompt"
    ],
    "correct": "Close-ended prompt",
    "category": "Pe_sem_1_aiml_26_43",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 18,
    "question": "A prompt that assigns the AI a specific character or professional identity to respond from is known as a(n):",
    "options": [
      "Instruction prompt",
      "Close-ended prompt",
      "Persona prompt",
      "Open-ended prompt"
    ],
    "correct": "Persona prompt",
    "category": "Pe_sem_1_aiml_26_44",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 19,
    "question": "A reusable prompt structure with placeholders that can be filled in with different details each time is called a:",
    "options": [
      "Prompt constraint",
      "Prompt persona",
      "Prompt output format",
      "Prompt template"
    ],
    "correct": "Prompt template",
    "category": "Pe_sem_1_aiml_26_45",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 20,
    "question": "Which of the following is a key characteristic of a good prompt?",
    "options": [
      "It is clear, specific, and gives the AI enough detail to understand what is being asked",
      "It is as vague and short as possible, leaving everything to guesswork",
      "It avoids mentioning any task or goal at all",
      "It never includes any information about the desired format"
    ],
    "correct": "It is clear, specific, and gives the AI enough detail to understand what is being asked",
    "category": "Pe_sem_1_aiml_26_46",
    "subCategory": "",
    "difficulty": "Easy",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 21,
    "question": "What is the key difference between Machine Learning and Deep Learning?",
    "options": [
      "Deep Learning uses multi-layered neural networks that can automatically learn features, while traditional Machine Learning often relies more on manually engineered features",
      "Deep Learning cannot process any numerical data, while Machine Learning can only process text",
      "Machine Learning always requires more computing power than Deep Learning",
      "There is no real difference; the two terms mean exactly the same thing"
    ],
    "correct": "Deep Learning uses multi-layered neural networks that can automatically learn features, while traditional Machine Learning often relies more on manually engineered features",
    "category": "Pe_sem_1_aiml_26_47",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 22,
    "question": "How does Generative AI generally differ from traditional predictive Machine Learning models?",
    "options": [
      "Generative AI only works with numerical spreadsheets",
      "Traditional predictive ML always creates new images",
      "Generative AI creates new content (text, images, audio), while traditional predictive ML mainly classifies or predicts outcomes from existing data",
      "There is no meaningful difference between the two approaches"
    ],
    "correct": "Generative AI creates new content (text, images, audio), while traditional predictive ML mainly classifies or predicts outcomes from existing data",
    "category": "Pe_sem_1_aiml_26_48",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 23,
    "question": "Which underlying architecture is most associated with the rise of modern large language models?",
    "options": [
      "Simple linear regression models",
      "Basic decision tree models",
      "Traditional relational database structures",
      "The Transformer architecture, which uses attention mechanisms"
    ],
    "correct": "The Transformer architecture, which uses attention mechanisms",
    "category": "Pe_sem_1_aiml_26_49",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 24,
    "question": "Which sequence best reflects the general historical evolution of language technology leading to today's LLMs?",
    "options": [
      "Rule-based systems, then statistical models, then neural networks, then transformer-based models",
      "Transformer-based models, then rule-based systems, then statistical models",
      "Neural networks, then transformer-based models, then rule-based systems",
      "Statistical models, then transformer-based models, then rule-based systems"
    ],
    "correct": "Rule-based systems, then statistical models, then neural networks, then transformer-based models",
    "category": "Pe_sem_1_aiml_26_50",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 25,
    "question": "The public release of ChatGPT in late 2022 is widely considered significant mainly because it:",
    "options": [
      "Brought conversational AI to mainstream public attention through an accessible chat interface",
      "Was the very first computer program ever created",
      "Eliminated the need for any further AI research",
      "Was the first tool to use a keyboard for text input"
    ],
    "correct": "Brought conversational AI to mainstream public attention through an accessible chat interface",
    "category": "Pe_sem_1_aiml_26_51",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 26,
    "question": "Claude, developed by Anthropic, is generally positioned in the market with a design philosophy that emphasizes:",
    "options": [
      "Being the only model capable of generating images",
      "Safety, helpfulness, and careful behavior in its responses",
      "Requiring no internet connection to function",
      "Being exclusively a hardware product rather than software"
    ],
    "correct": "Safety, helpfulness, and careful behavior in its responses",
    "category": "Pe_sem_1_aiml_26_52",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 27,
    "question": "Which statement best characterizes Google Gemini as an LLM offering?",
    "options": [
      "It only runs on Apple devices",
      "It was the first chatbot ever created",
      "It cannot be accessed through any Google product",
      "It is designed with tight integration into Google's broader ecosystem of products and services"
    ],
    "correct": "It is designed with tight integration into Google's broader ecosystem of products and services",
    "category": "Pe_sem_1_aiml_26_53",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 28,
    "question": "Which statement best characterizes Grok AI?",
    "options": [
      "It is developed by xAI and is associated with integration into the X (Twitter) platform",
      "It is developed by Anthropic and focuses only on academic research",
      "It is a purely offline tool with no connection to any social platform",
      "It was the first large language model ever released publicly"
    ],
    "correct": "It is developed by xAI and is associated with integration into the X (Twitter) platform",
    "category": "Pe_sem_1_aiml_26_54",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 29,
    "question": "Which statement best characterizes DeepSeek as an LLM offering?",
    "options": [
      "It is a video editing application with no connection to language models",
      "It is an AI model developed with an emphasis on openly available research and models",
      "It is a hardware chip manufacturer only",
      "It was created before the concept of Machine Learning existed"
    ],
    "correct": "It is an AI model developed with an emphasis on openly available research and models",
    "category": "Pe_sem_1_aiml_26_55",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 30,
    "question": "A company is evaluating several LLMs (ChatGPT, Claude, Gemini, Grok, DeepSeek) for internal adoption. What is the most reasonable way to compare them?",
    "options": [
      "Assume the newest model released is automatically the best for every task",
      "Compare documented features, ecosystem fit, and results from internal testing on the company's own use cases",
      "Pick whichever model has the shortest name",
      "Choose a model at random without any evaluation"
    ],
    "correct": "Compare documented features, ecosystem fit, and results from internal testing on the company's own use cases",
    "category": "Pe_sem_1_aiml_26_56",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 31,
    "question": "Which of the following best represents the typical applications of Prompt Engineering across industries?",
    "options": [
      "Customer support automation, content creation, coding assistance, and education",
      "Only manufacturing heavy machinery parts",
      "Only physical construction of buildings",
      "Only printing paper documents"
    ],
    "correct": "Customer support automation, content creation, coding assistance, and education",
    "category": "Pe_sem_1_aiml_26_57",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 32,
    "question": "Which best describes the typical career scope associated with Prompt Engineering as a skill?",
    "options": [
      "Roles focused solely on manufacturing computer processors",
      "Roles that bridge domain knowledge and AI interaction design, helping organizations get reliable outputs from AI models",
      "Roles that require no understanding of how AI models respond to instructions",
      "Roles limited only to translating documents between human languages"
    ],
    "correct": "Roles that bridge domain knowledge and AI interaction design, helping organizations get reliable outputs from AI models",
    "category": "Pe_sem_1_aiml_26_58",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 33,
    "question": "Which statement best describes the relationship between AI, Machine Learning, and Deep Learning?",
    "options": [
      "AI is a subset of Deep Learning, which is a subset of Machine Learning",
      "The three terms are unrelated fields with no overlap",
      "Machine Learning is a subset of AI, and Deep Learning is a further subset of Machine Learning",
      "Deep Learning is a superset that contains both AI and Machine Learning"
    ],
    "correct": "Machine Learning is a subset of AI, and Deep Learning is a further subset of Machine Learning",
    "category": "Pe_sem_1_aiml_26_59",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 34,
    "question": "A student new to the field asks for the best starting point before specializing in Prompt Engineering. What is the most reasonable advice?",
    "options": [
      "First build a basic understanding of AI, Machine Learning, and how LLMs work, then move into prompt design",
      "Skip understanding AI concepts entirely and only memorize prompt templates",
      "Only study hardware manufacturing before anything else",
      "Avoid learning about LLMs since they are unrelated to Prompt Engineering"
    ],
    "correct": "First build a basic understanding of AI, Machine Learning, and how LLMs work, then move into prompt design",
    "category": "Pe_sem_1_aiml_26_60",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 35,
    "question": "Generative AI models such as LLMs are primarily trained to:",
    "options": [
      "Predict and generate coherent sequences of text (or other content) based on patterns learned from data",
      "Store files permanently without any processing",
      "Physically manufacture computer components",
      "Only perform basic arithmetic calculations"
    ],
    "correct": "Predict and generate coherent sequences of text (or other content) based on patterns learned from data",
    "category": "Pe_sem_1_aiml_26_61",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 36,
    "question": "Why do many organizations invest in training employees on Prompt Engineering rather than retraining AI models?",
    "options": [
      "Because retraining a model is always faster than writing a prompt",
      "Because Prompt Engineering eliminates the need for any AI model",
      "Because well-designed prompts can significantly improve output reliability without the cost of retraining a model",
      "Because prompts can physically change a model's internal hardware"
    ],
    "correct": "Because well-designed prompts can significantly improve output reliability without the cost of retraining a model",
    "category": "Pe_sem_1_aiml_26_62",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 37,
    "question": "Which of the following best distinguishes narrow AI (like most current LLMs) from the broader concept of general AI?",
    "options": [
      "Narrow AI can perform literally any task a human can, without limitation",
      "General AI refers only to robots with physical bodies",
      "Narrow AI is designed to perform specific tasks well, while general AI would perform any intellectual task at a human level",
      "There is no meaningful distinction between the two concepts"
    ],
    "correct": "Narrow AI is designed to perform specific tasks well, while general AI would perform any intellectual task at a human level",
    "category": "Pe_sem_1_aiml_26_63",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 38,
    "question": "What is a key difference between traditional programming and Prompt Engineering as a way of directing computer behavior?",
    "options": [
      "Prompt Engineering requires writing machine code directly",
      "Traditional programming never involves any instructions at all",
      "There is no difference between the two approaches",
      "Prompt Engineering uses natural language instructions to guide behavior, while traditional programming uses explicit code and logic"
    ],
    "correct": "Prompt Engineering uses natural language instructions to guide behavior, while traditional programming uses explicit code and logic",
    "category": "Pe_sem_1_aiml_26_64",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 39,
    "question": "Which statement most accurately reflects a responsible way to compare ChatGPT, Claude, Gemini, Grok, and DeepSeek in a classroom discussion?",
    "options": [
      "State confidently that one specific model always outperforms all others on every benchmark",
      "Claim that all these models are exactly identical in every respect",
      "Focus on general concepts, intended use cases, and ecosystem differences rather than claiming one is definitively the best at everything",
      "Avoid mentioning any differences between the models at all"
    ],
    "correct": "Focus on general concepts, intended use cases, and ecosystem differences rather than claiming one is definitively the best at everything",
    "category": "Pe_sem_1_aiml_26_65",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 40,
    "question": "A student wants ChatGPT to write a 500-word essay on climate change for a college audience. Which prompt best applies Task, Constraints, and Output Format together?",
    "options": [
      "\"Climate change.\"",
      "\"Tell me something about the environment.\"",
      "\"Write a 500-word essay on climate change suitable for college students, using clear paragraphs and an introduction, body, and conclusion.\"",
      "\"Write something long about weather.\""
    ],
    "correct": "\"Write a 500-word essay on climate change suitable for college students, using clear paragraphs and an introduction, body, and conclusion.\"",
    "category": "Pe_sem_1_aiml_26_66",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 41,
    "question": "A manager wants a lengthy report summarized as bullet points under 100 words. Which prompt correctly matches this request?",
    "options": [
      "\"Tell me about this report.\"",
      "\"Summarize this report in bullet points, using no more than 100 words in total.\"",
      "\"Rewrite this report in full detail.\"",
      "\"Explain the report using as many words as possible.\""
    ],
    "correct": "\"Summarize this report in bullet points, using no more than 100 words in total.\"",
    "category": "Pe_sem_1_aiml_26_67",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 42,
    "question": "A job seeker wants an AI to improve their resume for a marketing position. Which prompt best applies Role, Task, and Context together?",
    "options": [
      "\"Fix my resume.\"",
      "\"Act as a professional resume writer. Improve this resume to highlight marketing skills and achievements for a digital marketing manager role.\"",
      "\"Make my resume longer.\"",
      "\"Tell me if my resume is good.\""
    ],
    "correct": "\"Act as a professional resume writer. Improve this resume to highlight marketing skills and achievements for a digital marketing manager role.\"",
    "category": "Pe_sem_1_aiml_26_68",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 43,
    "question": "A user asks an AI, \"Tell me about marketing,\" and receives a vague, generic response. What is most likely missing from this prompt?",
    "options": [
      "The prompt already contains everything needed and cannot be improved",
      "A persona is the only thing that could ever fix this prompt",
      "The prompt is too long and needs to be shortened further",
      "Context and Constraints that narrow down the specific angle, audience, or purpose"
    ],
    "correct": "Context and Constraints that narrow down the specific angle, audience, or purpose",
    "category": "Pe_sem_1_aiml_26_69",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 44,
    "question": "A content creator wants a blog post for a teenage audience with a casual, friendly tone. Which prompt best reflects this need?",
    "options": [
      "\"Write a blog post about study tips.\"",
      "\"Write a formal academic paper about study habits.\"",
      "\"Write a legal document about student responsibilities.\"",
      "\"Write a blog post about study tips for teenagers, using a casual and friendly tone with relatable examples.\""
    ],
    "correct": "\"Write a blog post about study tips for teenagers, using a casual and friendly tone with relatable examples.\"",
    "category": "Pe_sem_1_aiml_26_70",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 45,
    "question": "A student wants the AI to explain World War II as if it were a history professor. Which type of prompt is this?",
    "options": [
      "Close-ended prompt",
      "Persona prompt",
      "Question prompt",
      "Instruction prompt"
    ],
    "correct": "Persona prompt",
    "category": "Pe_sem_1_aiml_26_71",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 46,
    "question": "Which of the following is the best example of an instruction prompt?",
    "options": [
      "\"What is the capital of France?\"",
      "\"Is Paris the capital of France?\"",
      "\"Summarize the following article in three bullet points.\"",
      "\"Act as a tour guide in Paris.\""
    ],
    "correct": "\"Summarize the following article in three bullet points.\"",
    "category": "Pe_sem_1_aiml_26_72",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 47,
    "question": "Which of the following is the best example of a question prompt?",
    "options": [
      "\"Summarize the causes of climate change in a table.\"",
      "\"Act as a climate scientist.\"",
      "\"List the causes of climate change without any explanation.\"",
      "\"What are the main causes of climate change?\""
    ],
    "correct": "\"What are the main causes of climate change?\"",
    "category": "Pe_sem_1_aiml_26_73",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 48,
    "question": "A prompt gives a clear Role, Task, and Context but does not mention how the response should be presented. What is this prompt missing?",
    "options": [
      "Constraints",
      "Persona",
      "Output Format",
      "Task"
    ],
    "correct": "Output Format",
    "category": "Pe_sem_1_aiml_26_74",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 49,
    "question": "An employee needs to write a formal letter to a client requesting a project extension. Which prompt best includes Role, Context, and Constraints?",
    "options": [
      "\"Write a letter.\"",
      "\"Act as a project manager. Write a formal letter to a client explaining a two-week delay and requesting an extension, keeping the tone professional and the letter under 200 words.\"",
      "\"Tell the client we are late.\"",
      "\"Write an angry message to the client.\""
    ],
    "correct": "\"Act as a project manager. Write a formal letter to a client explaining a two-week delay and requesting an extension, keeping the tone professional and the letter under 200 words.\"",
    "category": "Pe_sem_1_aiml_26_75",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 50,
    "question": "Which revision best improves the poor prompt \"Write about dogs\"?",
    "options": [
      "\"Dogs.\"",
      "\"Write about animals.\"",
      "\"Write a 300-word informative article about the health benefits of owning a dog, aimed at first-time pet owners.\"",
      "\"Tell me something.\""
    ],
    "correct": "\"Write a 300-word informative article about the health benefits of owning a dog, aimed at first-time pet owners.\"",
    "category": "Pe_sem_1_aiml_26_76",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 51,
    "question": "Which of the following prompts best demonstrates the use of Constraints to limit word count and tone?",
    "options": [
      "\"Explain photosynthesis.\"",
      "\"Explain photosynthesis in exactly 100 words, using a formal and academic tone.\"",
      "\"Tell me about plants.\"",
      "\"Write everything you know about biology.\""
    ],
    "correct": "\"Explain photosynthesis in exactly 100 words, using a formal and academic tone.\"",
    "category": "Pe_sem_1_aiml_26_77",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 52,
    "question": "A student wants to write an informal letter to a friend describing a recent vacation. Which prompt best matches this intent?",
    "options": [
      "\"Write a formal business letter about a vacation policy.\"",
      "\"Write a legal notice about travel insurance.\"",
      "\"Write a friendly, informal letter to my friend describing my recent beach vacation, including fun moments and casual language.\"",
      "\"Write a technical report on tourism statistics.\""
    ],
    "correct": "\"Write a friendly, informal letter to my friend describing my recent beach vacation, including fun moments and casual language.\"",
    "category": "Pe_sem_1_aiml_26_78",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 53,
    "question": "Which prompt best specifies Constraints for writing a short story, including genre, length, and a plot twist?",
    "options": [
      "\"Write a 400-word mystery short story that includes an unexpected twist at the end.\"",
      "\"Write a story.\"",
      "\"Tell me a tale.\"",
      "\"Write something creative.\""
    ],
    "correct": "\"Write a 400-word mystery short story that includes an unexpected twist at the end.\"",
    "category": "Pe_sem_1_aiml_26_79",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 54,
    "question": "A survey designer wants an AI-generated question that can only be answered with 'yes' or 'no'. Which prompt type is most appropriate?",
    "options": [
      "Open-ended prompt",
      "Persona prompt",
      "Instruction prompt for a story",
      "Close-ended prompt"
    ],
    "correct": "Close-ended prompt",
    "category": "Pe_sem_1_aiml_26_80",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 55,
    "question": "A team is brainstorming new product ideas and wants the AI to generate as many creative possibilities as possible. Which prompt type suits this best?",
    "options": [
      "Close-ended prompt",
      "Open-ended prompt",
      "Question prompt seeking a single fact",
      "Persona prompt limited to one identity"
    ],
    "correct": "Open-ended prompt",
    "category": "Pe_sem_1_aiml_26_81",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 56,
    "question": "A student asks the AI to respond \"as a certified nutritionist\" when answering a diet question. What does this Role component primarily establish?",
    "options": [
      "The exact word count of the response",
      "The perspective and expertise the AI should adopt while answering",
      "The file format the answer should be saved in",
      "Whether the answer will be yes or no"
    ],
    "correct": "The perspective and expertise the AI should adopt while answering",
    "category": "Pe_sem_1_aiml_26_82",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 57,
    "question": "Which of the following best adds necessary Context before asking the AI to write a product description?",
    "options": [
      "\"Write a description.\"",
      "\"Make it good.\"",
      "\"Product.\"",
      "\"This product is a reusable water bottle aimed at eco-conscious young professionals, priced at a premium.\""
    ],
    "correct": "\"This product is a reusable water bottle aimed at eco-conscious young professionals, priced at a premium.\"",
    "category": "Pe_sem_1_aiml_26_83",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 58,
    "question": "A student needs to email a professor requesting a deadline extension. Which prompt best includes Role, Task, Context, Constraints, and Output Format together?",
    "options": [
      "\"Ask for more time.\"",
      "\"Tell the professor I am late.\"",
      "\"Act as a student writing to a professor. Write a polite email requesting a 3-day extension on an assignment due to illness, keeping it under 100 words and formatted as a formal email with a subject line.\"",
      "\"Write something about deadlines.\""
    ],
    "correct": "\"Act as a student writing to a professor. Write a polite email requesting a 3-day extension on an assignment due to illness, keeping it under 100 words and formatted as a formal email with a subject line.\"",
    "category": "Pe_sem_1_aiml_26_84",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 59,
    "question": "What is a key benefit of using a prompt template when generating multiple exam questions of the same type?",
    "options": [
      "It guarantees every generated question will be identical in wording",
      "It removes the need to specify any Task at all",
      "It ensures consistency in structure and format while saving time on repeated tasks",
      "It prevents the AI from ever making mistakes"
    ],
    "correct": "It ensures consistency in structure and format while saving time on repeated tasks",
    "category": "Pe_sem_1_aiml_26_85",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 60,
    "question": "Which of the following is a common mistake that weakens the effectiveness of a prompt?",
    "options": [
      "Leaving out important details such as the intended audience, format, or constraints",
      "Including a clear task description",
      "Specifying the desired output format",
      "Providing relevant background context"
    ],
    "correct": "Leaving out important details such as the intended audience, format, or constraints",
    "category": "Pe_sem_1_aiml_26_86",
    "subCategory": "",
    "difficulty": "Medium",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 61,
    "question": "Two prompts are used to generate a marketing email: Prompt A only states \"Write a marketing email,\" while Prompt B specifies the product, target audience, tone, and a call to action. Why is Prompt B likely to produce a more effective result?",
    "options": [
      "Because Prompt B is shorter and therefore easier for the AI to process",
      "Because Prompt A already contains every necessary detail implicitly",
      "Because it supplies the Context, Constraints, and Task details the AI needs to tailor the message, reducing ambiguity",
      "Because longer prompts always produce worse results regardless of content"
    ],
    "correct": "Because it supplies the Context, Constraints, and Task details the AI needs to tailor the message, reducing ambiguity",
    "category": "Pe_sem_1_aiml_26_87",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 62,
    "question": "A prompt clearly defines Role, Task, and Context but produces inconsistent formatting each time it is run. What is the most likely underlying weakness?",
    "options": [
      "The prompt does not specify an Output Format, leaving presentation up to the AI's discretion",
      "The Role component was defined incorrectly",
      "The Task was too specific and needs to be removed",
      "The Context contained too much irrelevant detail"
    ],
    "correct": "The prompt does not specify an Output Format, leaving presentation up to the AI's discretion",
    "category": "Pe_sem_1_aiml_26_88",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 63,
    "question": "A student's initial prompt to improve a resume produced generic advice. Considering audience, format, and constraints, which refined prompt is most likely to produce a tailored, actionable result?",
    "options": [
      "\"Make my resume better.\"",
      "\"Act as a career coach. Review this resume for a software engineering internship and suggest specific improvements to the skills and experience sections, presented as a numbered list.\"",
      "\"Is my resume good?\"",
      "\"Fix errors in my resume.\""
    ],
    "correct": "\"Act as a career coach. Review this resume for a software engineering internship and suggest specific improvements to the skills and experience sections, presented as a numbered list.\"",
    "category": "Pe_sem_1_aiml_26_89",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 64,
    "question": "A user needs an 800-word blog post for non-technical readers explaining cloud computing, in a friendly but informative tone. Which prompt best balances all these multiple factors?",
    "options": [
      "\"Explain cloud computing.\"",
      "\"Write a technical whitepaper on cloud computing architecture.\"",
      "\"Write a short poem about clouds.\"",
      "\"Write an 800-word blog post explaining cloud computing to readers with no technical background, using a friendly and informative tone with simple analogies.\""
    ],
    "correct": "\"Write an 800-word blog post explaining cloud computing to readers with no technical background, using a friendly and informative tone with simple analogies.\"",
    "category": "Pe_sem_1_aiml_26_90",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 65,
    "question": "A user wants an AI to produce a structured comparison table between two smartphone models based on price, camera, and battery life. Which prompt best combines Task, Constraints, and Output Format?",
    "options": [
      "\"Compare these two smartphones based on price, camera quality, and battery life, and present the comparison as a table with the phones as columns and the three features as rows.\"",
      "\"Tell me about these phones.\"",
      "\"Which phone is better?\"",
      "\"Write a story about smartphones.\""
    ],
    "correct": "\"Compare these two smartphones based on price, camera quality, and battery life, and present the comparison as a table with the phones as columns and the three features as rows.\"",
    "category": "Pe_sem_1_aiml_26_91",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 66,
    "question": "A prompt \"Explain machine learning\" produces an overly broad and shallow answer. Considering only one change is allowed, which single fix would most effectively improve the response?",
    "options": [
      "Changing the wording from 'explain' to 'describe' without adding any new information",
      "Adding Context specifying the audience's background and the desired depth of explanation (e.g., \"for a beginner, in simple terms\")",
      "Removing the word 'machine learning' entirely from the prompt",
      "Making the prompt shorter by deleting the word 'explain'"
    ],
    "correct": "Adding Context specifying the audience's background and the desired depth of explanation (e.g., \"for a beginner, in simple terms\")",
    "category": "Pe_sem_1_aiml_26_92",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 67,
    "question": "A company is designing a customer-service training simulation where the AI must consistently respond as a specific support agent character across a conversation. Which prompt type is most appropriate, and why?",
    "options": [
      "An instruction prompt, because it only issues one-time commands unrelated to identity",
      "A close-ended prompt, because it restricts answers to yes or no",
      "A question prompt, because it only seeks factual answers",
      "A persona prompt, because it fixes the AI's identity and voice consistently throughout the exercise"
    ],
    "correct": "A persona prompt, because it fixes the AI's identity and voice consistently throughout the exercise",
    "category": "Pe_sem_1_aiml_26_93",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 68,
    "question": "A prompt must satisfy all of the following: under 150 words, formal tone, and presented as a bullet list. Which of the following prompts satisfies every constraint?",
    "options": [
      "\"Summarize this policy update briefly.\"",
      "\"Summarize this policy update in under 150 words, using a formal tone, and present it as a bullet list.\"",
      "\"Summarize this policy update in a casual tone as a single paragraph.\"",
      "\"Summarize this policy update in detail, using as many words as needed.\""
    ],
    "correct": "\"Summarize this policy update in under 150 words, using a formal tone, and present it as a bullet list.\"",
    "category": "Pe_sem_1_aiml_26_94",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 69,
    "question": "A student's cover letter prompt specifies Role and Task but omits any mention of the company or job being applied for. What is the most significant weakness in this prompt?",
    "options": [
      "The prompt is too short to be processed by the AI",
      "Missing Context about the specific job and company, which limits how tailored and relevant the letter can be",
      "The Role component is unnecessary and should be removed",
      "The Task component was stated in the wrong order"
    ],
    "correct": "Missing Context about the specific job and company, which limits how tailored and relevant the letter can be",
    "category": "Pe_sem_1_aiml_26_95",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 70,
    "question": "A stakeholder gives an ambiguous request: \"Make our website content better.\" Before writing any prompt, what is the most effective Prompt Engineering strategy?",
    "options": [
      "Immediately generate content without seeking any clarification",
      "Assume the stakeholder wants a complete website redesign",
      "Ignore the request since it lacks full detail",
      "Ask clarifying questions to identify the specific goal, audience, and desired outcome before crafting the prompt"
    ],
    "correct": "Ask clarifying questions to identify the specific goal, audience, and desired outcome before crafting the prompt",
    "category": "Pe_sem_1_aiml_26_96",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 71,
    "question": "After an AI gives a vague first response, what is generally the most effective way to refine the interaction across multiple turns?",
    "options": [
      "Start a completely new, unrelated conversation from scratch",
      "Repeat the exact same prompt again without any changes",
      "Provide additional Context or Constraints that were missing, building on the previous response rather than starting over",
      "Ask the AI to guess what was meant without providing any new information"
    ],
    "correct": "Provide additional Context or Constraints that were missing, building on the previous response rather than starting over",
    "category": "Pe_sem_1_aiml_26_97",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 72,
    "question": "A professor wants an AI to generate 10 quiz questions with a specific, balanced mix of difficulty levels. Which prompt best reflects a well-structured request?",
    "options": [
      "\"Make some quiz questions about photosynthesis.\"",
      "\"Write a paragraph about photosynthesis.\"",
      "\"Give me questions.\"",
      "\"Act as an exam question writer. Generate 10 multiple-choice questions on photosynthesis: 4 easy, 4 medium, and 2 hard, each with four options and one correct answer, presented in a numbered list.\""
    ],
    "correct": "\"Act as an exam question writer. Generate 10 multiple-choice questions on photosynthesis: 4 easy, 4 medium, and 2 hard, each with four options and one correct answer, presented in a numbered list.\"",
    "category": "Pe_sem_1_aiml_26_98",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 73,
    "question": "When comparing a formal letter prompt and an informal letter prompt on the same topic, which element most importantly differentiates the two?",
    "options": [
      "The specified tone and the relationship between sender and recipient given in the Context",
      "The total number of words used in the prompt itself",
      "The font used to display the prompt",
      "Whether the prompt is typed in uppercase or lowercase letters"
    ],
    "correct": "The specified tone and the relationship between sender and recipient given in the Context",
    "category": "Pe_sem_1_aiml_26_99",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 74,
    "question": "A team notices an AI produces inconsistent tone across responses because the prompt never specifies who the reader is. What is the most effective fix?",
    "options": [
      "Add Context clearly identifying the intended audience so the AI can maintain a consistent tone suited to them",
      "Remove the Task from the prompt entirely",
      "Make the prompt longer by repeating the same instruction multiple times",
      "Switch to a close-ended prompt regardless of the actual goal"
    ],
    "correct": "Add Context clearly identifying the intended audience so the AI can maintain a consistent tone suited to them",
    "category": "Pe_sem_1_aiml_26_100",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 75,
    "question": "A writer wants a short story with a specific plot twist and an exact word count, but their draft prompt only says \"Write a story with a twist.\" Which revision most effectively prioritizes the missing Constraints and Output Format?",
    "options": [
      "\"Write a story with a twist.\"",
      "\"Write a 600-word short story about a detective, ending with a twist revealing the detective is the culprit, formatted as continuous prose.\"",
      "\"Write about detectives.\"",
      "\"Write a twist.\""
    ],
    "correct": "\"Write a 600-word short story about a detective, ending with a twist revealing the detective is the culprit, formatted as continuous prose.\"",
    "category": "Pe_sem_1_aiml_26_101",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 76,
    "question": "A prompt for generating employee feedback is extremely rigid, specifying exact sentence structures for every line, resulting in robotic, repetitive output. What principle best explains how to fix this?",
    "options": [
      "Add even more rigid sentence-by-sentence rules to eliminate all variation",
      "Remove every Constraint entirely so the response becomes totally random",
      "Increase the Role specification only, since Constraints are irrelevant to tone",
      "Balance necessary Constraints with enough flexibility for natural language, rather than over-constraining every detail"
    ],
    "correct": "Balance necessary Constraints with enough flexibility for natural language, rather than over-constraining every detail",
    "category": "Pe_sem_1_aiml_26_102",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 77,
    "question": "A legal team wants an AI to act as a legal advisor, provide a jurisdiction disclaimer, and present findings as a bullet-point summary. Which prompt best combines Role, Constraints, and Output Format together?",
    "options": [
      "\"Explain this contract.\"",
      "\"Tell me if this contract is good.\"",
      "\"Act as a legal advisor. Summarize the key points of this contract as a bullet list, and include a disclaimer that this is not a substitute for professional legal counsel and may vary by jurisdiction.\"",
      "\"Rewrite this contract from scratch.\""
    ],
    "correct": "\"Act as a legal advisor. Summarize the key points of this contract as a bullet list, and include a disclaimer that this is not a substitute for professional legal counsel and may vary by jurisdiction.\"",
    "category": "Pe_sem_1_aiml_26_103",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 78,
    "question": "An organization handling sensitive internal data is choosing between ChatGPT, Claude, Gemini, Grok, and DeepSeek for an internal tool. Beyond general output quality, what is the most critical additional factor to weigh?",
    "options": [
      "Which model has the shortest name",
      "Which model was mentioned most recently in casual conversation",
      "Each provider's data handling, privacy policies, and security practices relevant to sensitive information",
      "Which model has the most colorful logo"
    ],
    "correct": "Each provider's data handling, privacy policies, and security practices relevant to sensitive information",
    "category": "Pe_sem_1_aiml_26_104",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 79,
    "question": "A user's prompt asks an AI to write a complete email including subject line, greeting, body, and closing, but the AI keeps omitting the subject line. Considering the five prompt components, what is most likely the root cause?",
    "options": [
      "The Role component was defined incorrectly",
      "The Context was excessively long and confused the AI",
      "The Constraints included too few word-count limits",
      "The Output Format did not explicitly require a subject line as part of the structure"
    ],
    "correct": "The Output Format did not explicitly require a subject line as part of the structure",
    "category": "Pe_sem_1_aiml_26_105",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  },
  {
    "number": 80,
    "question": "An instructor designs an AI evaluation task requiring students to distinguish an AI response driven mainly by Machine Learning's classification abilities from one driven by Generative AI's content-creation abilities. Which example best represents the Generative AI side of this distinction?",
    "options": [
      "An AI sorting emails into 'spam' or 'not spam' categories",
      "An AI predicting whether a loan applicant will default",
      "An AI tagging images as containing a cat or not",
      "An AI writing an original short story based on a given theme"
    ],
    "correct": "An AI writing an original short story based on a given theme",
    "category": "Pe_sem_1_aiml_26_106",
    "subCategory": "",
    "difficulty": "Hard",
    "randomizeOptions": true,
    "pointCorrect": 1,
    "pointIncorrect": 0,
    "type": "Single Select"
  }
];
