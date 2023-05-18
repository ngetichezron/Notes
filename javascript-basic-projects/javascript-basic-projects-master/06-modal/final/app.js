// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


/*
This code is for a simple modal that opens and closes 
when the user clicks on the modal button or the close 
button. Here's an explanation of the code:

  The first three lines of code use the querySelector()
  method to select the modal button, modal overlay, 
  and close button from the HTML document and assign 
  them to variables.

  The next two lines of code use the addEventListener() 
  method to add click event listeners to the modal 
  button and close button.

  When the user clicks the modal button, the event 
  listener on modalBtn executes a function that adds 
  the open-modal class to the modal element. This 
  class is responsible for showing the modal on the 
  page.

  When the user clicks the close button, the event 
  listener on closeBtn executes a function that 
  removes the open-modal class from the modal element. 
  This class is responsible for hiding the modal from 
  the page.

In summary, the code listens for click events on the 
modal button and close button, and shows or hides the 
modal accordingly.

*/