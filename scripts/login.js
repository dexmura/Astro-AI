// login.js
document.addEventListener('DOMContentLoaded', function() {
    const userButton = document.getElementById('userButton'); // Кнопка користувача
    const loginModal = document.getElementById('loginModal'); // Спливаюче вікно
    const closeModalButton = document.querySelector('.login-close'); // Кнопка закриття
    const loginForm = document.getElementById('loginForm'); // Форма входу
    const googleLoginButton = document.getElementById('googleLoginButton'); // Кнопка входу через Google

    // Відкриття модального вікна
    userButton.addEventListener('click', function() {
        loginModal.classList.remove('hidden'); // Зняти клас hidden
        loginModal.style.display = "block"; // Встановити стиль відображення на block
    });

    // Закриття модального вікна
    closeModalButton.addEventListener('click', function() {
        loginModal.classList.add('hidden'); // Додати клас hidden
        loginModal.style.display = "none"; // Сховати модальне вікно
    });

    // Закриття модального вікна при натисканні поза ним
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.classList.add('hidden'); // Додати клас hidden
            loginModal.style.display = "none"; // Сховати модальне вікно
        }
    });

    // Обробка події на формі входу
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Заборонити стандартну поведінку форми

        const email = document.getElementById('email').value; // Отримати email
        const password = document.getElementById('password').value; // Отримати пароль

        // Тут ви можете додати логіку для входу
        console.log(`Email: ${email}, Password: ${password}`);

        // Закрити модальне вікно після входу
        loginModal.classList.add('hidden');
        loginModal.style.display = "none";
    });

    // Обробка події на кнопці входу через Google
    googleLoginButton.addEventListener('click', function() {
        // Тут ви можете додати логіку для входу через Google
        console.log("Login with Google");
    });
});
