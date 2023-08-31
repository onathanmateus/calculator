class Calculator {
  constructor() {
    this.display = document.querySelector(".display");

    this.begin = () => this.buttonClick();

    this.buttonClick = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) this.buttonOnDisplay(el);
        if (el.classList.contains("btn-clear")) this.clearDisplay();
        if (el.classList.contains("btn-del")) this.deleteOneFromDisplay();
        if (el.classList.contains("btn-eq")) this.doACalculation();
      });
    };

    this.buttonOnDisplay = (el) => (this.display.value += el.innerText);
    this.clearDisplay = () => (this.display.value = "");
    this.deleteOneFromDisplay = () => (this.display.value = this.display.value.slice(0, -1));
    this.doACalculation = () => {
      try {
        const calculation = eval(this.display.value);
        if (!calculation) {
          alert("Conta Inválida !!!");
          this.display.value = "";
          return;
        }
        this.display.value = calculation;
      } catch (error) {
        alert("Conta Inválida !!!");
        this.display.value = "";
        return;
      }
    };
  }
}

const calculator = new Calculator();
calculator.begin();
