// Отримуємо посилання на елементи
const inputText = document.querySelector('.input-text'); // Поле вводу
const buttonSend = document.querySelector('.button-send'); // Кнопка надсилання
const typeBox = document.querySelector('.type-box'); // Контейнер для введення
const tagsSection = document.querySelector('.tags-section'); // Контейнер для тегів

// Об'єкт для зберігання контейнерів повідомлень для кожного тегу
const tagContainers = {};

// Додати обробник події на кнопку надсилання
buttonSend.addEventListener('click', function() {
    const messageText = inputText.value.trim(); // Отримуємо текст з поля вводу
    const currentTag = document.querySelector('.tags.highlight p').textContent.slice(2); // Отримуємо текст вибраного тегу без '# '

    if (messageText && currentTag) {
        addUserMessage(messageText, currentTag); // Додаємо повідомлення від користувача
        inputText.value = ''; // Очищаємо поле вводу

        // Імітуємо відповідь бота через 1 секунду
        setTimeout(function() {
            addSystemMessage('Це автоматична відповідь від бота.', currentTag);
        }, 1000);
    }
});

// Функція для додавання нового тегу
function addNewTag(tagText) {
    const limitedText = tagText.length > 10 ? tagText.slice(0, 10) + '...' : tagText;

    // Створення нового елемента тегу
    const newTag = document.createElement('div');
    newTag.classList.add('tags');
    newTag.innerHTML = `<p># ${limitedText}</p>`;
    tagsSection.appendChild(newTag);

    // Створення контейнера для повідомлень цього тегу
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container hidden'; // Додати клас для стилізації та ховати за замовчуванням
    document.body.insertBefore(messageContainer, typeBox); // Додаємо контейнер вище поля вводу
    tagContainers[limitedText] = messageContainer; // Зберігаємо контейнер у об'єкті

    // Додати можливість вибору тегу
    newTag.addEventListener('click', function() {
        displayHistory(limitedText);
        highlightTag(newTag);
    });
}

// Функція для додавання повідомлення від користувача
function addUserMessage(text, tag) {
    const messageElement = document.createElement('div'); // Створюємо новий елемент
    messageElement.className = 'message user-message'; // Додаємо клас для стилізації повідомлення від користувача
    messageElement.textContent = text; // Встановлюємо текст повідомлення

    // Додаємо повідомлення в контейнер для вибраного тегу
    tagContainers[tag].appendChild(messageElement);
    tagContainers[tag].scrollTop = tagContainers[tag].scrollHeight; // Прокручуємо вниз, щоб показати нове повідомлення
}

// Функція для додавання системного повідомлення (від бота)
function addSystemMessage(text, tag) {
    const messageElement = document.createElement('div'); // Створюємо новий елемент
    messageElement.className = 'message system-message'; // Додаємо клас для стилізації повідомлення від системи (бота)
    messageElement.textContent = text; // Встановлюємо текст системного повідомлення

    // Додаємо повідомлення в контейнер для вибраного тегу
    tagContainers[tag].appendChild(messageElement);
    tagContainers[tag].scrollTop = tagContainers[tag].scrollHeight; // Прокручуємо вниз, щоб показати нове повідомлення
}

// Додати обробку натискання клавіші Enter для відправки повідомлення
inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buttonSend.click(); // Імітує натискання кнопки надсилання
    }
});

// Функція для відображення історії повідомлень
function displayHistory(tag) {
    // Сховати всі контейнери
    Object.values(tagContainers).forEach(container => {
        container.classList.add('hidden');
    });

    // Показати контейнер для вибраного тегу
    const selectedContainer = tagContainers[tag];
    selectedContainer.classList.remove('hidden');

    // Очищуємо поле вводу
    inputText.value = '';
}

// Функція для підсвічування вибраного тегу
function highlightTag(selectedTag) {
    const allTags = document.querySelectorAll('.tags');
    allTags.forEach(tag => tag.classList.remove('highlight')); // Видаляємо підсвічування з усіх тегів
    selectedTag.classList.add('highlight'); // Додаємо підсвічування до вибраного тегу
}

// Додати кнопку для додавання нового тегу
document.querySelector('.plus-sign').addEventListener('click', function() {
    const tagText = prompt('Введіть назву нового тегу:');
    if (tagText) {
        addNewTag(tagText);
    }
});
