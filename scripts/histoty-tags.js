// Отримуємо посилання на елементи
const inputText = document.querySelector('.input-text'); // Поле вводу
const buttonSend = document.querySelector('.button-send'); // Кнопка надсилання
const typeBox = document.querySelector('.type-box'); // Контейнер для введення
const tagsSection = document.querySelector('.tags-section'); // Контейнер для тегів

// Об'єкт для зберігання контейнерів повідомлень для кожного тегу
const tagContainers = {};

// Додати обробник події на кнопку надсилання
buttonSend.addEventListener('click', function() {
    const currentTagElement = document.querySelector('.tags.highlight p');
    if (!currentTagElement) return; // Якщо тег не вибраний, не надсилати повідомлення

    const messageText = inputText.value.trim(); // Отримуємо текст з поля вводу
    const currentTag = currentTagElement.getAttribute('data-full-tag'); // Отримуємо повну назву вибраного тегу

    if (messageText && currentTag) {
        addUserMessage(messageText, currentTag); // Додаємо повідомлення від користувача
        inputText.value = ''; // Очищаємо поле вводу

        // Імітуємо відповідь бота через 1 секунду
        setTimeout(function() {
            addSystemMessage('Це автоматична відповідь від бота.', currentTag);
        }, 1000);
    }
});

// Функція для створення поля введення і додавання нового тегу
function showTagInput() {
    // Створюємо поле для введення нового тегу
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.classList.add('tag-input'); // Додаємо клас для стилізації

    // Додаємо input в контейнер тегів
    tagsSection.appendChild(inputElement);

    // Ставимо фокус на поле вводу
    inputElement.focus();

    // Обробляємо подію "Enter" або втрату фокусу
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const tagName = inputElement.value.trim();
            if (tagName) {
                addNewTag(tagName); // Створюємо новий тег
            }
            inputElement.remove(); // Видаляємо поле вводу після створення тегу
        }
    });

    // Якщо поле вводу втрачає фокус, воно зникає
    inputElement.addEventListener('blur', function() {
        const tagName = inputElement.value.trim();
        if (tagName) {
            addNewTag(tagName); // Створюємо новий тег
        }
        inputElement.remove(); // Видаляємо поле вводу
    });
}

// Функція для додавання нового тегу
function addNewTag(tagText) {
    // Перевірка, чи тег вже існує за повною назвою
    if (tagContainers[tagText]) {
        return;
    }

    const limitedText = tagText.length > 10 ? tagText.slice(0, 10) + '...' : tagText;

    // Створення нового елемента тегу
    const newTag = document.createElement('div');
    newTag.classList.add('tags');
    newTag.innerHTML = `<p data-full-tag="${tagText}"># ${limitedText}</p>`; // Додаємо повну назву тегу як атрибут
    tagsSection.appendChild(newTag);

    // Створення контейнера для повідомлень цього тегу
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container hidden'; // Додати клас для стилізації та ховати за замовчуванням
    document.body.insertBefore(messageContainer, typeBox); // Додаємо контейнер вище поля вводу
    tagContainers[tagText] = messageContainer; // Зберігаємо контейнер у об'єкті за повною назвою тегу

    // Додати можливість вибору тегу
    newTag.addEventListener('click', function() {
        displayHistory(tagText);
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
document.querySelector('.plus-sign').addEventListener('click', showTagInput);
