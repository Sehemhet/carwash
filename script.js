function burgerMenu() {
    var page = document.querySelector('.page');
    var nav_menu = document.querySelector('.nav_menu');
    var burger = document.querySelector('.burger');

    // Переключаем классы при нажатии
    page.classList.toggle('hidden');
    nav_menu.classList.toggle('flex');
    burger.classList.toggle('burger_cross');

    // Если бургер перестал быть крестиком, возвращаем его в стандартное положение
    if (!burger.classList.contains('burger_cross')) {
        burger.style.transform = 'none';
    }
}

var img_logo_width;
var img_logo_height;

function openPopup() {
    var serviceList = document.querySelector('#p1');
    var mainNav = document.querySelector('#main_nav');
    var img_logo = document.querySelector('.img_logo');

    serviceList.classList.toggle('visible');
    mainNav.classList.toggle('f_auto');

    if (serviceList.classList.contains('visible')) {
        // Сохраняем исходные размеры картинки перед изменением
        img_logo_width = img_logo.style.width;
        img_logo_height = img_logo.style.height;

        // Изменяем размер картинки
        img_logo.style.width = '100px';
        img_logo.style.height = '100px';
    } else {
        // Восстанавливаем исходные размеры картинки
        img_logo.style.width = img_logo_width;
        img_logo.style.height = img_logo_height;
    }
}


//// Функция для вычисления площади ковра и общей цены
//function calculateCarpet() {
//    // Получаем значения ширины и длины ковра из полей ввода
//    var width = parseFloat(document.getElementById('carpet_width').value.replace(',', '.'));
//    var length = parseFloat(document.getElementById('carpet_long').value.replace(',', '.'));
//
//    // Проверяем, что введены числовые значения
//    if (!isNaN(width) && !isNaN(length)) {
//        // Вычисляем площадь ковра
//        var area = width * length;
//        // Устанавливаем значение площади в соответствующем элементе
//        document.getElementById('res_carpet_count').textContent = area.toFixed(2);
//        // Вычисляем общую цену ковра
//        var price = area * 100;
//        // Устанавливаем значение общей цены в соответствующем элементе
//        document.getElementById('res_carpet_price').textContent = price.toFixed(2);
//    } else {
//        // Если введены некорректные значения, выводим сообщение об ошибке
//    }
//}
//
//// Слушаем изменения в полях ввода и пересчитываем результаты при изменении
//document.getElementById('carpet_width').addEventListener('input', calculateCarpet);
//document.getElementById('carpet_long').addEventListener('input', calculateCarpet);


// Функция для вычисления площади ковра и общей цены
function calculateCarpet() {
    // Получаем значения ширины и длины ковра из полей ввода
    var widthElement = document.getElementById('carpet_width');
    var lengthElement = document.getElementById('carpet_long');

    // Проверяем, существуют ли элементы
    if (widthElement && lengthElement) {
        var width = parseFloat(widthElement.value.replace(',', '.'));
        var length = parseFloat(lengthElement.value.replace(',', '.'));

        // Проверяем, что введены числовые значения
        if (!isNaN(width) && !isNaN(length)) {
            // Вычисляем площадь ковра
            var area = width * length;
            // Устанавливаем значение площади в соответствующем элементе
            document.getElementById('res_carpet_count').textContent = area.toFixed(2);
            // Вычисляем общую цену ковра
            var price = area * 100;
            // Устанавливаем значение общей цены в соответствующем элементе
            document.getElementById('res_carpet_price').textContent = price.toFixed(2);
        } else {
            // Если введены некорректные значения, выводим сообщение об ошибке
        }
    }
}

// Проверяем наличие элементов перед добавлением слушателей
var widthInput = document.getElementById('carpet_width');
var lengthInput = document.getElementById('carpet_long');

if (widthInput) {
    widthInput.addEventListener('input', calculateCarpet);
}

if (lengthInput) {
    lengthInput.addEventListener('input', calculateCarpet);
}
