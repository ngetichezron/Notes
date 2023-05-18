const displayButtons = (container, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `<button class="page-btn ${
      activeIndex === pageIndex ? 'active-btn' : 'null '
    }" data-index="${pageIndex}">
${pageIndex + 1}
</button>`
  })
  btns.push(`<button class="next-btn">next</button>`)
  btns.unshift(`<button class="prev-btn">prev</button>`)
  container.innerHTML = btns.join('')
}

export default displayButtons



/*

This code exports a function called displayButtons that 
takes three arguments: container, pages, and activeIndex. 
The container argument is a reference to an HTML element 
that will contain the pagination buttons. The pages 
argument is an array of arrays, where each sub-array 
represents a page of items to be paginated. 
The activeIndex argument is the index of the currently 
active page.

The function starts by creating an array of buttons 
using the map function on the pages array. For 
each page, it creates a button element with a data-index 
attribute that is set to the index of the page in the 
pages array. The button's text content is set to the 
index of the page plus one, since page indexes start 
at zero but we want to display them starting from one. 
The class name of each button is set to either 
active-btn or null depending on whether the button 
represents the currently active page.

After creating the array of page buttons, the function 
appends a "next" button to the end of the array and a 
"prev" button to the beginning of the array. 
Finally, it sets the HTML content of the container 
element to the array of buttons joined together into 
a single string.

This function generates the HTML for the pagination 
buttons and sets it to the provided container element. 
The generated buttons include "next" and "prev" buttons 
in addition to the page buttons, and the active page is 
highlighted with a CSS class.

*/