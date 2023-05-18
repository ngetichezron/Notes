// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      console.log(count);
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});


/*
  This JavaScript code is for a simple counter application 
  that allows the user to increase, decrease, or reset the 
  counter value to zero.

  First, it sets the initial counter value to zero by 
  declaring and initializing the variable count.

  Next, it selects two elements from the HTML page using 
  document.querySelector and document.querySelectorAll 
  methods. The first element is a span element with an id 
  of value that displays the current counter value, and 
  the second element is a set of three button elements 
  with the class btn that are used to increase, decrease, 
  or reset the counter value.

  Then, a forEach loop is used to iterate through each 
  button element in the btns array. For each button 
  element, an event listener is added to listen for a 
  click event.

  When a button is clicked, the event listener callback 
  function is executed. It first retrieves the class list 
  of the clicked button element using e.currentTarget.classList 
  and assigns it to the styles variable.

  Next, it checks the styles variable to determine which 
  button was clicked by checking whether it contains the 
  class decrease, increase, or reset. If the class is 
  decrease, the count variable is decremented by 1. If 
  the class is increase, the count variable is incremented 
  by 1. If the class is reset, the count variable is set 
  to 0.

  After updating the count variable, the code checks its 
  value and sets the color of the value element to green 
  if the count is positive, red if the count is negative, 
  and black if the count is zero. Finally, it updates the 
  textContent property of the value element with the new 
  count value to display the updated counter value on the 
  web page.

*/

