import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});

/*
There's a small issue in the code snippet. The event 
listener should listen for the submit event instead of 
the keyup event. Here's the corrected code:

form.addEventListener('submit', function (e) {})

With this change, the search form will be submitted 
when the user presses the enter key or clicks the 
submit button, and the presentDrinks function will be 
called with the search query.


*/