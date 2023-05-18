const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    // JSON.stringify JSON.parse
    localStorage.setItem('drink', id);
  });
};

export default setDrink;




/*

setDrink is a function that adds an event listener to 
the provided section, which is a container of drinks. 
When a drink is clicked, it retrieves the drink's ID 
and stores it in the browser's local storage.

This is useful for when the user wants to view more 
details about a particular drink. By storing the drink 
ID in local storage, the drink details can be retrieved 
and displayed on a separate page, such as the drink.html 
page.

*/
