const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-container");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreElement.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";
    scoreContainer.style.display = "none";
    loadQuestion();
}

// Initialize the quiz
quizContainer.style.display = "block";
loadQuestion();
