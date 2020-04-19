const calScreen = document.querySelector('#cal-screen');
const numbers = document.querySelectorAll('.numbers div');
const operators = document.querySelectorAll('.operators div:not(:last-child)');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const remove = document.querySelector('#remove');

// An array will store all button values
let selectionArr = [];
// String that will store math operations
let valueStr = '';

// Object with methods that are executed on button clicks
const operations = {
  // Push value of clicked element to selectionArr and add number or operator to calculator screen
  addVal(el) {
    elValue = el.target.innerHTML;
    let lastIndex = selectionArr[selectionArr.length - 1];
    if (isNaN(elValue)) {
      // Calling function that will check elValue with statements
      checkValueType(elValue, lastIndex);
    } else {
      selectionArr.push(elValue);
    }
    calScreen.value = selectionArr.join('').toString();
  },
  // Removes last item of selectionArr array
  remove() {
    selectionArr.pop();
    calScreen.value = selectionArr.join('').toString();
  },
  // Clears all inputs
  clear() {
    selectionArr = [];
    valueStr = '';
    calScreen.value = 0;
  },
  // Calculates math operations in valueStr string and displays it to calculator screen
  calculate() {
    selectionArr.forEach((value) => {
      valueStr += value;
    });
    calScreen.value = eval(valueStr);
    selectionArr = [];
    valueStr = '';
  },
};

// Functions that creates all event listeners
function eventListeners() {
  let numbersBtn = Array.from(numbers);
  let operatorsBtn = Array.from(operators);

  numbersBtn.forEach((button) => {
    button.addEventListener('click', operations.addVal);
  });

  operatorsBtn.forEach((button) => {
    button.addEventListener('click', operations.addVal);
  });

  result.addEventListener('click', operations.calculate);
  clear.addEventListener('click', operations.clear);
  remove.addEventListener('click', operations.remove);
}

// Calling all event listeners so that we can use button click events
eventListeners();

// This function will check if provided last index is number or not
function checkValueType(value, lastIndex) {
  if (isNaN(lastIndex)) {
    // If last index is operator it will replace that operator with one that is clicked
    switch (value) {
      case '\327':
        selectionArr.splice(selectionArr.length - 1, 1, '*');
        break;
      case '\367':
        selectionArr.splice(selectionArr.length - 1, 1, '/');
        break;
      case '+':
        selectionArr.splice(selectionArr.length - 1, 1, '+');
        break;
      case '-':
        selectionArr.splice(selectionArr.length - 1, 1, '-');
        break;
      case '%':
        selectionArr.splice(selectionArr.length - 1, 1, '%');
        break;
    }
  } else if (!isNaN(lastIndex)) {
    // If last index is not operator statement will add clicked operator
    switch (value) {
      case '\327':
        selectionArr.push('*');
        break;
      case '\367':
        selectionArr.push('/');
        break;
      case '+':
        selectionArr.push('+');
        break;
      case '-':
        selectionArr.push('-');
        break;
      case '%':
        selectionArr.push('%');
        break;
    }
  }
}
