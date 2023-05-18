import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};



/*

This code exports a function openCart that adds 
the show class to the cart overlay element, 
effectively displaying the cart. It also sets up 
event listeners for two buttons, toggleCartBtn and 
closeCartBtn, to toggle the visibility of the cart 
overlay by adding or removing the show class.

*/