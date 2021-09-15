const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90","right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults);
}

submitAnswerBtn.addEventListener("click", calculateScore);