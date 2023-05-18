import { getElement } from './utils.js';

const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarOverlay.classList.remove('show');
});



/*

This code sets up a click event listener on an element 
with a class of .toggle-nav, and another click event 
listener on an element with a class of .sidebar-close. 
When the .toggle-nav element is clicked, a sidebar 
overlay with a class of .sidebar-overlay is shown by 
adding the .show class to it. When the .sidebar-close 
element is clicked, the .show class is removed from 
the .sidebar-overlay element, hiding the sidebar.

This code is used to toggle the visibility of a 
sidebar menu, commonly found in website designs.

*/
