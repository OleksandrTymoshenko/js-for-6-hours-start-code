//link https://youtu.be/maPRR_jjyOE

/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// ==============================  1 console.log

// console.log('Hello world js')

// ==============================  2 переменные

// let userName = "Alex";
// console.log(userName);

// ==============================  2.1 типы переменных

// let userName = "Alex";
// console.log(userName);
// userName = "Soda";
// console.log(userName);

// const yearOfBirth = 1981;
// console.log(yearOfBirth);

// function sum() {
//     let userName = "Gogo"
//     console.log(userName);
// }

// sum();

// console.log(userName);

// ==============================  2.2 типы данных

// let userName = "Alex";
// let age = 40;
// let isMarried = true;

// console.log(userName);
// console.log(age);
// console.log(isMarried);

// // ============================== динамическая типизация

// let someVariable = "Some Variable"; // string
// someVariable = 50; // number
// someVariable = true; // boolean
// console.log(someVariable);

// let number = null; // сброс значения переменной
// console.log(number);

// let userName = "Bob";
// userName = null;
// console.log(userName);
// ============================== undefined

// let userName;
// console.log(userName);

// let userName = "Bob";
// userName = null;
// console.log(userName);

// ============================== typeOf

// const someName = "Bob";
// console.log(typeof someName);

// ============================== bigint - большие числа

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(651561116515135151816151321216516516515n);

// ============================== Операторы сравнения и условия

// >, <, >=, <= - больше, меньше, больше либо равно, меньшн либо равно.

// == - нестрогое равенство.
// === - строгое равенство.
// != - нестрогое неравенство.
// !== - строгое неравенство.

// console.log(10 > 5); // true
// console.log(10 < 5); //false

// let result = 10 < 5;
// console.log(result);

// console.log("5" == 5); // true
// console.log("5" === 5); //false
// let number = 5;
// console.log(number = 10);
// console.log(number == 10);
// console.log(number === 10);

// if (condition) {
//     //will to do if condition is true
// } else {
//     //will to do if condition is false
// }

// ============================== доступно о том, как работает else и else if

// const time = 12;

// if (time < 12) {
//     console.log("Good morning!")
// } else {
//     time > 12
//     console.log("It`s day outside!")
// }

// const time = 20;

// if (time < 12) {
//     console.log("Good morning!")
// } else if (time >= 12 && time < 18) {
//     console.log("It`s day outside!");
// } else {
//     console.log ("Good evening")

// }

// && - логическое "И".
// || - логическое "ИЛИ".
// !true - логическое "НЕ".

// ============================== Тернарный оператор


// if (10 < 12) {
//     console.log("Condition is true");
// } else {
//     console.log("Condition is NOT true")
// }
// тернарный оператор вместо if else
// (condition) ? (condition is true) : (condition is NOT true);

// 10 < 12 ? console.log("Condition is true") : console.log("Condition is NOT true");

//==============================

// let greeting;
// let time = 20;

// if (time < 12) {
//     greeting = "Good morning!";
// } else {
//     greeting = "It`s day outside!";
// }

// console.log(greeting);

//===============================

// let time = 10;
// let greeting = time < 12 ? "Good morning!" : "It`s day outside!";
// console.log(greeting);

// ============================== Конкатенация строк и шаблонные строки

//строка + строк
// console.log("Hi Alex! How are you?");
// let greeting = "Hi Alex!";
// let howAreYou = " How are you?";
// let sayHi = greeting + howAreYou;
// console.log(sayHi);

// const userName = "Alex";
// console.log("Hi, " + userName + "! How are you?");

//шаблонная строка - проще и удобнее

// const userName = "Alex";
// console.log(`Hi, ${userName}! How are you?`);

// ============================== Функции


// DRY - don't repeat yourself

// console.log('Hi dear user! How are you?');

// function sayHi() {
//     console.log('Hi new user! How are you?');
// }

// sayHi();

// function declaration - декларация функции -
// визуально короче создания переменной;
// можно описать работу программы, а потом ниже описать те функции которые нам нужны;
// sayHi();
//function sayHi() {
//     console.log('Hi new user!');
// }

//====================
// console.log(name);
// let name = 'Bob';


// function expression - функциональное выражение -
// если функция вызывается - значит она объявлена где-то выше в коде - описали и только после того вызвали;
// вызов функции возможен исключительно, только ниже по коду самой функции. иначе - не работает;


// const sayHi = function () {
//     console.log('Hi new user!'); // если функция вызывается - значит она объявлена где-то выше в коде - описали и только после того вызвали;
// }
// sayHi();

//===================================== Параметры и аргументы для функции

// const userName = 'Alex';
// console.log(`Hi, ${userName}! How are you?`);

// function sayHi(name) {
//     // const userName = 'Alex';
//     console.log(`Hi, ${name}! How are you?`);
// }
// sayHi('Alex');
// sayHi('Bob');
// sayHi('Garry');
// sayHi('James');

//===================================== return

// function summ(a, b) {
//     const result = a + b;
//     return result;
//     // return - как только функция вернула какое-то значение, она завершает свою работу и дальше ничего не происходит.
//     // в теле функции все что ниже return - недостежимый код, который никогда не будет выполнен, так как после return функция завершает свою работу. 
    
//     // console.log(result);
// }
// let res = summ(10, 15); // return - это значение возвращается на место вызова функции
// console.log(res);

//===================================== Функция как аргумент

// function summ(a, b) {
//     return a + b;
// }

function sayHi(name) {
    // const userName = 'Alex';
    console.log(`Hi, ${name}! How are you?`);
}