console.log("hello")
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Предопределенные данные (логин и пароль)
    const storedUsername = 'user123';
    const storedPassword = 'password123';
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'index.html'; // Перенаправление на основную страницу
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('loggedIn', 'true');  // Сохраняем статус входа в localStorage
            window.location.href = 'index.html';       // Перенаправляем на основную страницу
        } else {
            message.textContent = 'Неправильный логин или пароль';
        }
    });
});