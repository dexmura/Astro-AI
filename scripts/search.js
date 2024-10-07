// Отримуємо поле пошуку
const searchInput = document.getElementById('search');

// Функція для підсвічування тексту
function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Регулярний вираз для пошуку
    return text.replace(regex, '<span class="highlight-text">$1</span>'); // Підсвічуємо знайдений текст
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
