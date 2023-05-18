const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('no element selected');
};

export default getElement;

/*

This is a simple utility function that takes a CSS 
selector string as its argument and returns the first 
DOM element that matches the selector. If no element is 
found, it throws an error. This function is useful for 
quickly accessing DOM elements in JavaScript code, 
especially when using modern DOM manipulation libraries 
like React or Vue.js.

*/
