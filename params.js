// Сумма двух чисел
function sum (a, b) {
    return a + b;
}
console.log(sum(1, 2)); // Выводит 3
console.log(sum(1)); // Выводит NaN

function add (c, d) {
}
console.log(add(1, 2)); // Выводит undefined

// Площадь прямоугольника
const rectangle_area = (e, f) => e * f;
console.log(rectangle_area(3, 3)); // Выводит 9
console.log(rectangle_area()); // Выводит NaN

// Приветствие с временем суток, где время по умолчанию 'день'
const greet = function (part_of_day = "день") {
    return "Привет, сейчас " + part_of_day;
}
console.log(greet("ночь")); // Выводит "Привет, сейчас ночь"
console.log(greet()); // Выводит "Привет, сейчас день"