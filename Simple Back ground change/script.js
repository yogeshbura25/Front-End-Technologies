document.addEventListener('DOMContentLoaded', function() {
    const colorChangeButton = document.getElementById('colorChangeButton');

    colorChangeButton.addEventListener('click', function() {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33B5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});