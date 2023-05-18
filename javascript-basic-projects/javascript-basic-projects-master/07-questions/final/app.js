//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });



/*
This code selects all elements with the class name 
"question" using the querySelectorAll method and 
stores them in the questions variable.

It then loops through each of these elements using 
the forEach method, and for each element, it selects 
the element with the class name "question-btn" using 
the querySelector method and stores it in the btn 
variable.

It adds a click event listener to the btn element 
that toggles the "show-text" class on the question 
element when the button is clicked.

Before toggling the "show-text" class, the code 
first removes the class from all other elements 
with the "question" class except for the currently 
clicked element. This ensures that only one question 
is displayed at a time, and clicking on one question 
collapses any other open questions.

*/
