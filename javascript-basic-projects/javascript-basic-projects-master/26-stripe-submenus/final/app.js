import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
// hide/show sideabar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join('')}
</div>
</article>`;
  })
  .join('');

linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join('')}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});
nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});


/*

This is a JavaScript module that handles the 
functionality of a sidebar navigation menu. 
Here's a breakdown of what the code does:

  Imports sublinks from data.js, which is an array of 
  objects containing information about the links to 
  be displayed in the sidebar.

  Selects elements from the DOM and assigns them 
  to variables: toggleBtn, closeBtn, sidebarWrapper, 
  sidebar, linkBtns, submenu, hero, and nav.

  Adds event listeners to toggleBtn and closeBtn 
  to show and hide the sidebar, respectively.

  Populates the sidebar element with the links 
  from sublinks using innerHTML.

  Adds event listeners to each linkBtn that display 
  a submenu when the user hovers over them.

  Displays the submenu by adding the .show class to 
  submenu and setting its position based on the position of the hovered linkBtn.

  Populates the submenu with links from the 
  corresponding object in sublinks, and determines 
  the number of columns to use based on the number 
  of links.

  Hides the submenu when the user hovers over the 
  hero or any part of the nav that is not a linkBtn.

Overall, this code sets up a responsive and dynamic 
sidebar navigation menu with submenus that display 
additional links when the user hovers over a main 
link button.


*/



/*

Certainly! Here is a detailed explanation of the code:
Importing Data

The first line of code is an import statement that 
imports a JavaScript module that exports an array of 
objects called sublinks. This module is located in the 
data.js file, which is in the same directory as this 
JavaScript file.


Selecting DOM Elements

The next set of lines selects various DOM elements 
that are used throughout the code. The querySelector() 
method is used to select elements by their CSS class 
names. The selected elements are:

  toggleBtn: The button that opens the sidebar when 
  clicked.

  closeBtn: The button that closes the sidebar when 
  clicked.

  sidebarWrapper: The outer container that wraps the 
  sidebar.

  sidebar: The element that will display the list of 
  sublinks.

  linkBtns: An array of all the link buttons in the 
  navigation menu.

  submenu: The container that displays the submenu 
  of sublinks when a link button is hovered over.

  hero: The container for the main content of the page.

  nav: The container for the navigation menu.


Event Listeners

The next set of code adds event listeners to the 
toggleBtn and closeBtn elements. When the toggleBtn 
is clicked, the show CSS class is added to the 
sidebarWrapper element, which causes it to become 
visible. When the closeBtn is clicked, the show class 
is removed from the sidebarWrapper element, which 
hides it.

The linkBtns array is then looped through using 
the forEach() method to add a mouseover event listener 
to each button. When a button is hovered over, the 
event listener calls a function that displays the 
submenu of sublinks for the corresponding link button.

The hero and nav elements are also given mouseover 
event listeners that hide the submenu if the mouse 
pointer moves away from the navigation menu.
Generating the Sidebar

The final part of the code generates the sidebar by 
looping through the sublinks array using the map() 
method to create an HTML string for each object in 
the array. The resulting HTML is inserted into the 
sidebar element using the innerHTML property.

The HTML for each object in the sublinks array 
consists of an article element that contains the page 
name and a list of sublinks for that page. The sublinks 
are generated by looping through the links array for 
each object using the map() method to create an HTML 
string for each link. The resulting HTML is inserted 
into a div element with the CSS class sidebar-sublinks.

When a link button in the navigation menu is hovered 
over, the mouseover event listener retrieves the 
corresponding links array from the sublinks array 
and generates the HTML for the submenu in the same 
way as for the sidebar. The resulting HTML is inserted 
into the submenu element using the innerHTML property.

I hope that helps! Let me know if you have any other 
questions.


*/
