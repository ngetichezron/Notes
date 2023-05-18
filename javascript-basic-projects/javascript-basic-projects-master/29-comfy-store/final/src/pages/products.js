// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { store, setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
// import fetch products
import fetchProducts from '../fetchProducts.js';

const init = async () => {
  const loading = getElement('.page-loading');
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement('.products-container'));

  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);
  loading.style.display = 'none';
};

init();



/*

This code is responsible for initializing the products 
page. It imports various modules and functions needed 
for setting up the page, including toggling the sidebar 
and cart, setting up filters, displaying products, and 
fetching products.

The init function is an asynchronous function that sets 
up the page by first checking if the store array has any 
products. If the store array is empty, it fetches the 
products from an external source using the fetchProducts 
function and then sets up the store using the setupStore 
function. Then, it displays the products by calling the 
display function with the store array and the container 
element for the products.

After setting up the store and displaying the products, 
it sets up the search, company, and price filters by 
calling the corresponding setup functions. Finally, it 
hides the page loading spinner by setting its display 
style property to 'none'.

The init function is called at the end of the module, 
ensuring that it is executed when the module is imported.

*/