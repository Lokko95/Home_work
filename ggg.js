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








