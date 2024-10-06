document.addEventListener('DOMContentLoaded', function() {
    // 1. Обробка подій кліків для аватарів
    const avatarButtons = document.querySelectorAll('.avatar-button');
    
    avatarButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            alert(`Аватар ${index + 1} був обраний!`);
            // Додай тут логіку для обробки вибору аватара
        });
    });

    // 2. Функція пошуку
    const searchInput = document.querySelector('.search');
    
    searchInput.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        console.log(`Пошуковий запит: ${query}`);
        // Додай тут логіку для пошуку або фільтрації елементів
    });

    // 4. Анімація при наведенні на аватар
    const avatarProfiles = document.querySelectorAll('.avatar-profile');
    
    avatarProfiles.forEach((avatar) => {
        avatar.addEventListener('mouseover', function() {
            avatar.style.transform = 'scale(1.1)';
        });

        avatar.addEventListener('mouseout', function() {
            avatar.style.transform = 'scale(1)';
        });
    });

    // 5. Анімація кнопки завантаження
    const downloadButton = document.querySelector('.download-button');
    
    downloadButton.addEventListener('click', function() {
        alert('Ви натиснули на кнопку завантаження!');
        // Додай функціонал завантаження файлів тут
    });

    // 6. Обробка подій налаштувань
    const settingsButton = document.querySelector('.avatar-settings');
    
    settingsButton.addEventListener('click', function() {
        alert('Налаштування відкриті');
        // Можеш додати тут логіку для відкриття меню налаштувань
    });
    
    // 7. Додавання нових тегів з можливістю редагування та видалення
    const plusSign = document.querySelector('.plus-sign');
    const tagsSection = document.querySelector('.tags-section');

    plusSign.addEventListener('click', function() {
    const newTag = document.createElement('div');
    newTag.classList.add('tags');

    const tagText = prompt('Введіть назву нового тегу:');
    if (tagText) {
    // Обмежуємо кількість символів
        const limitedText = tagText.length > 10 ? tagText.slice(0, 10) + '...' : tagText;
        newTag.innerHTML = `<p># ${limitedText}</p>`;
        tagsSection.appendChild(newTag);

    // Додати можливість редагування тегу
    newTag.addEventListener('click', function() {
        const editedText = prompt('Редагуйте назву тегу:', tagText);
        if (editedText) {
            // Обмежуємо кількість символів
            const limitedEditedText = editedText.length > 10 ? editedText.slice(0, 10) + '...' : editedText;
            newTag.innerHTML = `<p>$# {limitedEditedText}</p>`;
         }
    });

    // Додати можливість видалення тегу при натисканні правої кнопки миші
    newTag.addEventListener('contextmenu', function(event) {
        event.preventDefault();  // Запобігає стандартному контекстному меню
        if (confirm('Ви впевнені, що хочете видалити цей тег?')) {
            tagsSection.removeChild(newTag);  // Видаляємо тег
        }
    });
    }
    });
    
});