import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});



/*

This is a JavaScript code snippet that imports a module 
named presentDrinks and a file named searchForm, and 
sets a constant URL to a URL string. It then adds an 
event listener to the DOMContentLoaded event that 
calls the presentDrinks() function with the URL 
constant as its argument.

The presentDrinks function is expected to be defined 
in a separate module that is imported using the import 
statement. This function likely uses the fetch() method 
to retrieve data from the Cocktail DB API at the 
specified URL, and then processes and displays the 
data on a web page.

The searchForm file likely contains code that creates 
an HTML form and adds event listeners to the form's 
input fields and buttons. This code likely listens for 
user input, uses the input to modify the URL constant 
to include search terms, and then calls the 
presentDrinks() function again with the modified URL 
as its argument to display search results.

The window.addEventListener() method is used to 
add an event listener to the DOMContentLoaded event. 
This event fires when the web page has finished loading 
and is ready to be manipulated with JavaScript. 
When the event fires, the presentDrinks() function 
is called with the URL constant as its argument to 
display a list of drinks on the web page.


*/