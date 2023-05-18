import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;

/*

This code exports a function setupPrice that sets up a 
price filter for a given store of products. 
The function does the following:

  Gets DOM elements for the price input and price 
  value display using the getElement function from 
  the utils.js module.

  Calculates the maximum price for all products in 
  the store, rounds it up to the nearest hundred, 
  and sets it as the default value for the price input. 
  It also sets the minimum value to 0 and the maximum 
  value to the rounded-up maximum price.

  Adds an event listener to the price input that 
  updates the price value display and filters the 
  products in the store based on the input value. 
  The filter uses the filter method to create a 
  new array of products that have a price less than 
  or equal to the input value. It then calls the 
  display function from the displayProducts.js module 
  to display the filtered products in the DOM.
  
  If there are no products that match the filter, it 
  displays an error message.

Overall, this function adds a price filter to a product 
list page that allows users to filter products based 
on their price.

*/
