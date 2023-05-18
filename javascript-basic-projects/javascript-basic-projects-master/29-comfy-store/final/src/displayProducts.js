import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element, filters) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const { id, name, image, price } = product;
      return ` <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
           
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article> `;
    })
    .join('');

  if (filters) return;

  element.addEventListener('click', function (e) {
    const parent = e.target.parentElement;
    if (parent.classList.contains('product-cart-btn')) {
      addToCart(parent.dataset.id);
    }
  });
};

export default display;



/*

The display function takes in an array of products, 
an element where the products will be displayed, and 
an optional filters parameter. It then generates HTML 
markup for each product and adds event listeners to 
the element to handle add-to-cart button clicks. The 
formatPrice function from the utils module is used to 
format the price of each product.

Here is a breakdown of the function:

    The element is cleared by setting its innerHTML to 
    an empty string.

    The products array is mapped over, and for each 
    product, an article element is generated with the 
    following structure:

    <article class="product">
      <div class="product-container">
        <img src="${image}" class="product-img img" alt="${name}" />
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>

    The resulting array of HTML strings is joined 
    together with an empty string to form a single 
    HTML string.

    The resulting HTML string is set as the innerHTML 
    of the element.

    If the filters parameter is truthy, the function 
    returns early.

    Otherwise, an event listener is added to the 
    element to handle add-to-cart button clicks. When 
    a button is clicked, the data-id attribute is 
    retrieved, and the addToCart function from the 
    cart/setupCart.js module is called with the 
    product ID as an argument.

*/
