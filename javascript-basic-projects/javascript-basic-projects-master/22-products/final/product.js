const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading... </h4>';
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later </p>';
  }
};

const displayProduct = (product) => {
  // company, colors, description, name:title, price, image(url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();

  // colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${price / 100}</span>
          <div class="colors">
            ${colorsList}
            
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();


/*

This code appears to be part of an e-commerce website 
built with JavaScript, where users can view and purchase 
products.

The first code block fetches product data from an API 
and displays it on the webpage. The fetchProducts 
function fetches the data from the API, while the 
displayProducts function takes the returned data and 
displays it on the webpage.

The second code block fetches details of a single 
product from the API and displays it on the webpage. 
The fetchProduct function fetches the product data 
based on the query string in the URL, while the 
displayProduct function takes the returned data and 
displays it on the webpage.

Both blocks of code use the fetch function to make 
HTTP requests to the API and async/await to handle 
the returned promises. The try/catch blocks are used 
to handle errors that may occur during the request.

*/