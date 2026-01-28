# React Quiz App 🧠⚛️

A simple and interactive **React Quiz Application** built using **React Hooks** and **React-Bootstrap**.  
Users can answer multiple-choice questions, navigate through them, and view their final score at the end.

---

## 🚀 Features

- Multiple-choice quiz questions
- One answer allowed per question
- Instant answer validation (correct / wrong highlight)
- Score tracking
- Final score summary after completion
- Responsive UI using React-Bootstrap

---

## 🛠️ Technologies Used

- React (useState Hook)
- React-Bootstrap
- JavaScript (ES6)
- CSS

---

## 📂 Project Structure

react-quiz-app/
│
├── src/
│ ├── data/
│ │ └── question.js
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
│
├── public/
├── package.json
└── README.md


---

## 📊 How It Works

1. Questions are loaded from `data/question.js`
2. User selects an option
   - Correct answer → highlighted in **green**
   - Wrong answer → highlighted in **red**
3. User clicks **Next** to move to the next question
4. Each question can be answered only once
5. After completing all questions, the final score is displayed

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/SathyaPhp/react-quiz-app.git

2️⃣ Navigate to the Project
cd react-quiz-app

3️⃣ Install Dependencies
npm install

4️⃣ Start the Development Server
npm run dev


The app will run on:

http://localhost:5173

🧪 Sample Question Format
export default [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  }
];

📌 Future Improvements

Add timer per question

Add restart quiz option

Show correct answer when user selects wrong option

Store score history

Mobile-first UI improvements

👨‍💻 Author

Sathya Murugan
React Developer (3+ years experience)

GitHub: https://github.com/SathyaPhp

📜 License

This project is open-source and free to use.