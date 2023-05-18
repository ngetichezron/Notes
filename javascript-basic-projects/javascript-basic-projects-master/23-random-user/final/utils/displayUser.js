import get from './getElement.js';
import removeActive from './removeActive.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];
const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  removeActive(btns);
  btns[0].classList.remove('active');
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};

export default displayUser;


/*

This is a module that exports a single function 
displayUser. The function takes an argument person, 
which is an object representing a user. The function 
then updates the user interface with information about 
the user.

The function first gets references to various elements 
on the page, such as the user's image, title, and value, 
as well as an array of buttons.

Then the function updates the user interface with the 
user's image and name, and sets the title 
to "My name is". It also removes the "active" class 
from all the buttons.

Next, the function sets up event listeners for each 
button in the array. When a button is clicked, the 
function updates the title 
to "My {label} is", where {label} is the label 
associated with the button (e.g. "email", "age", etc.). 
It also updates the value with the corresponding value 
from the person object, and sets the clicked button to 
be active while removing the "active" class from the 
other buttons.

*/