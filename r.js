// задача 1
document.write("Я JavaScript!");

// задача 2
let admin;
let name = "Иван";
admin = name;
alert(admin); // Должно показать «Иван»

// задача 3
let name1 = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

// задача 4
let userName = prompt("Как вас зовут?");
alert(`Ваше имя: ${userName}`);

// задача 5
let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // d = 1 (b теперь 2)

// задача 6
let aa = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

// задача 7
let aaa = prompt("Первое число?", 1);
let bb = prompt("Второе число?", 2);
alert(Number(a) + Number(b)); // Исправлено на Number для правильного сложения

// задача 8
console.log(7 > 5); // true
console.log("стол" > "стул"); // true
console.log("4" > "52"); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

// задача 9
if ("0") {
    alert('Привет'); // alert сработает
}

// задача 10
let officialName = prompt("Какое «официальное» название JavaScript?");
if (officialName === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// задача 11
let number = prompt("Введите число:");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// задача 12
let result = (a + b < 4) ? 'Мало' : 'Много';

// задача 13
let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' : '';

// задача 14
alert(null || 4 || undefined); // 4

// задача 15
alert(alert(1) || 2 || alert(3)); // Сначала сработает alert(1), затем alert(2)

// задача 16
alert(1 && null && 2); // null

// задача 17
alert(alert(1) && alert(2)); // Сначала сработает alert(1), затем undefined

// задача 18
alert(null || 2 && 3 || 4); // 3

// задача 19
let value = NaN;
value &&= 10; // value остается NaN
value ||= 20; // value теперь 20
value &&= 30; // value остается 20
value ||= 40; // value остается 20
alert(value); // 20

// задача 20
let age = prompt("Введите ваш возраст:");
if (age >= 14 && age <= 90) {
  alert("Возраст в диапазоне от 14 до 90 включительно");
}

// задача 21
let aage = prompt("Введите ваш возраст:");
if (!(aage >= 17 && age <= 99)) {
  alert("Возраст не в диапазоне от 17 до 99 включительно");
}

// Вариант без оператора НЕ
if (age < 17 || age > 99) {
    alert("Возраст не в диапазоне от 17 до 99 включительно");
}


// задача 22
if (-1 || 0) alert( 'first' ); // alert сработает 
if (-1 && 0) alert( 'second' ); // alert не сработает
if (null || -1 && 1) alert( 'third' ); // alert сработает

// задача 23
let login = prompt("ВВедите логин");
if (login === "Админ") {
    let password = promt("Введите пароль");

    if (password === "Я главный") {
    alert("Здравствуйте!");
    } else if (password === null || password === '') {
    alert("Отменено");
    } else {
    alert("Неверный пароль");
    }
    
}   else if (login === null || login === '') {

    alert("Отменено");
    } else {
    alert("Я вас не знаю");
    }
