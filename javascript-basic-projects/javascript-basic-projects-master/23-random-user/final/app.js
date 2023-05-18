import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);


/*

This is a simple JavaScript file that imports three 
functions from three separate modules and uses them 
to display a user's information when the page loads 
and when a button is clicked.

The get function is imported from the getElement.js 
module and is used to select the button element.

The getUser function is imported from the fetchUser.js 
module and is used to fetch user data from an API 
endpoint.

The displayUser function is imported from 
the displayUser.js module and is used to display the 
user's data on the page.

The showUser function is defined to asynchronously 
fetch a user's data using getUser, and then display the 
data using displayUser.

An event listener is added to the window object to 
call showUser when the page loads, and another event 
listener is added to the btn element to call showUser 
when the button is clicked.

*/