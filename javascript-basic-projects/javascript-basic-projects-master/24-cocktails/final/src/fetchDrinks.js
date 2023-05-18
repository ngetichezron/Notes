import { showLoading } from './toggleLoading.js';
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;


/*

This is a JavaScript module that exports a single 
function called fetchDrinks. This function takes a 
single argument, url, which is the URL of an API e
ndpoint that returns data about drinks.

The function begins by calling a function called 
showLoading, which presumably displays some kind of 
loading indicator to the user. It then uses the fetch 
function to make a GET request to the specified URL, 
and waits for the response to come back.

If the response comes back successfully, the function 
calls the json method on the response object to parse 
the response body as JSON data. It then returns the 
parsed data.

If an error occurs while fetching the data, the f
unction catches the error and logs it to the console.

Overall, this function is a simple wrapper around the 
fetch function that adds a loading indicator and 
handles errors in a basic way.

*/