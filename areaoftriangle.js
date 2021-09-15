const measurment = document.querySelectorAll(".measurment-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");

function calculateMulOf(a) {
    const square = a*a;
    return square;
}

function calculateArea() {
    const square = calculateMulOf(Number(measurment[0].value));
    const finalArea = square/2;
    outputEl.textContent = "The Area is " + finalArea
}

checkAreaBtn.addEventListener("click", calculateArea);