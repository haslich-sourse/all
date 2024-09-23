let score = 0;
const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');

// Функция для перемещения квадрата
function moveSquare() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

// Обработчик клика
square.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Счет: ${score}`;
    moveSquare();
});

// Начальная позиция квадрата
moveSquare();
