import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;



/*

The fetchProducts function in this module is responsible 
for fetching all products from the API endpoint 
specified in the utils.js module. Here is the code:

  import { allProductsUrl } from './utils.js';

  const fetchProducts = async () => {
    const response = await fetch(allProductsUrl).catch((err) => console.log(err));
    if (response) {
      return response.json();
    }
    return response;
  };

  export default fetchProducts;

The fetch function is used to make the request to the 
API endpoint. The catch block is used to handle any 
errors that may occur during the fetch operation. 
If the response is successful, the json method is 
called on the response object to parse the JSON data. 
The parsed data is then returned from the function. 
If the response was not successful, null is returned.

*/
