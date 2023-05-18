const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

//-----------------------------------------------------------------------------------------    
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
//-----------------------------------------------------------------------------------------
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}



// This JavaScript code defines a function called displayMenuItems 
// that takes an array of objects as its argument.

// The function uses the map method on the input array 
// to create a new array called displayMenu. The map method 
// iterates over each object in the input array and applies 
// the function provided as its argument to each object. 
// In this case, the function returns a string that 
// represents an HTML article element with the values of 
// the current object's properties interpolated into the 
// appropriate places.

// The string includes an img tag that displays an image 
// with the src attribute set to the value of the current 
// object's img property and the alt attribute set to the 
// value of the title property. It also includes a div 
// element with a class of item-info that contains a header 
// element with the title and price properties of the 
// current object interpolated into h4 tags, and a p 
// element with the value of the desc property interpolated 
// into it.

// After the map method has finished iterating over the 
// input array, the function returns the displayMenu array 
// of HTML strings, which can be used to render the menu 
// items on a web page.



/*
This is a JavaScript code that creates a restaurant 
menu and allows users to filter the menu items by 
category using buttons.

The menu data is an array of objects, with each object 
representing a menu item. Each object has properties 
like id, title, category, price, img, and desc.

The code starts by selecting the parent element where 
the menu items will be displayed (sectionCenter) and 
the parent element where the category filter buttons 
will be displayed (btnContainer). Then, it adds an 
event listener to the window object, which calls two f
unctions when the page loads: diplayMenuItems and 
displayMenuButtons.

The diplayMenuItems function takes an array of menu 
items as an argument and creates HTML elements to 
display each menu item. It uses the map method to loop 
through the menu items array and create a new array of 
HTML elements, one for each menu item. Each HTML element 
is a string containing the HTML code for an article 
element with a title, image, description, and price. 
Finally, it joins the array of HTML elements into a 
single string and sets the innerHTML property of the 
sectionCenter element to this string.

The displayMenuButtons function creates a filter 
button for each category of menu items. It uses the 
reduce method to loop through the menu items array and 
create a new array of category names without duplicates. 
It then loops through this array of categories and 
creates a string of HTML buttons, one for each category. 
It also sets the innerHTML property of the btnContainer 
element to this string. Finally, it adds event listeners 
to each filter button, so when a button is clicked, 
it filters the menu items based on the category of the 
button. If the button clicked is the "all" button, it 
displays all menu items. If it's a category button, it 
displays only the menu items that have that category.

*/