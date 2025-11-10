const $div = (selector: string) =>
  document.querySelector<HTMLDivElement>(selector)!;
const $divs = (selector: string) =>
  document.querySelectorAll<HTMLDivElement>(selector);

const keyboard = $div("#keyboard");
const inputSection = $div(".input");

setTimeout(() => keyboard.classList.add("keyboard--show-effect"), 1000);
setTimeout(() => inputSection.classList.add("input--show-effect"), 2000);

const inputField = document.querySelector("#entering") as HTMLInputElement;
const symbolKeys = $divs(".key__inner");
const forbiddenWords: string[] = ["sex"];
const addForm = document.forms.namedItem("input__form") as HTMLFormElement;

const ledIndicators = $divs(
  ".nav-blocks__indecator .nav-blocks__indecator-led"
);
const capsIndicator = ledIndicators[0];
const numIndicator = ledIndicators[1];
const scrollIndicator = ledIndicators[2];
const winIndicator = ledIndicators[3];

const winKeys = $divs(".key.key--win .key__inner");
const shiftLeftKey = $div("#shift--left .key__inner");
const shiftRightKey = $div("#shift--right .key__inner");
const spaceKey = $div(".key.key--space .key__inner");
const tabKey = $div(".key.key--tab .key__inner");
const enterKey = $div(".key.key--enter .key__inner");
const capsLockKey = $div(".key.key--caps .key__inner");
const ctrlKeys = $divs(".key.key--ctrl .key__inner");
const fnKeys = $divs(".row__btn-groups .key__inner");
const altKeys = $divs(".key.key--alt .key__inner");
const backspaceKey = $div(".key.key--backspace .key__inner");
const numLockKey = $div("#num-lock .key__inner");
const scrollLockKey = $div("#scroll-lock .key__inner");

const leftArrow = $div("#arrow-left .key__inner");
const rightArrow = $div("#arrow-right .key__inner");
const upArrow = $div("#arrow-up .key__inner");
const downArrow = $div("#arrow-down .key__inner");

let isCapsOn: boolean = false;
let isNumLockOn: boolean = false;
let isWinOn: boolean = false;
let isScrollOn: boolean = false;

const updateInputField = (
  action: "add" | "delete" | "replace",
  value: string = "",
  replaceValue: string = ""
): void => {
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
  }
};
const checkForbiddenWords = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return forbiddenWords.some((word) => lowerText.includes(word));
};
const handleForbiddenWords = (word: string): void => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    alert("Иди нахуй, сука!");
    updateInputField("replace", word);
    document.body.style.backgroundColor = "";
  }, 50);
};
