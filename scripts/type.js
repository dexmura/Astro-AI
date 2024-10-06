// 1. Отримуємо посилання на елементи
const inputText = document.querySelector('.input-text'); // Поле вводу
const buttonSend = document.querySelector('.button-send'); // Кнопка надсилання
const typeBox = document.querySelector('.type-box'); // Контейнер для введення
const messageContainer = document.createElement('div'); // Контейнер для повідомлень

// Налаштування контейнера для повідомлень
messageContainer.className = 'message-container'; // Додати клас для стилізації
document.body.insertBefore(messageContainer, typeBox); // Додаємо контейнер вище поля вводу

// 2. Додати обробник події на кнопку надсилання
buttonSend.addEventListener('click', function() {
    const messageText = inputText.value.trim(); // Отримуємо текст з поля вводу
    if (messageText) {
        addMessage(messageText); // Додаємо повідомлення
        inputText.value = ''; // Очищаємо поле вводу
    }
});

// 3. Функція для додавання повідомлення на екран
function addMessage(text) {
    const messageElement = document.createElement('div'); // Створюємо новий елемент
    messageElement.className = 'message'; // Додаємо клас для стилізації
    messageElement.textContent = text; // Встановлюємо текст повідомлення
    messageContainer.appendChild(messageElement); // Додаємо повідомлення в контейнер
    messageContainer.scrollTop = messageContainer.scrollHeight; // Прокручуємо вниз, щоб показати нове повідомлення
}

inputText.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buttonSend.click(); // Імітує натискання кнопки надсилання
    }
});

// Отримуємо поле пошуку
const searchInput = document.getElementById('search');

// Функція для підсвічування тексту
function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Регулярний вираз для пошуку
    return text.replace(regex, '<span class="highlight">$1</span>'); // Підсвічуємо знайдений текст
}

// Функція для прокручування до першого збігу
function scrollToFirstMatch() {
    const firstHighlighted = document.querySelector('.highlight');
    if (firstHighlighted) {
        firstHighlighted.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Додаємо подію 'input' до поля пошуку
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim();
    
    // Отримуємо всі повідомлення
    const messages = document.querySelectorAll('.message');
    
    let foundMatch = false;

    messages.forEach(message => {
        const originalText = message.textContent;
        
        // Якщо є пошуковий термін
        if (searchTerm) {
            // Змінюємо HTML, додаючи підсвічений текст
            message.innerHTML = highlightText(originalText, searchTerm);

            // Якщо ми ще не знайшли збіг, перевіряємо поточне повідомлення
            if (!foundMatch && message.querySelector('.highlight')) {
                foundMatch = true;
                // Прокручуємо до першого знайденого повідомлення
                message.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Якщо немає пошукового терміну, відновлюємо оригінальний текст
            message.innerHTML = originalText;
        }
    });

    // Якщо знайдено збіг, прокручуємо до першого
    if (searchTerm && foundMatch) {
        scrollToFirstMatch();
    }

    

});


// Отримуємо елементи
const inputTextarea = document.querySelector('.input-text'); // Поле вводу
const sendButton = document.querySelector('.button-send'); // Кнопка відправлення

// Додаємо обробник події для зміни стану кнопки
inputText.addEventListener('input', function() {
    // Перевіряємо, чи є текст у полі вводу
    if (inputTextarea.value.trim() !== '') {
        sendButton.classList.add('active'); // Додаємо клас, якщо текст не порожній
    } else {
        sendButton.classList.remove('active'); // Видаляємо клас, якщо текст порожній
    }
});

