// Сделаем текст белым
document.body.style.color = "white";
/*
// Данные пользователя
const iLikeMeat = true;
const myAge = 30;

// Проверяем условия
if (iLikeMeat && myAge >= 18 && myAge <= 30) {
  document.body.style.backgroundColor = "#3d7922ff";
  document.body.innerHTML += `You are ${myAge} years old and you like meat.<br>
So you can work with us in our restaurant!<br>`;
} else if (!iLikeMeat && myAge >= 18 && myAge <= 30) {
  document.body.style.backgroundColor = "#792222ff";
  document.body.innerHTML += `Your age is acceptable, but you don't like meat.<br>
So it is going to be hard for you to work with us because we are a meat restaurant.<br>`;
} else if ((iLikeMeat && myAge <= 18) || myAge >= 30) {
  document.body.style.backgroundColor = "#792222ff";
  document.body.innerHTML += `You like meat but your age is not acceptable <br>
  Unfortunately because of the age you cannot work with us<br>`;
} else {
  document.body.style.backgroundColor = "#792222ff";
  document.body.innerHTML += `Your age is not acceptable for us and you dont like meat.<br>
  I am sorry but why the fick are you even here?<br>`;
}

var amountOfDrinks = 0;
var minimumAmountOfDrinks = 4;
while (amountOfDrinks != minimumAmountOfDrinks) {
  amountOfDrinks++;
  document.body.innerHTML += `I have drunk ${amountOfDrinks} glasses of alcohol<br>`;
}
document.body.innerHTML += `I have drunk enough of alcohol. I can go home<br>`;

function getAverage(a, b) {
  var average = (a + b) / 2; //local variable
  return average;
}
var a = 5;
var b = 10;
var average = getAverage(a, b); //global variable
document.body.innerHTML += `The average of ${a} and ${b} is ${average}<br>`;

console.log(Math.round(7.5));
console.log(Math.floor(7.8));
console.log(Math.ceil(7.2));
console.log(Math.max(7, 10, 3, 4, 6));
console.log(Math.min(7, 10, 3, 4, 6));
console.log(Math.PI);

var a = 55;
var b = 5;
if (isNaN(a)) {
  document.body.innerHTML += `this variable is not a number<br>`;
} else {
  document.body.innerHTML += `this variable is ` + (a + b) + `<br>`;
}

var myString = 'I\'m a "fun" string';
var mySecondString = 'I\'m a "fun" string';
var stringLength = myString.length;
var findTheWord = "fun";
document.body.innerHTML += `${myString} and my length is ${stringLength}<br>`;
document.body.innerHTML += `${myString.toLowerCase()}<br>`;
document.body.innerHTML += `${myString.toUpperCase()}<br>`;
if (myString.indexOf(findTheWord) === -1) {
  document.body.innerHTML += `You are trying to find the word: "${findTheWord}", but it is not in the string<br>`;
} else {
  document.body.innerHTML += `The word: ${findTheWord} starts at position ${myString.indexOf(
    findTheWord
  )}<br>`;
}

if (myString === mySecondString) {
  document.body.innerHTML += `String: "${myString}" and string: "${mySecondString}" are equal!<br>`;
} else {
  document.body.innerHTML += `String: "${myString}" and string: "${mySecondString}" are not equal!<br>`;
}
*/

/*var newCar = new Object();
newCar.maxSpeed = 200;
newCar.model = "Porche 911";
newCar.yeardOfManufacture = "2025-2026";
newCar.color = ["red", "blue", "white", "gray"];
newCar.printOut = function () {
  document.body.innerHTML += `We are presenting a new ${this.model} which will be manifactured 
  in ${this.yeardOfManufacture}. You will be able to buy this car in 4 different 
  colors: ${this.color} and the max speed of this model will be ${this.maxSpeed} km/h`;
};
newCar.printOut();
*/
/*var newCar = {
  model: "Porche 911",
  yearOfManufacture: "2025-2026",
  color: ["red", "blue", "white", "gray"],
  maxSpeed: 200,
  printOut: function () {
    document.body.innerHTML += `We are presenting a new ${this.model} which will be manufactured 
  in ${this.yearOfManufacture}. You will be able to buy this car in 4 different 
  colors: ${this.color} and the max speed of this model will be ${this.maxSpeed} km/h`;
  },
};
newCar.printOut();
*/
/*
var Car = function (maxSpeed, model, yearOfManufacture, color) {
  this.maxSpeed = maxSpeed;
  this.model = model;
  this.yearOfManufacture = yearOfManufacture;
  this.color = color;
  this.printout = function () {
    document.body.innerHTML += `We are presenting a new ${this.model} which will be manifactured 
  in ${this.yearOfManufacture}. <br> You will be able to buy this car in 4 different 
  colors: ${this.color} and the max speed of this model will be ${this.maxSpeed} km/h<br>`;
  };
};

var porche = new Car(350, "Porche 911", "2025-2026", [
  "red",
  "blue",
  "white",
  "gray",
]);
porche.printout();

var audi = new Car(300, "Audi A7", "2023-2026", ["red", "white", "gray"]);
audi.printout();
*/

/*
var myDate = new Date();
console.log(myDate);

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
console.log(myPastDate);
var myFutureDate = new Date(2545, 9, 11, 11, 34, 34);
console.log(myFutureDate);
console.log(myFutureDate.getMonth());
console.log(myFutureDate.getFullYear());
console.log(myFutureDate.getDate());
console.log(myFutureDate.getDay());
console.log(myFutureDate.getTime());
*/

/*
var myInput = document.getElementsByClassName("input");
var myEnteringField = myInput[0].getElementsByClassName("input__form-field");
myEnteringField[0].innerHTML += "Hello World!";



/*
var container = document.getElementsByClassName("main-panel__symbol-keys");
console.log(container);
var keys = container[0].getElementsByClassName("key__inner");
console.log(keys);
for (i = 0; i < keys.length; i++) {
  if (
    keys[i].classList.contains("key__inner--enter") ||
    keys[i].querySelector(".key__inner__space")
  ) {
    continue;
  }
  console.log(keys[i].innerHTML);
  keys[i].textContent = "T";
}
*/
/*
var inputField = document.getElementById("entering");
inputField.setAttribute("class", `${inputField.className} pie`);
inputField.textContent += `${inputField.className} \n`;
var keyGroup = document
  .getElementsByClassName("main-panel")[0]
  .getElementsByClassName("row")[0]
  .getElementsByClassName("row__btn-groups")[3];

var buttons = keyGroup.getElementsByClassName("key");
keyGroup.removeChild(buttons[buttons.length - 1]);
keyGroup.removeChild(buttons[0]);

var newF12Key = document.createElement("button");
newF12Key.setAttribute("class", "key");

var newF9Key = document.createElement("button");
newF9Key.setAttribute("class", "key");

var f12KeySpan = document.createElement("span");
f12KeySpan.setAttribute("class", "key__inner");
f12KeySpan.innerHTML = "F12";

var f9KeySpan = document.createElement("span");
f9KeySpan.setAttribute("class", "key__inner");
f9KeySpan.innerHTML = "F9";

newF12Key.appendChild(f12KeySpan);
keyGroup.appendChild(newF12Key);
newF9Key.appendChild(f9KeySpan);
keyGroup.insertBefore(newF9Key, keyGroup.getElementsByClassName("key")[0]);
buttons = keyGroup.getElementsByClassName("key");

for (i = 0; i < buttons.length; i++) {
  inputField.textContent += `${buttons[i].outerHTML} \n`;
}
*/
function setUpEvents() {
  var keyboard = document.getElementById("keyboard");
  function showKeyboard() {
    keyboard.classList.add("keyboard--show-effect");
  }
  setTimeout(showKeyboard, 1000);

  var inputSection = document.getElementsByClassName("input");
  function showInputField() {
    inputSection[0].classList.add("input--show-effect");
  }
  setTimeout(showInputField, 2000);

  var inputField = document.getElementById("entering");
  var symbolKeys = document
    .getElementById("symbol-keys")
    .getElementsByClassName("key__inner");

  var forbiddenWords = ["sex"];

  function checkForbiddenWords(text) {
    for (i = 0; i < forbiddenWords.length; i++) {
      if (
        text.includes(forbiddenWords[i]) ||
        text.includes(forbiddenWords[i].toUpperCase())
      ) {
        return forbiddenWords[i];
      }
    }
    return null;
  }
  for (var i = 0; i < symbolKeys.length; i++) {
    symbolKeys[i].onmousedown = function () {
      parent = this.parentElement;
      this.classList.add("pressed");
      if (this.querySelector(".key__inner__space")) {
        inputField.textContent += ` `;
      } else if (parent.classList.contains("key--backspace")) {
        inputField.textContent = inputField.textContent.slice(0, -1);
      } else if (
        this.children.length > 0 ||
        this.classList.contains("key__inner--enter") ||
        this.classList.contains("key__inner--smaller-front")
      ) {
      } else {
        inputField.textContent += `${this.textContent.toLowerCase()}`;
      }
    };

    symbolKeys[i].onmouseup = function () {
      this.classList.remove("pressed");
      var found = checkForbiddenWords(inputField.textContent);

      if (found) {
        document.body.style.backgroundColor = "red";
        alert(`Иди нахуй, сука!`);
        inputField.textContent = inputField.textContent.slice(0, -found.length);
      }
    };
    symbolKeys[i].onmouseleave = function () {
      this.classList.remove("pressed");
      var found = checkForbiddenWords(inputField.textContent);
      if (found) {
        alert(`Иди нахуй, сука! ${found}`);
        inputField.textContent = inputField.textContent.slice(0, -found.length);
      }
    };
  }
}
window.onload = function () {
  setUpEvents();
};
/*
Привет! Я хотел обсудить созвон, но пока не успел выполнить всё, что ты поручил изучить.
На данный момент могу показать только практические задания и наработки, которые делал во время просмотра видеоуроков.
Я полностью просмотрел весь плейлист по основам JavaScript от The Net Ninja. 
После каждого урока я старался закреплять теоретические знания практикой, выполняя собственные примеры кода.
В процессе обучения я изучил синтаксис JavaScript и базовые принципы работы языка;
разобрался с типами данных, их преобразованием и использованием;
0своил условные конструкции (if, else if) и циклы (for, while);
научился создавать и вызывать функции, а также различать локальные и глобальные переменные;
работал с массивами и объектами, включая их методы и создание через функции-конструкторы;
практиковался с методами строк (String) и объектом Math;
изучил основы работы с датами с помощью объекта Date;
освоил манипуляции с DOM — получение, изменение и удаление HTML-элементов через JavaScript;
изучил обработку событий (events) и реализовал интерактивные элементы с помощью слушателей событий (onmousedown, onmouseup, onmouseleave);


Следующим шагом планирую пройти курсы от The Net Ninja по modern js > async js > the DOM tutorial > object orienteed js и после этого typescript

*/
