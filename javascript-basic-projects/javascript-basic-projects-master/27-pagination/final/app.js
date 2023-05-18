import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'
const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0
let pages = []

const setupUI = () => {
  displayFollowers(pages[index])
  displayButtons(btnContainer, pages, index)
}

const init = async () => {
  const followers = await fetchFollowers()
  title.textContent = 'pagination'
  pages = paginate(followers)
  setupUI()
}

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }
  setupUI()
})

window.addEventListener('load', init)



/*

This code is a JavaScript program that implements 
pagination for a list of followers. It fetches 
followers from an external module called fetchFollowers, 
then uses the paginate function from another external 
module called paginate to split the followers into pages. 
The displayFollowers function is used to display the 
current page of followers, and the displayButtons 
function is used to display the pagination buttons.

When the user clicks on a pagination button, the index 
variable is updated to reflect the new current page, and 
the setupUI function is called to update the display 
with the new page of followers.

The code listens for a load event on the window object, 
which triggers the init function. The init function 
fetches the followers, sets the title of the page, and 
paginates the followers.

There is also an event listener attached to the 
btnContainer element, which listens for click events on 
the pagination buttons. When a button is clicked, the 
appropriate action is taken to update the display.

Overall, this code implements a basic pagination 
functionality for a list of followers.

*/