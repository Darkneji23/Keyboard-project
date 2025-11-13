const $div = (selector: string) =>
  document.querySelector<HTMLDivElement>(selector)!;
const $divs = (selector: string) =>
  document.querySelectorAll<HTMLDivElement>(selector)!;
const $input = (selector: string) =>
  document.querySelector<HTMLInputElement>(selector)!;
const $form = (selector: string) =>
  document.querySelector<HTMLFormElement>(selector)!;

class Keyboard {
  private fnKeys!: NodeListOf<HTMLDivElement>;
  private isCapsOn!: boolean;
  private isNumLockOn!: boolean;
  private isWinOn!: boolean;
  private isScrollOn!: boolean;
  private ledIndicators!: NodeListOf<HTMLDivElement>;
  private capsIndicator!: HTMLDivElement;
  private numIndicator!: HTMLDivElement;
  private scrollIndicator!: HTMLDivElement;
  private winIndicator!: HTMLDivElement;

  private symbolKeys!: NodeListOf<HTMLDivElement>;
  private inputField!: HTMLInputElement;
  private winLeftKey!: HTMLDivElement;
  private winRightKey!: HTMLDivElement;
  private shiftLeftKey!: HTMLDivElement;
  private shiftRightKey!: HTMLDivElement;
  private ctrlLeftKey!: HTMLDivElement;
  private ctrlRightKey!: HTMLDivElement;
  private spaceKey!: HTMLDivElement;
  private tabKey!: HTMLDivElement;
  private enterKey!: HTMLDivElement;
  private capsLockKey!: HTMLDivElement;
  private altLeftKey!: HTMLDivElement;
  private altRightKey!: HTMLDivElement;
  private backspaceKey!: HTMLDivElement;
  private numLockKey!: HTMLDivElement;
  private scrollLockKey!: HTMLDivElement;
  private leftArrow!: HTMLDivElement;
  private rightArrow!: HTMLDivElement;
  private upArrow!: HTMLDivElement;
  private downArrow!: HTMLDivElement;
  private addForm!: HTMLFormElement;
  private forbiddenWords!: string[];

  constructor() {
    this.initStates();
    this.initElements();

    this.addMouseListeners();
    this.addKeyboardListeners();
    this.SubmitForm();
  }
  private initStates(): void {
    this.isCapsOn = false;
    this.isNumLockOn = false;
    this.isWinOn = false;
    this.isScrollOn = false;
  }
  private initElements(): void {
    this.forbiddenWords = ["sex"];
    this.fnKeys = $divs(".row__btn-groups .key__inner");
    this.symbolKeys = $divs(".key__inner");
    this.inputField = $input("#entering");
    this.winLeftKey = $div(".key.key--win-left .key__inner");
    this.winRightKey = $div(".key.key--win-right .key__inner");
    this.shiftLeftKey = $div("#shift--left .key__inner");
    this.shiftRightKey = $div("#shift--right .key__inner");
    this.ctrlLeftKey = $div(".key.key--ctrl-left .key__inner");
    this.ctrlRightKey = $div(".key.key--ctrl-right .key__inner");
    this.spaceKey = $div(".key.key--space .key__inner");
    this.tabKey = $div(".key.key--tab .key__inner");
    this.enterKey = $div(".key.key--enter .key__inner");
    this.capsLockKey = $div(".key.key--caps .key__inner");
    this.altLeftKey = $div(".key.key--alt-left .key__inner");
    this.altRightKey = $div(".key.key--alt-right .key__inner");
    this.backspaceKey = $div(".key.key--backspace .key__inner");
    this.numLockKey = $div("#num-lock .key__inner");
    this.scrollLockKey = $div("#scroll-lock .key__inner");
    this.leftArrow = $div("#arrow-left .key__inner");
    this.rightArrow = $div("#arrow-right .key__inner");
    this.upArrow = $div("#arrow-up .key__inner");
    this.downArrow = $div("#arrow-down .key__inner");
    this.addForm = $form(".input__form");
    this.capsIndicator = $div("#caps-led");
    this.numIndicator = $div("#num-led");
    this.scrollIndicator = $div("#scroll-led");
    this.winIndicator = $div("#win-led");
  }

  private addMouseListeners(): void {
    this.symbolKeys.forEach((key) => {
      key.addEventListener("mousedown", (e) => this.handleMouseDown(e, key));
      key.addEventListener("mouseup", () => this.releaseKey(key));
      key.addEventListener("mouseleave", () => this.releaseKey(key));
    });
  }

  private addKeyboardListeners(): void {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }
  private SubmitForm(): void {
    this.addForm.addEventListener("submit", this.handleSubmiting.bind(this));
  }
  private handleSubmiting(event: SubmitEvent): void {
    event.preventDefault();
    const currentValue: string = this.inputField.value.trim();
    const encodedText = encodeURIComponent(currentValue);
    history.pushState(null, "", `?text=${encodedText}`);
    this.inputField.value = "";
  }

  private handleKeyDown(e: KeyboardEvent): void {
    const fnKey = Array.from(this.fnKeys).find(
      (k) => k.textContent?.toUpperCase() === e.key.toUpperCase()
    );
    if (fnKey) {
      fnKey.classList.add("pressed");
    }
    if (
      document.activeElement === document.body ||
      document.activeElement === this.inputField
    ) {
      e.preventDefault();
    }
    switch (e.key) {
      case "CapsLock":
        this.isCapsOn = !this.isCapsOn;
        this.capsIndicator.classList.toggle("on", this.isCapsOn);
        break;
      case "NumLock":
        this.isNumLockOn = !this.isNumLockOn;
        this.numIndicator.classList.toggle("on", this.isNumLockOn);
        break;
      case "ScrollLock":
        this.isScrollOn = !this.isScrollOn;
        this.scrollIndicator.classList.toggle("on", this.isScrollOn);
        break;
      case "Meta":
        this.isWinOn = !this.isWinOn;
        this.winIndicator.classList.toggle("on", this.isWinOn);
        break;
    }
  }
  private handleKeyUp(e: KeyboardEvent): void {
    let keyElement: HTMLElement | undefined;
    switch (e.key) {
      case "Meta":
        if (e.code === "MetaLeft") {
          keyElement = this.winLeftKey;
        } else if (e.code === "MetaRight") {
          keyElement = this.winRightKey;
        }
        break;
      case "CapsLock":
        keyElement = this.capsLockKey;
        break;
      case "Shift":
        if (e.code === "ShiftLeft") {
          keyElement = this.shiftLeftKey;
        } else if (e.code === "ShiftRight") {
          keyElement = this.shiftRightKey;
        }
        break;
      case "Control":
        if (e.code === "ControlLeft") {
          keyElement = this.ctrlLeftKey;
        } else if (e.code === "ControlRight") {
          keyElement = this.ctrlRightKey;
        }
        break;
      case "Alt":
        if (e.code === "AltLeft") {
          keyElement = this.altLeftKey;
        } else if (e.code === "AltRight") {
          keyElement = this.altRightKey;
        }
        break;
      case "Space":
        keyElement = this.spaceKey;
        break;
      case "Tab":
        e.preventDefault();
        keyElement = this.tabKey;
        break;
      case "Enter":
        keyElement = this.enterKey;
        break;
      case "Backspace":
        keyElement = this.backspaceKey;
        break;
      case "NumLock":
        keyElement = this.numLockKey;
        break;
      case "ScrollLock":
        keyElement = this.scrollLockKey;
        break;
      case "ArrowLeft":
        keyElement = this.leftArrow;
        break;
      case "ArrowRight":
        keyElement = this.rightArrow;
        break;
      case "ArrowUp":
        keyElement = this.upArrow;
        break;
      case "ArrowDown":
        keyElement = this.downArrow;
        break;
      default:
        if (e.key !== "Shift") {
          keyElement = Array.from(this.symbolKeys).find(
            (k) => k.textContent.toLowerCase() === e.key.toLowerCase()
          );
        }
        break;
    }
    if (keyElement) keyElement.classList.remove("pressed");
  }
  private handleMouseDown(e: MouseEvent, key: HTMLElement): void {
    key.classList.add("pressed");
    const parent: HTMLElement = key.parentElement!;
    const parentsParent = parent.parentElement!;
    if (
      parent.classList.contains("key--shift") ||
      parent.classList.contains("key--ctrl") ||
      parent.classList.contains("key--alt") ||
      parent.classList.contains("key--menu") ||
      parentsParent.classList.contains("row__btn-groups")
    ) {
    } else if (parent.classList.contains("key--caps")) {
      this.isCapsOn = !this.isCapsOn;
      this.capsIndicator.classList.toggle("on", this.isCapsOn);
    } else if (parent.classList.contains("key--num-lock")) {
      this.isNumLockOn = !this.isNumLockOn;
      this.numIndicator.classList.toggle("on", this.isNumLockOn);
    } else if (parent.classList.contains("key--win")) {
      this.isWinOn = !this.isWinOn;
      this.winIndicator.classList.toggle("on", this.isWinOn);
    } else if (parent.classList.contains("key--scroll-lock")) {
      this.isScrollOn = !this.isScrollOn;
      this.scrollIndicator.classList.toggle("on", this.isScrollOn);
    } else if (parent.classList.contains("key--backspace")) {
      this.updateInputField("delete");
    } else if (parent.classList.contains("key--tab")) {
      this.updateInputField("add", "   ");
    } else if (key.classList.contains("key__inner--enter")) {
      this.updateInputField("add", "\n");
    } else if (key.querySelector(".key__inner__space")) {
      this.updateInputField("add", " ");
    } else {
      let char = key.textContent;
      if ((this.isCapsOn && !e.shiftKey) || (!this.isCapsOn && e.shiftKey))
        char = char.toUpperCase();
      else char = char.toLowerCase();
      this.updateInputField("add", char);
    }
  }
  private releaseKey(key: HTMLElement): void {
    key.classList.remove("pressed");
    const forbidden = this.checkForbiddenWords(this.inputField.value);
    if (forbidden) {
      this.handleForbiddenWords(forbidden);
    }
  }
  private updateInputField(
    action: "add" | "delete" | "replace",
    value: string = "",
    replaceValue: string = ""
  ): void {
    switch (action) {
      case "add":
        this.inputField.value += value;
        break;
      case "delete":
        this.inputField.value = this.inputField.value.slice(0, -1);
        break;
      case "replace":
        this.inputField.value = this.inputField.value.replace(
          new RegExp(value, "gi"),
          replaceValue
        );
        break;
    }
  }
  private checkForbiddenWords(text: string): string | undefined {
    const lowerText = text.toLowerCase();
    return this.forbiddenWords.find(
      (word) => text.includes(word) || text.includes(word.toUpperCase())
    );
  }
  private handleForbiddenWords = (word: string): void => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      alert("Иди нахуй, сука!");
      this.updateInputField("replace", word);
      document.body.style.backgroundColor = "";
    }, 50);
  };
}
document.addEventListener("DOMContentLoaded", () => {
  const keyboard = $div("#keyboard");
  const inputSection = $div(".input");

  setTimeout(() => keyboard.classList.add("keyboard--show-effect"), 1000);
  setTimeout(() => inputSection.classList.add("input--show-effect"), 2000);
  const keyboardApp = new Keyboard();
});
