export default function removeActive(items) {
  items.forEach((btn) => btn.classList.remove('active'));
}

/*

The removeActive function is used to remove the active 
class from a list of DOM elements. It takes an array 
of DOM elements as input and uses the forEach method 
to remove the active class from each element. Here's 
the code:

  export default function removeActive(items) {
    items.forEach((btn) => btn.classList.remove('active'));
  }

This function can be used in a variety of situations, 
such as when you have a list of buttons and you want 
to remove the active class from all of them except for 
the one that was just clicked.

*/