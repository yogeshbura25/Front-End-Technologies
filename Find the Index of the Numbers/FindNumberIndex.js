let numbers = [17, 31, 77, 20, 63];
let userInputE1 = document.getElementById("userInput");
let findBtnE1 = document.getElementById("findBtn");
let indexOfNumberE1 = document.getElementById("indexOfNumber");


function findIndexOfNumber() {
    let number = parseInt(userInput.value);
    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === number) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumberE1.textContent = itemIndex;
}