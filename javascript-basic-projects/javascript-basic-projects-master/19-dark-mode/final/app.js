const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;


/*

This code adds an event listener to a button with the 
class 'btn', and when it is clicked it toggles 
the 'dark-theme' class on the root element of the 
HTML document. It then creates a string of HTML 
articles using the data from an array of objects 
called 'articles'. The properties of each object are 
used to fill in the content of the article, and the 
date property is formatted using the Moment.js library. 
Finally, the HTML string is added to an element on 
the page with the class 'articles' using the 
 innerHTML property.

*/