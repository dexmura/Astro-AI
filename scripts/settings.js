// settings.js
document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.querySelector('.button-settings'); // Знайти кнопку налаштувань
    const modal = document.getElementById('settingsModal'); // Знайти модальне вікно
    const closeButton = document.querySelector('.close'); // Знайти кнопку закриття
    const form = document.querySelector('.settings-form'); // Знайти форму налаштувань

    // Відкриття модального вікна
    settingsButton.addEventListener('click', function() {
        modal.classList.remove('hidden'); // Зняти клас hidden
        modal.style.display = "block"; // Встановити стиль відображення на block
    });

    // Закриття модального вікна
    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden'); // Додати клас hidden
        modal.style.display = "none"; // Сховати модальне вікно
    });

    // Закриття модального вікна при натисканні поза ним
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden'); // Додати клас hidden
            modal.style.display = "none"; // Сховати модальне вікно
        }
    });

    // Обробка події на формі збереження налаштувань
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Забороняємо стандартну поведінку форми

        const theme = document.getElementById('theme').value; // Отримати вибрану тему
        const language = document.getElementById('language').value; // Отримати вибрану мову
        const notifications = document.getElementById('notifications').checked; // Отримати стан сповіщень

        // Логіка для збереження налаштувань
        console.log(`Selected theme: ${theme}`);
        console.log(`Selected language: ${language}`);
        console.log(`Notifications enabled: ${notifications}`);

        // Тут ви можете додати код для фактичного збереження налаштувань
        // Наприклад, зберігати їх в локальному сховищі
        localStorage.setItem('theme', theme);
        localStorage.setItem('language', language);
        localStorage.setItem('notifications', notifications);

        // Закрити модальне вікно після збереження
        modal.classList.add('hidden');
        modal.style.display = "none";
    });

    // Завантаження налаштувань при відкритті модального вікна
    const loadSettings = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const savedLanguage = localStorage.getItem('language') || 'en';
        const savedNotifications = localStorage.getItem('notifications') === 'true';

        document.getElementById('theme').value = savedTheme;
        document.getElementById('language').value = savedLanguage;
        document.getElementById('notifications').checked = savedNotifications;
    };

    // Завантажити налаштування при відкритті модального вікна
    settingsButton.addEventListener('click', loadSettings);
});
