// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);


/*

This code imports several modules and sets up the 
initialization function for the website.

The first set of imports include toggleSidebar.js, 
toggleCart.js, and setupCart.js, which are responsible 
for toggling the sidebar and cart menus, as well as 
setting up the cart with its items.

The next set of imports include fetchProducts.js, 
store.js, displayProducts.js, and utils.js. 
fetchProducts.js fetches product data from an 
API endpoint, store.js sets up a store of all 
products, displayProducts.js is responsible for 
displaying products on the website, and utils.js c
ontains utility functions.

The init function is responsible for initializing 
the website by fetching products, setting up the store, 
and displaying featured products. The function is 
called when the DOMContentLoaded event is fired on 
the window object.

*/