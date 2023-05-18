import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newStore, getElement('.products-container'), true);
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;


/*

This code exports a function setupSearch that takes in 
an array of products called store as a parameter.

The function first selects the search form and input 
element from the DOM using the getElement function 
from the utils.js module.

It then adds an event listener to the form that listens 
for keyup events.

Whenever the user types something into the search input, 
the function gets the input value and stores it in the 
value variable.

If the value is not empty, the function filters the 
store array using the filter method to create a new array called newStore. It loops through the store array and compares the name property of each product to the value entered by the user. If the name starts with the value, it adds that product to the newStore array.

Next, the display function from the displayProducts.js 
module is called with the newStore array 
and the .products-container element to display the 
filtered products.

If the newStore array is empty, the function displays a 
message indicating that no products matched the search.

If the value is empty, the function displays all the 
products by calling the display function with the store 
array and the .products-container element.

*/
