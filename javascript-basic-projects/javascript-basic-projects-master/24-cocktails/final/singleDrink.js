import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener('DOMContentLoaded', presentDrink);



/*

This is a JavaScript code snippet that fetches and 
displays information about a single drink from 
The Cocktail DB API.

The code starts by importing two modules named 
fetchDrinks and displaySingleDrink using the import 
statement. The fetchDrinks module exports a 
function that fetches a single drink from the API, 
and the displaySingleDrink module exports a function 
that displays information about the drink on a web page.

The code defines a function named presentDrink that is 
marked as async. This function retrieves the ID of a 
drink from local storage using the
localStorage.getItem() method. If there is 
no ID in local storage, the function redirects 
the user to the index page by setting the 
window.location property to 'index.html'.

If there is an ID in local storage, the function 
uses the fetchDrinks() function to fetch information 
about the drink from the API. The fetchDrinks() 
function takes a URL as its argument and returns a 
Promise that resolves to a JSON object containing 
information about the drink.

The await keyword is used to wait for the 
fetchDrinks() Promise to resolve before continuing 
execution of the code. The resulting JSON object is 
stored in a variable named drink.

Finally, the displayDrink() function is called with 
the drink object as its argument. The displayDrink() 
function is responsible for rendering information about the drink on a web page.

The window.addEventListener() method is used to add 
an event listener to the DOMContentLoaded event. This 
event fires when the web page has finished loading and 
is ready to be manipulated with JavaScript. When the 
event fires, the presentDrink() function is called to 
retrieve and display information about the drink.

*/