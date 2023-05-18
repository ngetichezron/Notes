let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join('');
};

displayProducts();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// console.log(
//   products.filter((product) => {
//     return product.title.toLowerCase().includes('');
//   })
// );

// Filter Buttons

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  // console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});


/*

This code defines a product filter that allows users 
to search for products by name and filter by company. 
The products are displayed in a container using HTML 
articles with images, names, and prices.

The filteredProducts variable is initialized as a 
copy of the products array, and the productsContainer 
is selected using the querySelector method.

The displayProducts function is defined to display the 
products. If no products match the search criteria, it 
displays a message saying so. Otherwise, it uses the 
map method to create a new array of HTML articles, 
using the id, title, image, and price properties of 
each product. The join method is then used to convert 
this array to a string, which is set as the inner HTML 
of the productsContainer.

The displayProducts function is called initially to 
display all the products.

The form and searchInput variables are used to select 
the search input and form elements. An event listener 
is added to the form that listens for keyup events. 
When a keyup event is detected, the inputValue variable 
is set to the value of the search input. The 
filteredProducts array is then updated using the 
filter method, which returns a new array of products 
that have a title property that includes the inputValue 
string, ignoring case. Finally, the displayProducts 
function is called to display the filtered products.

The companiesDOM variable is used to select the 
element that will contain the filter buttons. The 
displayButtons function is defined to display the 
filter buttons. It creates an array of unique company 
names using the Set constructor and the map method, 
and adds an all button to the beginning of the array. 
The map method is used again to create an array of 
HTML buttons, one for each company. The join method is 
used to convert this array to a string, which is set 
as the inner HTML of the companiesDOM element.

The displayButtons function is called initially to 
display the filter buttons.

An event listener is added to the companiesDOM element 
that listens for click events. When a click event is 
detected on a button with the class company-btn, the 
element that was clicked is assigned to the el variable. 
If the data-id attribute of the clicked element is all, 
the filteredProducts array is set to a copy of the 
products array. Otherwise, the filteredProducts array 
is updated using the filter method, which returns a 
new array of products that have a company property that 
matches the data-id attribute of the clicked element. 
Finally, the value of the search input is set to an 
empty string, and the displayProducts function is called 
to display the filtered products.

*/