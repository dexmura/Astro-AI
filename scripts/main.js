document.addEventListener('DOMContentLoaded', function() {
    //Обробка подій кліків для gpt
    const gptButton = document.querySelector('.avatar-button-gpt');
    
    gptButton.addEventListener('click', function() {
        alert("Ви натиснули на ChatGPT")
        ///
    });

    //Обробка подій кліків для gpt
    const geminiButton = document.querySelector('.avatar-button-gemini');
    
    geminiButton.addEventListener('click', function() {
        alert("Ви натиснули на Gemini")
        ///
    });

    //Відкриття user
    const userSelector = document.querySelector(".user-button");

    userSelector.addEventListener('click', function(){
        alert("Ви натиснули на кнопку Avatar");
        //Додавання самої логіки для обробки
    })


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
        // Додати тут логіку для відкриття меню налаштувань
    });
    
});