const url = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
  productsDOM.innerHTML = ` <div class="products-container">
         ${productList}
          
        </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();

/*

This is a JavaScript code that fetches product data 
from an external API and displays it on a webpage. 
Here's a breakdown of the code:

  The url variable stores the URL of the API that will 
  be used to fetch the product data.

  The productsDOM variable stores a reference to the 
  DOM element where the product data will be displayed.

  The fetchProducts function is an asynchronous 
  function that fetches the product data from the API 
  using the fetch method. If the data is fetched 
  successfully, it is returned as a JSON object. 
  If there is an error, an error message is displayed 
  on the webpage.

  The displayProducts function takes the list of 
  products as a parameter and generates HTML markup 
  for each product using template literals. The HTML 
  markup is then added to the productsDOM element.

  The start function is an asynchronous function that 
  calls the fetchProducts function to fetch the product 
  data and then calls the displayProducts function to 
  display the data on the webpage.
  
  Finally, the start function is called to start the 
  process of fetching and displaying the product data.

Overall, this code is a simple example of how to 
fetch data from an external API and display it on a 
webpage using JavaScript.

*/
