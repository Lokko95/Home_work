const spusocItems = document.querySelectorAll('.spusoc');

spusocItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            event.stopPropagation();
        }
    });
});

document.addEventListener('click', function() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
});


const modal = document.getElementById('modal');
const playstoreButton = document.getElementById('playstore-button');
const appstoreButton = document.getElementById('appstore-button');
const confirmButton = document.getElementById('confirm-button');
const closeButton = document.getElementsByClassName('close')[0];

let currentPlatform = ''; 


playstoreButton.addEventListener('click', function() {
    currentPlatform = 'Playstore';
    modal.style.display = 'block'; 
});

appstoreButton.addEventListener('click', function() {
    currentPlatform = 'App Store';
    modal.style.display = 'block'; 
});

confirmButton.addEventListener('click', function() {
    window.open(currentPlatform === 'Playstore' ? 'https://play.google.com/store' : 'https://www.apple.com/app-store/', '_blank');
    modal.style.display = 'none'; 
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const icons = document.querySelectorAll('.icon-item');


icons.forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.add('bounce');

        setTimeout(() => {
          this.classList.remove('bounce');
        }, 500);
    });
});