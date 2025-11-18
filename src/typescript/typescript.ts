const $div = (selector: string): HTMLDivElement =>
  document.querySelector<HTMLDivElement>(selector)!;
const $divs = (selector: string): NodeListOf<HTMLDivElement> =>
  document.querySelectorAll<HTMLDivElement>(selector)!;
const $input = (selector: string): HTMLInputElement =>
  document.querySelector<HTMLInputElement>(selector)!;
const $form = (selector: string): HTMLFormElement =>
  document.querySelector<HTMLFormElement>(selector)!;

class InputHelper {
  private inputField!: HTMLInputElement;
  constructor(selector: string) {
    this.inputField = $input(selector);
  }
  add(text: string): void {
    this.inputField.value += text;
  }
  delete(): void {
    this.inputField.value = this.inputField.value.slice(0, -1);
  }
  replace(text: string, replaceText: string): void {
    this.inputField.value = this.inputField.value.replace(
      new RegExp(text, "gi"),
      replaceText
    );
  }
  get value(): string {
    return this.inputField.value;
  }
  set value(value: string) {
    this.inputField.value = value;
  }
}

class Keyboard {
  private isCapsOn!: boolean;
  private isNumLockOn!: boolean;
  private isWinOn!: boolean;
  private isScrollOn!: boolean;
  private capsIndicator!: HTMLDivElement;
  private numIndicator!: HTMLDivElement;
  private scrollIndicator!: HTMLDivElement;
  private winIndicator!: HTMLDivElement;

  private fnKeys!: NodeListOf<HTMLDivElement>;
  private symbolKeys!: NodeListOf<HTMLDivElement>;
  private keyboard!: HTMLDivElement;
  private inputSection!: HTMLDivElement;
  private inputField: InputHelper;

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
  private browserKeys!: string[];

  constructor() {
    this.inputField = new InputHelper("#entering");
    this.initStates();
    this.initElements();
    this.addMouseListeners();
    this.addKeyboardListeners();
    this.SubmitForm();
    this.setTimer();
  }
  private initStates(): void {
    this.isCapsOn = false;
    this.isNumLockOn = false;
    this.isWinOn = false;
    this.isScrollOn = false;
  }
  private initElements(): void {
    this.keyboard = $div("#keyboard");
    this.inputSection = $div(".input");
    this.forbiddenWords = ["sex"];
    this.browserKeys = ["F11"];
    this.fnKeys = $divs(".row__btn-groups .key__inner");
    this.symbolKeys = $divs(".key__inner");
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

  private setTimer(): void {
    setTimeout(
      () => this.keyboard.classList.add("keyboard--show-effect"),
      1000
    );
    setTimeout(
      () => this.inputSection.classList.add("input--show-effect"),
      2000
    );
  }
  private addMouseListeners(): void {
    this.symbolKeys.forEach((key) => {
      key.addEventListener("mousedown", (e) => this.handleMouseDown(e, key));
      key.addEventListener("mouseup", () => this.releaseKey(key));
      key.addEventListener("mouseleave", () => this.releaseKey(key));
    });
    console.log("mouse events created");
  }

  private addKeyboardListeners(): void {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
    console.log("keybpard events created");
  }
  private SubmitForm(): void {
    this.addForm.addEventListener("submit", this.handleSubmitting.bind(this));
    console.log("submit form event created");
  }
  private handleSubmitting(event: SubmitEvent): void {
    event.preventDefault();
    const currentValue: string = this.inputField.value.trim();
    const encodedText = encodeURIComponent(currentValue);
    history.pushState(null, "", `?text=${encodedText}`);
    this.inputField.value = "";
    if (history) {
      console.log(`the text ${currentValue} was submited`);
    }
  }

  private handleKeyDown(e: KeyboardEvent): void {
    const fnKey: HTMLElement = Array.from(this.fnKeys).find(
      (k) => k.textContent?.toUpperCase() === e.key.toUpperCase()
    )!;
    if (fnKey) {
      fnKey.classList.add("pressed");
      if (!this.browserKeys.includes(e.key)) {
        e.preventDefault();
      }
      return;
    }
    if (!this.browserKeys.includes(e.key)) {
      e.preventDefault();
    }
    switch (e.key) {
      case "CapsLock":
        if (this.capsLockKey) this.capsLockKey.classList.add("pressed");
        this.isCapsOn = !this.isCapsOn;
        this.capsIndicator.classList.toggle("on", this.isCapsOn);
        break;
      case "NumLock":
        if (this.numLockKey) this.numLockKey.classList.add("pressed");
        this.isNumLockOn = !this.isNumLockOn;
        this.numIndicator.classList.toggle("on", this.isNumLockOn);
        break;
      case "ScrollLock":
        if (this.scrollLockKey) this.scrollLockKey.classList.add("pressed");
        this.isScrollOn = !this.isScrollOn;
        this.scrollIndicator.classList.toggle("on", this.isScrollOn);
        break;
      case "Shift":
        if (e.code === "ShiftLeft") {
          if (this.shiftLeftKey) this.shiftLeftKey.classList.add("pressed");
        } else if (e.code === "ShiftRight") {
          if (this.shiftRightKey) this.shiftRightKey.classList.add("pressed");
        }
        break;
      case "Meta":
        if (e.code === "MetaLeft") {
          if (this.winLeftKey) this.winLeftKey.classList.add("pressed");
        } else if (e.code === "MetaRight") {
          if (this.winRightKey) this.winRightKey.classList.add("pressed");
        }
        this.isWinOn = !this.isWinOn;
        this.winIndicator.classList.toggle("on", this.isWinOn);
        break;
      case "Control":
        if (e.code === "ControlLeft") {
          if (this.ctrlLeftKey) this.ctrlLeftKey.classList.add("pressed");
        } else if (e.code === "ControlRight") {
          if (this.ctrlRightKey) this.ctrlRightKey.classList.add("pressed");
        }
        break;
      case "Alt":
        if (e.code === "AltLeft") {
          if (this.altLeftKey) this.altLeftKey.classList.add("pressed");
        } else if (e.code === "AltRight") {
          if (this.altRightKey) this.altRightKey.classList.add("pressed");
        }
        break;
      case "Backspace":
        this.inputField.delete();
        if (this.backspaceKey) this.backspaceKey.classList.add("pressed");
        break;
      case "Enter":
        this.inputField.add("\n");
        if (this.enterKey) this.enterKey.classList.add("pressed");
        break;
      case "Tab":
        this.inputField.add("   ");
        if (this.tabKey) this.tabKey.classList.add("pressed");
        break;
      case " ":
        this.inputField.add(" ");
        if (this.spaceKey) this.spaceKey.classList.add("pressed");
        break;
      default:
        const keyElement: HTMLDivElement = Array.from(this.symbolKeys).find(
          (k) => k.textContent.toLowerCase() === e.key.toLowerCase()
        )!;
        if (keyElement) {
          keyElement.classList.add("pressed");
          let char = keyElement.textContent;
          if ((this.isCapsOn && !e.shiftKey) || (!this.isCapsOn && e.shiftKey))
            char = char.toUpperCase();
          else char = char.toLowerCase();
          this.inputField.add(char);
        }
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
      case " ":
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
    if (keyElement) {
      keyElement.classList.remove("pressed");
      console.log(`the button${keyElement.innerText} was unpressed`);
    }
  }
  private handleMouseDown(e: MouseEvent, key: HTMLElement): void {
    key.classList.add("pressed");
    const parent: HTMLElement = key.parentElement!;
    const parentsParent: HTMLElement = parent.parentElement!;
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
    } else if (
      parent.classList.contains("key--win-left") ||
      parent.classList.contains("key--win-right")
    ) {
      this.isWinOn = !this.isWinOn;
      this.winIndicator.classList.toggle("on", this.isWinOn);
    } else if (parent.classList.contains("key--scroll-lock")) {
      this.isScrollOn = !this.isScrollOn;
      this.scrollIndicator.classList.toggle("on", this.isScrollOn);
    } else if (parent.classList.contains("key--backspace")) {
      this.inputField.delete();
    } else if (parent.classList.contains("key--tab")) {
      this.inputField.add("   ");
    } else if (key.classList.contains("key__inner--enter")) {
      this.inputField.add("\n");
    } else if (key.querySelector(".key__inner__space")) {
      this.inputField.add(" ");
    } else {
      let char = key.textContent;
      if ((this.isCapsOn && !e.shiftKey) || (!this.isCapsOn && e.shiftKey))
        char = char.toUpperCase();
      else char = char.toLowerCase();
      this.inputField.add(char);
    }
  }
  private releaseKey(key: HTMLElement): void {
    key.classList.remove("pressed");
    const forbidden = this.checkForbiddenWords(this.inputField.value);
    if (forbidden) {
      this.handleForbiddenWords(forbidden);
    }
  }
  private checkForbiddenWords(text: string): string | undefined {
    return this.forbiddenWords.find(
      (word) => text.includes(word) || text.includes(word.toUpperCase())
    );
  }
  private handleForbiddenWords = (word: string): void => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      alert("Иди нахуй, сука!");
      this.inputField.replace(word, "");
      document.body.style.backgroundColor = "";
    }, 50);
  };
}
class User {
  protected inputField: InputHelper;
  private password: string;
  public name: string;
  public age: number;
  public email: string;
  public online: boolean;
  public score: number;
  constructor(name: string, age: number, email: string, password: string) {
    this.inputField = new InputHelper("#entering");
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.online = false;
    this.score = 0;
  }
  login(): this {
    this.online = true;
    this.inputField.add(`\n${this.name} has logged in and now online\n`);
    return this;
  }
  logout(): this {
    this.online = false;
    this.inputField.add(`${this.name} has logged out and now offline\n`);
    return this;
  }
  getHiddenPassword(): string {
    return "*".repeat(this.password.length);
  }
  checkPassword(password: string): boolean {
    return this.password === password;
  }
  printInfo(showHiddenPassword: boolean = false): this {
    const passwordDisplay = showHiddenPassword ? this.password : "••••••••";
    this.inputField.add(
      `User info:\n Name: ${this.name}\n Age: ${this.age}\n Password: ${passwordDisplay}\n Score: ${this.score}\n Email: ${this.email}\n\n`
    );

    return this;
  }

  updateScore(): this {
    this.score++;
    this.inputField.add(`${this.name}'s score is now ${this.score}\n`);
    return this;
  }
}
class Admin extends User {
  constructor(name: string, age: number, email: string, password: string) {
    super(name, age, email, password);
  }
  deleteUser(user: User, users: User[]): this {
    const index = users.findIndex((u) => u.email === user.email);
    if (index !== -1) {
      users.splice(index, 1);
      this.inputField.add(
        `${this.name} deleted user with email: ${user.email}\n`
      );
    } else {
      this.inputField.add(`User with email ${user.email} not found\n`);
    }

    return this;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const keyboardApp = new Keyboard();
  let userOne = new User("Dmytro", 32, "dg318842@gmail.com", "mypassword123");
  let userTwo = new User("Vova", 36, "vova228@gmail.com", "qwerty456");
  let users = [userOne, userTwo];

  let admin = new Admin("Sasha", 28, "sashaprivate@gmail.com", "adminpass789");

  admin.login().deleteUser(userTwo, users).logout();

  console.log(users);
});
