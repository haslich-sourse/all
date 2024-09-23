const circle = document.getElementById('circle'); // ваш круг
let targetX = null;
let targetY = null;
let isMoving = false;
let directionX = 0;
let directionY = 0;

document.addEventListener('click', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    isMoving = true; // Начинаем движение

    // Рассчитываем направление
    const rect = circle.getBoundingClientRect();
    const circleX = rect.left + rect.width / 2;
    const circleY = rect.top + rect.height / 2;

    const dx = targetX - circleX;
    const dy = targetY - circleY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
        directionX = dx / distance;
        directionY = dy / distance;
    }
});

function updatePosition() {
    if (isMoving) {
        circle.style.left = `${circle.offsetLeft + directionX * 10}px`; // Скорость движения
        circle.style.top = `${circle.offsetTop + directionY * 10}px`; // Скорость движения

        // Проверка выхода за границы окна
        // const rect = circle.getBoundingClientRect();
        //if (rect.left < 0 || rect.right > window.innerWidth || rect.top < 0 || rect.bottom > window.innerHeight) {
        //    isMoving = false; // Остановка, если вышел за границы
        // }
    }
    requestAnimationFrame(updatePosition); // Продолжаем обновлять позицию
}

// Запуск анимации
updatePosition();
