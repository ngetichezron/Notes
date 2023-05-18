import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';
const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);

  // display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;

/*

The showDrinks function is responsible for fetching 
drinks from the CocktailDB API using the fetchDrinks 
function and displaying them on the page using the 
displayDrinks function. If the drinks are successfully 
displayed, it sets up a click event listener on the 
section element to store the drink ID in the local 
storage using the setDrink function.

Here's the code for the setDrink function:

const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    const drink = e.target.closest('.cocktail');
    if (drink) {
      const id = drink.dataset.id;
      localStorage.setItem('drink', id);
    }
  });
};

This function sets up a click event listener on the 
section element, and when a user clicks on a drink, 
it gets the drink ID from the data-id attribute of 
the clicked drink element and stores it in the local 
storage with the key 'drink'. This ID can then be used 
to display the details of the selected drink on another 
page.

*/
