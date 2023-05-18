const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  // const increment = 1;
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
  // console.log(increaseCount);
};

items.forEach((item) => {
  updateCount(item);
});


/*

This code updates the displayed count for each element 
with the class "number" by incrementally increasing 
the count until it reaches the final value.

First, the code creates an array "items" containing all 
the elements with the class "number".

Then, it defines a function "updateCount" which 
takes an element "el" as an argument. This function 
extracts the value from the "data-value" attribute of 
the element, calculates an appropriate increment value, 
and initializes a "initialValue" variable to 0.

Then, it creates an interval using setInterval which 
increments "initialValue" by the increment value and 
sets the textContent of the element to the new value 
until it reaches the final value. Once the final value 
is reached, the interval is cleared using clearInterval.

Finally, the code loops through all the items in the 
"items" array and calls the "updateCount" function on 
each item.

*/