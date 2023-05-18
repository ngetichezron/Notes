import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  let companies = ['all', ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement('.companies');
  companiesDOM.innerHTML = companies
    .map((company) => {
      return ` <button class="company-btn">${company}</button>`;
    })
    .join('');
  companiesDOM.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      display(newStore, getElement('.products-container'), true);
    }
  });
};

export default setupCompanies;

/*

This module exports a function setupCompanies that 
takes in a store parameter, which is an array of 
products. It then extracts the unique company names 
from the products array, adds an 'all' button 
to the top, and creates a button for each unique company. 
It appends these buttons to the DOM element with the 
class name 'companies'. When a button is clicked, 
it filters the products based on the company name 
and displays the filtered products using the display 
function from displayProducts.js. If the 'all' button 
is clicked, it displays all products

*/



/*

Sure, here is a more detailed explanation of the code:

The setupCompanies function takes a store argument 
which is an array of products. It first creates an 
array of unique company names by using the map and 
Set methods. The map method loops through each product 
in the store array and returns an array of company names. 
The Set method creates a new set of unique values from 
the array of company names.

Next, the function gets a reference to the HTML 
element with the class name companies using the 
getElement utility function from utils.js. This 
element will be used to display the company buttons.

The function then generates the company buttons HTML 
by mapping through the companies array and creating a 
button for each company. The join method is used to 
concatenate the buttons into a single string.

The function adds an event listener to the 
companiesDOM element, which listens for click 
events on its child elements. When a button is 
clicked, the function first checks if the button has 
the class name company-btn. If it does, it filters 
the store array by the company name of the clicked 
button. If the button has the text content all, 
the original store array is used.

Finally, the display function is called with the 
filtered store array and a reference to the HTML 
element with the class name products-container. 
The true argument passed as the third parameter 
tells the display function to clear the contents 
of the products-container before displaying the 
new products. The display function is responsible 
for rendering the products on the page.

*/