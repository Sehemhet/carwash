function burgerMenu() {
    var header = document.querySelector('header');
    var burger = document.querySelector('.burger');
    var body = document.body;

    if (header) {
        header.classList.toggle('burger_menu');
        var isMenuOpen = header.classList.contains('burger_menu');

        setTimeout(function() {
            // Этот код выполнится через одну секунду
            if (isMenuOpen) {
                burger.classList.add('burger_cross');
            } else {
                burger.classList.remove('burger_cross');
            }
        }, 500);
    }
}
