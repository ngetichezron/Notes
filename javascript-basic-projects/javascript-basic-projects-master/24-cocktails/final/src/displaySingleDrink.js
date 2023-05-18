import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const description = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
};
export default displayDrink;


/*

This is a JavaScript module that exports a single 
function called displayDrink. This function takes in 
an object representing data about a single drink, and 
updates the HTML of the page to display that drink's 
details.

The function first calls the hideLoading function to 
hide any loading indicator that might be displayed. 
It then extracts the necessary information from the 
data object using destructuring, including the drink's 
name, image, and instructions for preparation.

Next, the function creates a list of ingredients using 
an array of strings, which are the names of the drink's 
ingredients, provided in the data object. It also 
selects several HTML elements using the get function 
imported from the getElement.js module.

The function then updates the src attribute of the 
drink's image element with the image URL, sets the 
document's title to the drink's name, and updates the 
text content of the drink name and description elements 
with their respective information.

Finally, the function creates an unordered list of 
the drink's ingredients by mapping over the array of 
ingredient strings and creating a list item for each 
one. If an ingredient string is falsy, such as if it 
is undefined or an empty string, the function simply 
returns nothing for that list item. The list items are 
then joined together into a single string using the 
join method and set as the inner HTML of the ingredients 
element.

The displayDrink function is then exported as the 
default export of this module, so that it can be 
imported and used in other parts of the application.

*/