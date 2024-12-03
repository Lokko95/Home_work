const spusocItems = document.querySelectorAll('.spusoc');

spusocItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation(); // Предотвращаем всплытие события
        }
    });
});

// Закрытие подменю при клике вне его
document.addEventListener('click', function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
});







// Получаем элементы модального окна и кнопок
const modal = document.getElementById('modal');
const playstoreButton = document.getElementById('playstore-button');
const appstoreButton = document.getElementById('appstore-button');
const confirmButton = document.getElementById('confirm-button');
const closeButton = document.getElementsByClassName('close')[0];

let currentPlatform = ''; // Хранит текущую нажимаемую платформу

// Обработчик событий для кнопок
playstoreButton.addEventListener('click', function() {
    currentPlatform = 'Playstore';
    modal.style.display = 'block'; // Открываем модальное окно
});

appstoreButton.addEventListener('click', function() {
    currentPlatform = 'App Store';
    modal.style.display = 'block'; // Открываем модальное окно
});

// Обработчик для подтверждения перехода
confirmButton.addEventListener('click', function() {
    window.open(currentPlatform === 'Playstore' ? 'https://play.google.com/store' : 'https://www.apple.com/app-store/', '_blank');
    modal.style.display = 'none'; // Закрываем модальное окно
});

// Закрываем модальное окно при нажатии на "X"
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрываем модальное окно при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
