document.addEventListener('DOMContentLoaded', function() {
    let activeAI = null; // Змінна для зберігання активного AI (ChatGPT або Gemini)

    // Обробка подій кліків для ChatGPT
    const gptButton = document.querySelector('.avatar-button-gpt');
    const gptProfile = gptButton.querySelector('.avatar-profile'); // Отримуємо зображення профілю

    gptButton.addEventListener('click', function() {
        activeAI = 'chatgpt'; // Встановлюємо активний AI як ChatGPT
        highlightActiveAI(gptProfile); // Підсвічуємо активну секцію

        // Логіка для підключення до API ChatGPT
        // TODO: Виклик API ChatGPT на основі активного AI
    });

    // Обробка подій кліків для Gemini
    const geminiButton = document.querySelector('.avatar-button-gemini');
    const geminiProfile = geminiButton.querySelector('.avatar-profile'); // Отримуємо зображення профілю

    geminiButton.addEventListener('click', function() {
        activeAI = 'gemini'; // Встановлюємо активний AI як Gemini
        highlightActiveAI(geminiProfile); // Підсвічуємо активну секцію

        // Логіка для підключення до API Gemini
        // TODO: Виклик API Gemini на основі активного AI
    });

    // Функція для підсвічування активної секції
    function highlightActiveAI(selectedProfile) {
        // Видаляємо підсвітку з усіх профілів
        document.querySelectorAll('.avatar-profile').forEach(profile => {
            profile.classList.remove('selected'); // Видаляємо клас активності
        });

        // Додаємо підсвітку до вибраної секції
        selectedProfile.classList.add('selected'); // Додаємо обведення до зображення профілю
    }

    // Анімація кнопки завантаження
    const downloadButton = document.querySelector('.download-button');
    
    downloadButton.addEventListener('click', function() {
        alert('Ви натиснули на кнопку завантаження!');
        // TODO: Додай функціонал завантаження файлів тут
    });
});
