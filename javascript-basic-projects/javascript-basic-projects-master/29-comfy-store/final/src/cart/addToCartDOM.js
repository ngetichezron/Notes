import { formatPrice, getElement } from '../utils.js';
const cartItemsDOM = getElement('.cart-items');
const addToCartDOM = ({ id, name, price, image, amount }) => {
  const article = document.createElement('article');
  article.classList.add('cart-item');
  article.setAttribute('data-id', id);
  article.innerHTML = `
    <img src="${image}"
              class="cart-item-img"
              alt="${name}"
            />  
            <div>
              <h4 class="cart-item-name">${name}</h4>
              <p class="cart-item-price">${formatPrice(price)}</p>
              <button class="cart-item-remove-btn" data-id="${id}">remove</button>
            </div>
          
            <div>
              <button class="cart-item-increase-btn" data-id="${id}">
                <i class="fas fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease-btn" data-id="${id}">
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
  `;
  cartItemsDOM.appendChild(article);
};

export default addToCartDOM;


/*

The addToCartDOM function is used to dynamically 
create and append new cart items to the cart page. 
It takes an object containing information about the 
product to be added to the cart and uses that 
information to generate the HTML for a new cart item. 
The HTML is then appended to the .cart-items element 
on the page.

The generated HTML includes an image of the product, 
the product name, price, and buttons to remove the item, 
increase the quantity, and decrease the quantity. 
The buttons have data-id attributes set to the product 
id so that the corresponding item can be identified 
and updated in the cart.

*/
