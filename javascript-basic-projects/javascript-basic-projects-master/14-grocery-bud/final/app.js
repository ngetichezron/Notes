// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}
// set backt to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}


/*

This JavaScript code is a simple grocery list application 
that allows the user to add, edit, and remove items.

Here is a breakdown of the code:

  Select items:
  The first few lines of the code declare variables 
  and select items from the HTML file using various 
  methods like querySelector, getElementById, and 
  createAttribute.

  Event listeners:
  The code sets up three event listeners using 
  addEventListener:

  form.addEventListener("submit", addItem);: when 
  the form is submitted, it calls the addItem 
  function.
  clearBtn.addEventListener("click", clearItems);: 
  when the clear button is clicked, it calls the 
  clearItems function.
  window.addEventListener("DOMContentLoaded", setupItems);: 
  when the page is loaded, it calls the setupItems 
  function.

  Functions:
  The code defines several functions:

  addItem: This function adds an item to the grocery 
  list. It checks if the input value is not empty 
  and if the edit flag is false. If it is true, it 
  edits the existing item with the new input value. 
  If the input value is empty, it displays a danger 
  alert. Otherwise, it creates a new grocery item 
  with the input value, assigns it an ID, adds event 
  listeners to the delete and edit buttons, appends 
  it to the list, displays a success alert, and sets 
  back to default.


  displayAlert: This function displays an alert 
  message with the given text and action (success or danger). 
  It adds and removes a CSS class to change the 
  alert color.


  clearItems: This function clears all grocery 
  items from the list, removes the "show-container" 
  CSS class, displays a danger alert, and sets back 
  to default. It also removes the grocery list from 
  local storage.


  deleteItem: This function deletes the grocery 
  item that the user selects by clicking the delete 
  button. It gets the parent element of the delete 
  button, removes it from the list, displays a danger 
  alert, sets back to default, and removes the grocery 
  item from local storage.


  editItem: This function allows the user to edit an 
  existing grocery item. It gets the parent element 
  of the edit button, sets the edit element to the 
  title of the grocery item, sets the value of the 
  input to the edit element, sets the edit flag to 
  true, sets the edit ID to the grocery item's ID, 
  changes the submit button text to "edit".


  setBackToDefault: This function resets the input 
  value, edit flag, edit ID, and submit button text 
  to default values.


  addToLocalStorage: This function adds a grocery 
  item to local storage by creating an object with 
  the item's ID and value, getting the current list 
  of items from local storage, pushing the new item 
  to the list, and setting the list back to local 
  storage.


  getLocalStorage: This function gets the list of 
  grocery items from local storage, or returns an 
  empty array if the list does not exist.


  removeFromLocalStorage: This function removes a 
  grocery item from local storage by getting the 
  current list of items, filtering out the item with 
  the given ID, and setting the list back to local 
  storage.


  editLocalStorage: This function edits a grocery item 
  in local storage by getting the current list of 
  items, finding the item with the given ID, setting 
  its value to the new value, and setting the list 
  back to local storage.


  setupItems: This function sets up the grocery list 
  by getting the list of items from local storage, 
  creating a new grocery item for each item in the 
  list using createListItem, adding the "show-container" 
  CSS class if there are any items in the list, 
  and setting back to default.


  createListItem: This function creates a new grocery 
  item by creating an article

*/
