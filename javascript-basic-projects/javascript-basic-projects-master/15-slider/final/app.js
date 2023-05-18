const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");


slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";



/*

This is a JavaScript code for a carousel with previous 
and next buttons. Here's an explanation of the code:

  The first three lines of code use the 
  querySelectorAll method to select all elements 
  with the class name "slide", and select the elements 
  with the class names "nextBtn" and "prevBtn" 
  respectively. The slides variable now contains 
  an array-like object that represents all the slide 
  elements on the page.

  The forEach method is called on the slides array 
  to loop over each slide element and set its position 
  using the style.left property. The position of each 
  slide element is set as a percentage of the screen 
  width, based on its index in the slides array. For 
  example, if there are four slides, the first slide's 
  position will be set to 0%, the second slide's 
  position will be set to 100%, the third slide's 
  position will be set to 200%, and so on. This 
  ensures that only one slide is visible at a time, 
  and the other slides are hidden off-screen.

  A counter variable is declared with an initial 
  value of 0.

  Event listeners are added to the next and previous 
  buttons using the addEventListener method. When the 
  next button is clicked, the counter variable is 
  incremented, and when the previous button is clicked, 
  the counter variable is decremented. 
  The carousel function is then called to update the 
  position of the slides.

  The carousel function checks the value of the 
  counter variable to determine which slide should 
  be displayed. The position of each slide is updated 
  using the style.transform property, which translates 
  the slide horizontally based on the counter value.

  The function also checks whether the counter value 
  is at the beginning or end of the slides array, and 
  hides the previous or next button accordingly using 
  the style.display property. If the counter value is 
  at the beginning, the previous button is hidden, and 
  if it's at the end, the next button is hidden.

  Finally, the previous button is initially hidden 
  using the prevBtn.style.display property. This is 
  because the first slide is already displayed when 
  the page loads, so there's no need to show the 
  previous button.

*/