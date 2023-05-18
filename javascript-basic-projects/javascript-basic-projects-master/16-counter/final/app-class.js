function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);


/*

This code defines a class Counter that creates a 
counter object with three buttons and a display for 
the current count. It also defines a helper function 
getElement that takes a CSS selector and returns the 
corresponding element from the DOM.

The Counter class takes two arguments: an element from 
the DOM that contains the counter buttons and display, 
and an initial value for the counter. The constructor 
initializes the properties of the counter object and 
binds the increase, decrease, and reset methods to the 
object instance, so that this always refers to the object. 
It also sets up event listeners on the buttons that 
call the appropriate method when clicked.

The increase method increments the counter value and 
updates the display. The decrease method decrements 
the counter value and updates the display. The reset 
method sets the counter value to zero and updates the 
display.

Finally, the code creates two Counter objects, one 
for each of two different elements in the DOM that 
contain counter buttons and displays.

*/