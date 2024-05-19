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



// Калькулятор для прайса
function handleClick(event) {
    // Получаем текущий элемент, на котором произошел клик
    var targetElement = event.target;

    // Переключаем класс choice_el у элемента, на который был клик
    targetElement.classList.toggle('choice_el');

    // Получаем все элементы с классами col_2, col_3 и col_4, у которых установлен класс choice_el
    var col2Elements = document.querySelectorAll('.col_2.choice_el');
    var col3Elements = document.querySelectorAll('.col_3.choice_el');
    var col4Elements = document.querySelectorAll('.col_4.choice_el');

    // Вычисляем суммы значений в этих элементах
    var sumCol2 = 0;
    col2Elements.forEach(function(element) {
        sumCol2 += parseInt(element.textContent);
    });

    var sumCol3 = 0;
    col3Elements.forEach(function(element) {
        sumCol3 += parseInt(element.textContent);
    });

    var sumCol4 = 0;
    col4Elements.forEach(function(element) {
        sumCol4 += parseInt(element.textContent);
    });

    // Выводим суммы в элементы с id="res_col_2", "res_col_3" и "res_col_4"
    document.getElementById('res_col_2').textContent = sumCol2;
    document.getElementById('res_col_3').textContent = sumCol3;
    document.getElementById('res_col_4').textContent = sumCol4;
}

// Добавляем обработчик клика ко всем элементам с классами col_2, col_3, col_4
document.querySelectorAll('.col_2, .col_3, .col_4').forEach(function(element) {
    element.addEventListener('click', handleClick);
});




document.addEventListener('DOMContentLoaded', function() {
    function processWorkOrders(inputId, allId, countId, percentageId, percentageMultiplier) {
        // Проверяем существование элемента с id inputId
        const inputElement = document.getElementById(inputId);
        if (!inputElement) return;

        // Получаем значение из текстового поля
        const input = inputElement.value;

        // Извлекаем все числа из строки
        const numbers = input.match(/\d+/g) ? input.match(/\d+/g).map(Number) : [];

        // Считаем сумму всех чисел
        const sum = numbers.reduce((acc, num) => acc + num, 0);

        // Выводим сумму в элемент с id allId
        const allElement = document.getElementById(allId);
        if (allElement) {
            allElement.innerText = Math.round(sum);
        }

        // Выводим количество чисел в элемент с id countId
        const countElement = document.getElementById(countId);
        if (countElement) {
            countElement.innerText = numbers.length;
        }

        // Вычисляем и выводим процент от суммы в элемент с id percentageId
        const percentageElement = document.getElementById(percentageId);
        if (percentageElement) {
            const percentage = sum * percentageMultiplier;
            percentageElement.innerText = Math.round(percentage);
        }

        // Обновляем общий счётчик count_100, сумму all_100, all_case и цену price_100
        updateTotalCount();
        updateTotalSum();
        updateTotalPrice();
        updateAllCase();
        updateMidlValue();
        updatePercentValues();
    }

    function updateTotalCount() {
        // Получаем количество из элементов count_25, count_30, count_40
        const count25 = parseInt(document.getElementById('count_25').innerText) || 0;
        const count30 = parseInt(document.getElementById('count_30').innerText) || 0;
        const count40 = parseInt(document.getElementById('count_40').innerText) || 0;

        // Суммируем значения
        const totalCount = count25 + count30 + count40;

        // Выводим общую сумму в элемент с id count_100
        const totalCountElement = document.getElementById('count_100');
        if (totalCountElement) {
            totalCountElement.innerText = totalCount;
        }
    }

    function updateTotalSum() {
        // Получаем суммы из элементов all_25, all_30, all_40
        const all25 = parseInt(document.getElementById('all_25').innerText) || 0;
        const all30 = parseInt(document.getElementById('all_30').innerText) || 0;
        const all40 = parseInt(document.getElementById('all_40').innerText) || 0;

        // Суммируем значения
        const totalSum = all25 + all30 + all40;

        // Выводим общую сумму в элемент с id all_100
        const totalSumElement = document.getElementById('all_100');
        if (totalSumElement) {
            totalSumElement.innerText = Math.round(totalSum);
        }
    }

    function updateTotalPrice() {
        // Получаем суммы из элементов price_25, price_30, price_40
        const price25 = parseInt(document.getElementById('price_25').innerText) || 0;
        const price30 = parseInt(document.getElementById('price_30').innerText) || 0;
        const price40 = parseInt(document.getElementById('price_40').innerText) || 0;

        // Суммируем значения
        const totalPrice = price25 + price30 + price40;

        // Выводим общую сумму в элемент с id price_100
        const totalPriceElement = document.getElementById('price_100');
        if (totalPriceElement) {
            totalPriceElement.innerText = Math.round(totalPrice);
        }
    }

    function updateAllCase() {
        // Получаем суммы из элементов all_25, all_30, all_40
        const all25 = parseInt(document.getElementById('all_25').innerText) || 0;
        const all30 = parseInt(document.getElementById('all_30').innerText) || 0;
        const all40 = parseInt(document.getElementById('all_40').innerText) || 0;

        // Суммируем значения
        const totalSum = all25 + all30 + all40;

        // Выводим общую сумму в элемент с id all_case
        const allCaseElement = document.getElementById('all_case');
        if (allCaseElement) {
            allCaseElement.innerText = Math.round(totalSum);
        }
    }

    function updateMidlValue() {
        // Получаем сумму и количество
        const totalSum = parseInt(document.getElementById('all_100').innerText) || 0;
        const totalCount = parseInt(document.getElementById('count_100').innerText) || 0;

        // Вычисляем среднее значение
        const midlValue = totalCount > 0 ? totalSum / totalCount : 0;

        // Выводим среднее значение в элемент с id midl_value
        const midlValueElement = document.getElementById('midl_value');
        if (midlValueElement) {
            midlValueElement.innerText = Math.round(midlValue);
        }
    }

    function updatePercentValues() {
        // Получаем сумму из элемента all_100
        const totalSum = parseInt(document.getElementById('all_100').innerText) || 0;

        // Вычисляем и выводим 5% от суммы + 200 в элемент с id percent_5
        const percent5 = (totalSum * 0.05) + 200;
        const percent5Element = document.getElementById('percent_5');
        if (percent5Element) {
            percent5Element.innerText = Math.round(percent5);
        }

        // Вычисляем и выводим 7% от суммы + 200 в элемент с id percent_7
        const percent7 = (totalSum * 0.07) + 200;
        const percent7Element = document.getElementById('percent_7');
        if (percent7Element) {
            percent7Element.innerText = Math.round(percent7);
        }
    }

    // Добавляем обработчики событий для полей ввода
    const workConfigurations = [
        { inputId: 'day_work', allId: 'all_25', countId: 'count_25', percentageId: 'price_25', percentageMultiplier: 0.25 },
        { inputId: 'night_work', allId: 'all_30', countId: 'count_30', percentageId: 'price_30', percentageMultiplier: 0.30 },
        { inputId: 'hemi_work', allId: 'all_40', countId: 'count_40', percentageId: 'price_40', percentageMultiplier: 0.40 }
    ];

    workConfigurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        if (inputElement) {
            inputElement.addEventListener('input', function() {
                processWorkOrders(config.inputId, config.allId, config.countId, config.percentageId, config.percentageMultiplier);
            });
        }
    });
});



