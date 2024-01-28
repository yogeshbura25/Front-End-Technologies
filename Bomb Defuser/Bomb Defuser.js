let defuse = document.getElementById("defuser");
let timer = document.getElementById("timer");
let count = 10;

let x = setInterval(function() {
    count = count - 1;
    timer.textContent = count;
    if (count === 0) {
        timer.textContent = "Boom";
        clearInterval(x)
    }

}, 1000);
defuse.addEventListener("keydown", function(event) {
    let text = defuse.value;
    if (event.key === "Enter" && text === "defuse" && count > 0) {
        timer.textContent = "You did it!";
        clearInterval(x)
    }
});