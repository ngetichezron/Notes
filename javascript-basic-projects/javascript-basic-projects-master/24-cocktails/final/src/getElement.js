const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};

export default getElement;

/*

This module exports a function called getElement 
that accepts a CSS selector as an argument and 
attempts to find the first element in the document 
that matches the selector using the 
document.querySelector method. If such an element 
is found, it is returned. If not, the function 
throws an error with the message "no element selected".

The function is useful for obtaining references to 
DOM elements in JavaScript code. It allows you to 
write concise and readable code by eliminating the 
need to repeatedly call document.querySelector and 
store the result in a variable. Instead, you can 
simply call getElement with the selector string 
wherever you need to access the corresponding element.

Here is an example usage of the getElement function:

  import getElement from './getElement.js';

  const myButton = getElement('.my-button');
  myButton.addEventListener('click', () => {
    // Handle button click event
  });

*/
