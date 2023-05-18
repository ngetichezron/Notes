// Element.getBoundingClientRect() method returns the size of an element and 
// its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of 
// pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
    /*
      The line of code linksContainer.style.height = 0; 
      falls under the topic of DOM manipulation in 
      JavaScript. Specifically, it demonstrates how to 
      modify the CSS style of an HTML element using 
      JavaScript, in this case by setting the height 
      property of the linksContainer element to 0 pixels. 
      This is a common technique used in web development 
      to create interactive user interfaces and dynamic 
      web pages.
    */

  });
});
// calculate heights



/*
  This JavaScript code is responsible for implementing various 
  features for a website's navigation menu. Here is a brief
  explanation of what the code does:

    The first section of the code sets the current year 
    in the footer of the page.

    The next section of the code adds an event listener 
    to the navigation menu toggle button. When the 
    button is clicked, it expands or collapses the 
    links menu.

    The third section of the code implements a fixed 
    navbar functionality. When the user scrolls down 
    the page, the navbar sticks to the top of the screen.
    When the user scrolls up, the navbar returns to its 
    original position.

    The fourth section of the code implements smooth 
    scrolling functionality. When the user clicks on a 
    link in the navigation menu, the page smoothly 
    scrolls to the corresponding section of the page.

    The code also includes a section for calculating 
    the heights of various elements on the page, which 
    is used in the smooth scrolling functionality.
*/