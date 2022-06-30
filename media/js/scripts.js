var burger = document.querySelector('.burger-button');
var menu = document.querySelector('.burger-nav');

burger.addEventListener('click', function() {
    menu.classList.toggle('show-burger-nav');
});