const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});



/*
  This code adds a click event listener to the .about 
  element, which is probably a container element that 
  holds a list of buttons and content sections.

  When a button is clicked, the function gets the 
  data-id attribute of the clicked button using the 
  dataset property. This attribute should correspond 
  to the id of the content section that needs to be 
  displayed.

  Then, the function removes the active class from all 
  buttons using the forEach method, and adds the active 
  class to the clicked button using the classList property.

  Next, the function hides all content sections by 
  removing the active class from them using the forEach 
  method.

  Finally, the function gets the content section 
  corresponding to the clicked button's data-id using 
  document.getElementById(id), adds the active class to 
  it using the classList property, and displays it on 
  the page.

  Overall, this code is used to create a tabbed interface 
  where users can click on different tabs to display 
  corresponding content sections.
*/