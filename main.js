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

// // console.log(summ(10, 15));

// const result = summ(summ(15, 15), summ(20, 20));

// console.log(result);

//===================================== Самовызывающаяся функция IIFE

// (function sayHi() {
//     console.log('Hi new user!');
// })();

// // sayHi()

// let res = (function summ(a, b) {
//     // console.log(a);
//     // console.log(b);
//     // console.log(a + b);
//     return a + b;
// })(10, 15);
// console.log(res);

//===================================== Стрелочные функции

// function sayHi(name) {
//      console.log(`Hi, ${name}! How are you?`);
//  }

// sayHi('Alex')

// const arrSayHi = (name) => {
//     console.log(`Hi, ${name}! How are you?`);
// }
 
// const arrSayHi = (name) => console.log(`Hi, ${name}! How are you?`);

// arrSayHi('Alex');

// function summ(a, b) {
//     const result = a + b;
// }

// const summ = (a, b) => {
//     const result = a + b;
//     return result;
// };

// const summ = (a, b) => a + b;

// const summ = (a, b) => a + b;
//     const result = summ (10, 30);
//     console.log(result);

// ================================= Массивы

// const autoBrand1 = 'Mazda';
// const autoBrand2 = 'BMW';
// const autoBrand3 = 'AUDI';
// const autoBrand4 = 'WV';
// const autoBrand5 = 'Toyota';

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];

// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);
// console.log(autoBrands.length);


// ================================= Методы массивов

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];
// console.log(autoBrands);

// autoBrands.push('Nissan');
// console.log(autoBrands);

// autoBrands.splice(2, 1);
// console.log(autoBrands);

// ================================= Цикл for.

// console.log('Start');

// for (let i = 0; i < 5; i ++) {
//     console.log(i);
// }

// console.log('Finish');

// ================================= Обход массива циклом for

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];

// console.log(autoBrands);
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);

// for (i = 0; i < autoBrands.length; i++) {
//     console.log(autoBrands[i]);
// }

// ================================ Цикл for ( of ). Обход массива циклом for ( of )

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];

// for (let brand of autoBrands) {
// console.log(brand);
// }

// ================================ Метод .forEach() для обхода массивов

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];

// for (let brand of autoBrands) {
// console.log(brand);
// }

// ================================ Метод .forEach() для обхода массивов

// const autoBrands = ['Mazda', 'BMW', 'AUDI', 'WV', 'Toyota'];

    // autoBrands.forEach(function (brand, index) {

    // console.log(item);

    // console.log(`${brand} => ${index}`);
    // })

    // autoBrands.forEach(printBrand);
    // function printBrand(brand, index) {
    //     console.log(`${brand} => ${index}`);
    // }

// autoBrands.forEach((brand, index) => {console.log(`${brand} => ${index}`);});

// ================================ Объекты
// ================================ Объекты. Свойства объектов

// let userName = 'Alex';
// let age = 40;
// let isMarried = true;

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
// }

// console.log(person);
// console.log(person.userName);
// console.log(person['age']);

// let propertyName = 'profession';

// person.profession = 'JS Developer';

// console.log(person);

// delete person.age;
// console.log(person);

// ================================ Методы в объектах

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
//     sayHi: function (name) {
//         console.log(`Hello, ${name}!`);
//     }
// };

// person.sayHi = function (name) {
//     console.log(`Hello, ${name}!`);
// };

// person.sayHi('Alex')

// ================================ Ключевое слово this

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
//     sayHi: function (name) {
//         console.log(this);
//         console.log(`Hello, ${name}! My name is ${this.userName}`);
//     }
// };

// person.sayHi('Bob')

// ================================ Обход свойств объекта через цикл for ( in )

// в отличии от for...of, for...in
// может использовться в неитерируемых объектах и вызывает ключ

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
//     sayHi: function (yourName) {
//         console.log(this);
//         console.log(`Hello, ${yourName}! My name is ${this.userName}`);
//     }
// };

// for (let key in person) {
//     console.log(key);
//     console.log(key, ':', person [key]);
// }

// ================================ Нюанс с const и изменением объекта или массива

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
    
// };

// person.profession = 'SEO';

// ================================ Классы. Конструкторы объектов

// const person = {
//     userName: 'Alex',
//     age: 30,
//     isMarried: true,
//     sayHi: function () {
//         console.log(this);
//         console.log(`Hello, ${yourName}! My name is ${this.userName}`);
//     }
// };

// const person2 = {
//     userName: 'Bob',
//     age: 28,
//     isMarried: false,
//     sayHi: function () {
//         console.log(this);
//         console.log(`Hello, ${yourName}! My name is ${this.userName}`);
//     }
// };

// класс - это как шаблон для всех будущих объектов,
// которые будут создаваться на его основе

// class Person {
//     constructor(userName, age, isMarried) {
//         this.userName = userName;
//         this.age = age;
//         this.isMarried = isMarried;
//     }
//     sayHi(name) {
//         console.log(`Hello, ${name}! My name is ${this.userName}`);
//     }
// }

// const person1 = new Person('Alex', 30, true);
// const person2 = new Person('Bob', 40, false);

// console.log(person1);
// console.log(person2);

// person1.sayHi('Fred');

// ================================ Работа с DOM

// ================================ Выбор DOM элементов

// Выбор одного элемента по DOM селектору

// document.querySelector('selector');

// document.querySelector('h2').classList.add('red')

// const heading2 = document.querySelector('h2');
// heading2.classList.add('red');

// document.querySelector('.heading-3').classList.add('green');

// Выбор коллекции элементов по DOM селектору

// const headings = document.querySelectorAll('h2');
// for (let heading of headings) {
//     console.log(heading);
//     heading.classList.add('red-text');
// }

// const paragraphs = document.querySelectorAll('p');
// // for (let p of paragraphs) {
// //     p.classList.add('green-text');
// // }

// paragraphs.forEach(function (item) {
//     item.classList.add('green-text');
// })

// ================================ Работа с CSS классами

// heading.classList.add();
// heading.classList.remove();
// heading.classList.toggle();
// heading.classList.contains();

// const heading = document.querySelector('h2');
// console.log(heading);
// heading.classList.add('red-text');
// heading.classList.remove('red-text');
// heading.classList.toggle('green-text');
// heading.classList.toggle('green');

// heading.classList.contains('green');

// ================================ Работа с Атрибутами

// const img = document.querySelector('#logo');
// const srcValue = img.getAttribute('src');
// console.log(srcValue);

// img.setAttribute('src', './img/php.png');
// img.setAttribute('width', '100');
// img.src = './img/js.png';

// const button = document.querySelector('#button');
// button.setAttribute('value', 'Send');
// button.value = 'Fire!';

// ================================ Работа с прослушкой событий

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = 'KILL img JS';
// button.addEventListener('click', function () {
//     console.log('Click');
//     img.remove();
// })
// button.onclick = function () {
//         console.log('Click');
//         img.remove();

// }
// button.addEventListener('click', function () {
//     console.log('Click1');
//     // img.remove();
// })

// button.addEventListener('click', function () {
//     console.log('Click2');
//     // img.remove();
// })

// button.addEventListener('click', function () {
//     console.log('Click3');
//     // img.remove();
// })

// ================================ Прослушка событий 2. Форма

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', inputHandler)
//     () {
//     console.log('Input!');
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// });

// function inputHandler() {
//     console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// }

// ================================ Объект event

// const list = document.querySelector('#list');
// list.addEventListener('click', function (event) {
//     console.log(this);
//     console.log(event);
//     console.log(event.target);
// });

// ================================ Работа c HTML элементами. Создание. Копирование.

// Выбор контейнера
const container = document.querySelector('#elementsContainer');

// Создание заголовака
const newHeader = document.createElement('h1');

newHeader.innerText = 'New header';
container.append(newHeader);

// Копирование шапки
// const mainHeader = document.querySelector('header');
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);

// Вставка разметки через строки
const htmlExample = '<h2> Создание и копирование элементов </h2>';
container.insertAdjacentHTML('beforeend', htmlExample);
