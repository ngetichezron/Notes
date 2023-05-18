import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    // hide loading
    hideLoading();
    title.textContent = 'sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  hideLoading();
  title.textContent = '';
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;


/*

This is a JavaScript module that exports a function 
called displayDrinks. The module imports two functions 
from other modules: get and hideLoading. get is likely 
a utility function that retrieves a single DOM element 
using a CSS selector. hideLoading likely hides a 
loading spinner or message that is displayed on the 
web page while data is being fetched.

The displayDrinks function takes an object as its 
parameter, which is expected to have a drinks property 
containing an array of drink objects retrieved from an 
API. The function begins by retrieving the section and 
title elements from the web page using the get function.

If the drinks array is falsy (i.e. null, undefined, 0, 
false, or an empty string), the function hides the 
loading spinner using the hideLoading function, sets 
the title text content to "sorry, no drinks matched 
your search", clears the inner HTML of the section 
element, and returns from the function.

If the drinks array is truthy, the function maps over 
the array to create a new array of HTML strings for 
each drink object. The HTML strings contain an anchor 
element with a link to a separate drink.html page, an 
article element with a data-id attribute set to the 
drink's ID, an img element with the drink's thumbnail 
image URL, and an h3 element with the drink's name.

The new array of HTML strings is then joined into a 
single string with no separator between the elements. 
The loading spinner is then hidden using the 
hideLoading function, the title text content is set 
to an empty string, and the section's inner HTML is set 
to the new HTML string. Finally, the function returns 
the section element.

*/