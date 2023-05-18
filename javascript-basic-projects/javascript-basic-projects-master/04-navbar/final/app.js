// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});



/*
  The code is for a navigation menu that toggles the 
  visibility of a list of links when a toggle button is 
  clicked.

  First, the code selects the toggle button and the list 
  of links using document.querySelector(), and assigns 
  them to the variables navToggle and links, respectively.

  Then, an event listener is added to the navToggle button 
  using addEventListener(), which listens for a "click" 
  event and triggers an anonymous function.

  Inside the event listener function, classList is used 
  to get a list of all classes on the 
  links element. classList.contains() is then used to 
  check if the "show-links" class is present on the 
  links element.

  If the "show-links" class is present, it is removed 
  using classList.remove(). Otherwise, it is added using 
  classList.add().

  However, instead of using if/else statement to add or 
  remove the class, the classList.toggle() method is used 
  to toggle the presence of the "show-links" class. This 
  simplifies the code and makes it more concise.

  Finally, there are some commented-out console.log() 
  statements that demonstrate other uses of classList.
*/