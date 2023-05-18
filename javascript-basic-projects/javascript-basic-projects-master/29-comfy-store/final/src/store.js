import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };



/*

The store variable is a module-level variable that 
stores an array of products. The setupStore function 
is used to initialize the store with an array of 
products obtained from an API. It maps the properties 
of each product object to a new object with a simpler 
structure, and then sets the store variable to the 
resulting array.

The findProduct function takes an id parameter and 
uses the store variable to find the product object 
in the array with that id. It returns the matching 
product object, or undefined if no match is found.

*/