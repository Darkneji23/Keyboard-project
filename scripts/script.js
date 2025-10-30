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
document.addEventListener("DOMContentLoaded", () => {
  const keyboard = document.getElementById("keyboard");
  const inputSection = document.querySelector(".input");

  setTimeout(() => keyboard.classList.add("keyboard--show-effect"), 1000);
  setTimeout(() => inputSection.classList.add("input--show-effect"), 2000);

  const inputField = document.querySelector("#entering");
  const symbolKeys = document.querySelectorAll(".key__inner");
  const forbiddenWords = ["sex"];
  const addForm = document.forms["input__form"];

  const ledIndecators = document.querySelectorAll(
    ".nav-blocks__indecator .nav-blocks__indecator-led"
  );
  const capsIndecator = ledIndecators[0];
  const numIndecator = ledIndecators[1];
  const scrollIndecator = ledIndecators[2];
  const winIndecator = ledIndecators[3];

  const winKeys = document.querySelectorAll(".key.key--win .key__inner");
  const shiftLeftKey = document.querySelector("#shift--left .key__inner");
  const shiftRightKey = document.querySelector("#shift--right .key__inner");
  const spaceKey = document.querySelector(".key.key--space .key__inner");
  const tabKey = document.querySelector(".key.key--tab .key__inner");
  const enterKey = document.querySelector(".key.key--enter .key__inner");
  const capsLockKey = document.querySelector(".key.key--caps .key__inner");
  const ctrlKeys = document.querySelector(".key.key--ctrl .key__inner");
  const fnKeys = document.querySelectorAll(".row__btn-groups .key__inner");
  const backspaceKey = document.querySelector(
    ".key.key--backspace .key__inner"
  );
  const numLockKey = document.querySelector("#num-lock .key__inner");
  const scrollLockKey = document.querySelector("#scroll-lock .key__inner");

  const leftArrow = document.querySelector("#arrow-left .key__inner");
  const rightArrow = document.querySelector("#arrow-right .key__inner");
  const upArrow = document.querySelector("#arrow-up .key__inner");
  const downArrow = document.querySelector("#arrow-down .key__inner");

  let isCapsOn = false;
  let isNumLockOn = false;
  let isWinOn = false;
  let isScrollOn = false;

  const updateInputField = (action, value = "", replaceValue = "") => {
    switch (action) {
      case "add":
        inputField.value += value;
        break;
      case "delete":
        inputField.value = inputField.value.slice(0, -1);
        break;
      case "replace":
        inputField.value = inputField.value.replace(
          new RegExp(value, "gi"),
          replaceValue
        );
        break;
      default:
        console.warn("Неподдерживаемое действие:", action);
    }
  };

  const checkForbiddenWords = (text) => {
    return forbiddenWords.find(
      (word) => text.includes(word) || text.includes(word.toUpperCase())
    );
  };

  const handleForbiddenWord = (word) => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      alert("Иди нахуй, сука!");
      updateInputField("replace", word);
      document.body.style.backgroundColor = "";
    }, 50);
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = inputField.value.trim();
    const encodedText = encodeURIComponent(value);
    history.pushState({}, "", `?message=${encodedText}`);
    inputField.value = "";
  });

  const releaseKey = function () {
    this.classList.remove("pressed");
    const forbidden = checkForbiddenWords(inputField.value);
    if (forbidden) handleForbiddenWord(forbidden);
  };

  // Обработка нажатия мышью на виртуальную клавиатуру
  symbolKeys.forEach((key) => {
    key.addEventListener("mousedown", (e) => {
      key.classList.add("pressed");
      const parent = key.parentElement;

      if (
        parent.classList.contains("key--shift") ||
        parent.classList.contains("key--ctrl") ||
        parent.classList.contains("key--alt") ||
        parent.parentElement.classList.contains("row__btn-groups")
      ) {
      } else if (parent.classList.contains("key--caps")) {
        isCapsOn = !isCapsOn;
        capsIndecator.classList.toggle("on", isCapsOn);
      } else if (parent.classList.contains("key--num-lock")) {
        isNumLockOn = !isNumLockOn;
        numIndecator.classList.toggle("on", isNumLockOn);
      } else if (parent.classList.contains("key--win")) {
        isWinOn = !isWinOn;
        winIndecator.classList.toggle("on", isWinOn);
      } else if (parent.classList.contains("key--scroll-lock")) {
        isScrollOn = !isScrollOn;
        scrollIndecator.classList.toggle("on", isScrollOn);
      } else if (parent.classList.contains("key--backspace")) {
        updateInputField("delete");
      } else if (parent.classList.contains("key--tab")) {
        updateInputField("add", "   ");
      } else if (key.classList.contains("key__inner--enter")) {
        updateInputField("add", "\n");
      } else if (key.querySelector(".key__inner__space")) {
        updateInputField("add", " ");
      } else {
        // Основные буквы и символы
        let char = key.textContent;
        if ((isCapsOn && !e.shiftKey) || (!isCapsOn && e.shiftKey))
          char = char.toUpperCase();
        else char = char.toLowerCase();
        updateInputField("add", char);
      }
    });

    key.addEventListener("mouseup", releaseKey);
    key.addEventListener("mouseleave", releaseKey);
  });

  // Обработка реальной клавиатуры
  document.addEventListener("keydown", (e) => {
    const fnKey =
      (fnKeys &&
        Array.from(fnKeys).find(
          (k) => k.textContent.toUpperCase() === e.key.toUpperCase()
        )) ||
      null;
    if (fnKey) {
      fnKey.classList.add("pressed");
      return;
    }
    const normalKey = e.key.length === 1;
    if (document.activeElement === inputField && normalKey) {
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const pos = inputField.selectionStart;
      if (pos > 0) {
        const newPos = Math.max(0, pos - 1);
        inputField.setSelectionRange(newPos, newPos);
      }
      if (leftArrow) leftArrow.classList.add("pressed");
      return;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const pos = inputField.selectionStart;
      if (pos < inputField.value.length) {
        const newPos = Math.min(inputField.value.length, pos + 1);
        inputField.setSelectionRange(newPos, newPos);
      }
      if (rightArrow) rightArrow.classList.add("pressed");
      return;
    } else if (e.key === "ArrowUp") {
      if (upArrow) upArrow.classList.add("pressed");
      return;
    } else if (e.key === "ArrowDown") {
      if (downArrow) downArrow.classList.add("pressed");
      return;
    } else if (e.code === "ShiftLeft") {
      if (shiftLeftKey) shiftLeftKey.classList.add("pressed");
      return;
    } else if (e.code === "ShiftRight") {
      if (shiftRightKey) shiftRightKey.classList.add("pressed");
      return;
    } else if (e.code === "MetaLeft") {
      if (winKeys) winKeys[0].classList.add("pressed");
      return;
    } else if (e.code === "MetaRight") {
      if (winKeys) winKeys[1].classList.add("pressed");
      return;
    } else if (e.key === "ScrollLock") {
      if (scrollLockKey) scrollLockKey.classList.add("pressed");
      isScrollOn = !isScrollOn;
      scrollIndecator.classList.toggle("on", isScrollOn);
      return;
    } else if (e.key === "CapsLock") {
      if (capsLockKey) capsLockKey.classList.add("pressed");
      isCapsOn = !isCapsOn;
      capsIndecator.classList.toggle("on", isCapsOn);
      return;
    } else if (e.key === "NumLock") {
      if (numLockKey) numLockKey.classList.add("pressed");
      isNumLockOn = !isNumLockOn;
      numIndecator.classList.toggle("on", isNumLockOn);
      return;
    } else if (e.key === "Backspace") {
      updateInputField("delete");
      if (backspaceKey) backspaceKey.classList.add("pressed");
      return;
    } else if (e.key === "Enter") {
      updateInputField("add", "\n");
      if (enterKey) enterKey.classList.add("pressed");
      return;
    } else if (e.key === "Tab") {
      updateInputField("add", "   ");
      if (tabKey) tabKey.classList.add("pressed");
      return;
    } else if (e.key === " ") {
      updateInputField("add", " ");
      if (spaceKey) spaceKey.classList.add("pressed");
      return;
    }

    const keyElement = Array.from(symbolKeys).find(
      (k) => k.textContent.toLowerCase() === e.key.toLowerCase()
    );
    if (keyElement) {
      keyElement.classList.add("pressed");
      let char = keyElement.textContent;
      if ((isCapsOn && !e.shiftKey) || (!isCapsOn && e.shiftKey))
        char = char.toUpperCase();
      else char = char.toLowerCase();
      updateInputField("add", char);
    }
  });

  document.addEventListener("keyup", (e) => {
    let keyElement;

    if (e.key === "Backspace") keyElement = backspaceKey;
    else if (e.key === "CapsLock") keyElement = capsLockKey;
    else if (e.key === "ScrollLock") keyElement = scrollLockKey;
    else if (e.key === "Enter") keyElement = enterKey;
    else if (e.key === "Tab") keyElement = tabKey;
    else if (e.key === " ") keyElement = spaceKey;
    else if (e.code === "ShiftLeft") keyElement = shiftLeftKey;
    else if (e.code === "ShiftRight") keyElement = shiftRightKey;
    else if (e.code === "MetaLeft") keyElement = winKeys[0];
    else if (e.code === "MetaRight") keyElement = winKeys[1];
    else if (e.code === "ArrowUp") keyElement = upArrow;
    else if (e.code === "ArrowDown") keyElement = downArrow;
    else if (e.code === "ArrowLeft") keyElement = leftArrow;
    else if (e.code === "ArrowRight") keyElement = rightArrow;
    // Буквы и символы
    else if (e.key !== "Shift") {
      keyElement = Array.from(symbolKeys).find(
        (k) => k.textContent.toLowerCase() === e.key.toLowerCase()
      );
    }

    if (keyElement) keyElement.classList.remove("pressed");
  });

  /*
let inputFieldLength;
let cursorVisible = true;
const toggleCursor = () => {
  if (cursorVisible) {
    updateInputField("delete");
  } else {
    updateInputField("add", "_");
  }
  cursorVisible = !cursorVisible;
};
setInterval(toggleCursor, 500);
setInterval(() => {
  console.log("Длина строки:", inputField.textContent.length);
  inputFieldLength = inputField.textContent.length;
}, 100);
*/

  /*
  let radius = 10;
  const pi = 3.14;
  inputField.textContent += `${radius} ${pi}\n`;
  inputField.textContent += `${radius / pi}\n`;
  inputField.textContent += `${radius % 3}\n`;
  inputField.textContent += `${pi * radius ** 2}\n`;
*/
  /*
  let myString = `Белая ночь опустилась как облако
Ветер гадает на юной листве
Слышу знакомую речь, вижу облик твой
Ну почему это только во сне?\n`;
  for (let i = 0; i < myString.length; i++) {
    setTimeout(() => {
      inputField.textContent += myString[i];
    }, 4100 + i * 50);
  }
    */
  /*
  let i = 0;
  let ninjas = ["Dmytro", "Shaun", "Rick", "Daryl"];
  ninjas.join(",");
  //inputField.textContent += `${ninjas}\n`;
  //inputField.textContent += `${ninjas.indexOf("Rick")}\n`;
  ninjas.push("Ella");

  while (i < ninjas.length) {
    inputField.textContent += `${ninjas[i]}\n`;
    i++;
  }

  /*
  do {
    inputField.textContent += `The value of i is ${i}\n`;
    i++;
  } while (i <= 5);
*/
  /*
  const grade = "D";
  switch (grade) {
    case "A":
      updateInputField("add", `you got an A grade!\n`);
      break;
    case "B":
      updateInputField("add", `you got a B grade!\n`);
      break;
    case "C":
      updateInputField("add", `you got a C grade!\n`);
      break;
    case "D":
      updateInputField("add", `you got a D grade!\n`);
      break;
    case "E":
      updateInputField("add", `you got an E grade!\n`);
      break;
    default:
      updateInputField("add", `not a valid grade\n`);
  }
      */
  /*
  let user = {
    name: "Dmytro",
    age: "32",
    email: "dg318842@gmail.com",
    blogs: [
      { title: "Why mac & cheese rules", likes: 1500 },
      { title: "10 things to make with marmite", likes: 6000 },
    ],
    logBlogs() {
      updateInputField("add", `This user has written the following blogs: \n`);
      this.blogs.forEach((blog) => {
        updateInputField("add", `${blog.title}, ${blog.likes} likes\n`);
      });
    },
  };
  updateInputField("add", `${user}\n`);
  updateInputField("add", `${user["name"]}\n`);
  user.name = "Sasha";
  updateInputField("add", `${user["name"]}\n`);
  updateInputField("add", `${user.age}\n`);
  user["age"] = 25;
  updateInputField("add", `${user.age}\n`);
  updateInputField("add", `${typeof user}\n`);
  user.logBlogs();
  */
  /*updateInputField("add", Math.PI + "\n");
  let area = 7.2;
  area = 7.7;
  updateInputField("add", Math.round(area) + "\n");
  updateInputField("add", Math.floor(area) + "\n");
  updateInputField("add", Math.trunc(area) + "\n");
  area = 7.2
  updateInputField("add", Math.ceil(area) + "\n");
  updateInputField("add", Math.random() + "\n");
  updateInputField("add", Math.round(Math.random() * 100) + "\n");
  */
  /*
  let keys = document.querySelectorAll("#symbol-keys .row .key__inner");

  Array.from(keys).forEach((key) => {
    updateInputField(
      "add",
      `${key.nodeName} ${key.hasChildNodes()} ${key.innerText}\n`
    );
    //updateInputField("add", `${key.innerText}\n`);
  });
  */
  /*
  let cursorPanel = document.querySelector(
    ".main-panel .main-panel__cursor-control-keys"
  );
  let mainPanel = cursorPanel.previousElementSibling;
  let numpadPanel = cursorPanel.nextElementSibling;
  const panel = [cursorPanel, mainPanel, numpadPanel];
  let printPanel = [];
  panel.forEach((parts) => {
    printPanel.push(parts.cloneNode(false));
  });
  printPanel.forEach((part) => {
    updateInputField("add", `${part.outerHTML}\n`);
  });
  */
  class User {
    #password;
    constructor(name, age, email, password) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.#password = password;
      this.online = false;
      this.score = 0;
    }
    login() {
      this.online = true;
      updateInputField("add", `\n${this.name} has logged in and now online\n`);
      return this;
    }
    logout() {
      this.online = false;
      updateInputField("add", `${this.name} has logged out and now offline\n`);
      return this;
    }
    getHiddenPassword() {
      return "*".repeat(this.#password.length);
    }
    checkPassword(password) {
      return this.#password === password;
    }
    printInfo(showHiddenPassword = false) {
      let passwordDisplay = showHiddenPassword ? this.#password : "••••••••";

      updateInputField(
        "add",
        `User info:\n Name: ${this.name}\n Age: ${this.age}\n Password: ${passwordDisplay}\n Score: ${this.score}\n Email: ${this.email}\n\n`
      );
      return this;
    }
    updateScore() {
      this.score++;
      updateInputField("add", `${this.name}'s score is now ${this.score}\n`);
      return this;
    }
  }
  class Admin extends User {
    deleteUser(user) {
      users = users.filter((u) => u.email !== user.email);
      updateInputField(
        "add",
        `${this.name} deleted user with email: ${user.email}\n`
      );
      user = null;
      return this;
    }
  }
  let userOne = new User("Dmytro", 32, "dg318842@gmail.com", "mypassword123");
  let userTwo = new User("Vova", 36, "vova228@gmail.com", "qwerty456");
  userOne.login().updateScore().updateScore().printInfo(true).logout();
  userTwo.login().updateScore().printInfo().logout();
  let users = [userOne, userTwo];
  let admin = new Admin("Sasha", 28, "sashaprivate@gmail.com", "adminpass789");
  admin.login().deleteUser(userTwo).logout();
  userTwo = null;
  //callback hell example
  /*
  const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("could not fetch the data", undefined);
      }
    });
    request.open("GET", resource);
    //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.send();
  };

  getTodos("data/dima.json", (err, data) => {
    console.log("callback fired");
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      getTodos("data/oskar.json", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          getTodos("data/misha.json", (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          });
        }
      });
    }
  });
  */
  /*
  //promise example

  const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject("could not fetch the data");
        }
      });
      request.open("GET", resource);
      //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
      request.send();
    });
  };
  getTodos("data/dima.json")
    .then((data) => {
      console.log("promise resolved:", data);
      return getTodos("data/oskar.json");
    })
    .then((data) => {
      console.log("promise resolved:", data);
      return getTodos("data/misha.json");
    })
    .then((data) => {
      console.log("promise resolved:", data);
    })
    .catch((err) => {
      console.log("promise rejected:", err);
    });
    */
  const getTodos = async (resource) => {
    const responce = await fetch(resource);
    if (!responce.ok) {
      throw new Error("could not fetch the data");
    }
    const data = await responce.json();
    return data;
  };
  console.log("before async/await 1");
  console.log("before async/await 2");
  getTodos("data/dima.json")
    .then((data) => console.log("async/await resolved:", data))
    .catch((err) => console.log("async/await rejected:", err.message));
  console.log("after async/await 1");
  console.log("after async/await 2");
});
