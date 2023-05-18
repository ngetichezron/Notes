function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Counter(element, value) {
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

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);



/*

The two versions of the code create the same result.

The first version of the code uses the ES6 class 
syntax to define the Counter class, while the second 
version uses the traditional constructor function and 
prototype methods.

The main difference between the two is the syntax 
used to define the class and methods, and the way 
inheritance is handled. In the first version, the 
extends keyword can be used to create a subclass 
that inherits from the parent class, while in the 
second version, you would use the Object.create() 
method to achieve the same result.

However, the overall functionality of the code is 
the same, and both versions define a Counter object 
that can be used to increment, decrement and reset a 
value displayed in the DOM.


*/