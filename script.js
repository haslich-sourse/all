document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('loggedIn');  // Удаляем статус входа
    window.location.href = 'guest.html';  // Возвращаем на гостевую страницу
});

// Если не залогинен, перенаправляем на гостевую страницу
if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'guest.html';
}