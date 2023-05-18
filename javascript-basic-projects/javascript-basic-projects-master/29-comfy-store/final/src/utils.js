//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

const allProductsUrl = 'https://course-api.com/javascript-store-products'
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://course-api.com/javascript-store-single-product'

const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return formattedPrice
}

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item)
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item))
  } else {
    storageItem = []
  }
  return storageItem
}

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item))
}

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
}


/*

The code defines several utility functions and exports 
them:

  allProductsUrl and singleProductUrl are constants 
  that hold the URLs for fetching all products and a 
  single product, respectively.

  getElement is a function that accepts a CSS 
  selector as an argument and returns the first 
  element that matches the selector. If no element 
  is found, it throws an error.

  formatPrice is a function that accepts a price 
  value in cents and returns a formatted price 
  string in US dollars.

  getStorageItem is a function that accepts a 
  string as an argument and returns the value of the 
  corresponding item in the local storage. If the 
  item is not found, it returns an empty array.

  setStorageItem is a function that accepts a name 
  string and an item as arguments and sets the value 
  of the corresponding item in the local storage to 
  the provided item, after converting it to a 
  JSON string.

*/
