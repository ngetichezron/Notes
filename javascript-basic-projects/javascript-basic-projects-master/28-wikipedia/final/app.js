const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error"> please enter valid search term</div>';
    return;
  }
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  resultsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      resultsDOM.innerHTML =
        '<div class="error">no matching results. Please try again</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
  }
};

const renderResults = (list) => {
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join('');
  resultsDOM.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
};



/*

This is a JavaScript code snippet that retrieves 
Wikipedia search results and displays them on 
a web page.

The code starts by defining a constant named url 
that contains the URL of the Wikipedia API endpoint 
for searching. The URL includes various parameters, 
such as the number of search results to 
retrieve (srlimit=20), the response format (format=json), 
and the origin=* parameter, which allows cross-origin 
requests.

The next three lines of code select some DOM elements 
from the web page using the document.querySelector() 
method. The formDOM variable represents the HTML 
form element that the user submits to initiate a search. 
The inputDOM variable represents the HTML input element 
where the user enters their search query. The 
resultsDOM variable represents the HTML element where 
the search results will be displayed.

The code then attaches an event listener to the form 
element using the addEventListener() method. The event 
listener listens for the 'submit' event and prevents 
the default form submission behavior by calling 
e.preventDefault().

When the user submits the form, the event listener 
retrieves the value of the input element using the 
inputDOM.value property. If the input value is empty, 
the code displays an error message in the resultsDOM 
element using the innerHTML property and returns without 
performing a search.

If the input value is not empty, the fetchPages() 
function is called with the search query as its argument.

The fetchPages() function starts by displaying a 
loading indicator in the resultsDOM element by setting 
its innerHTML property to a loading HTML element. The 
function then uses the fetch() function to send a 
request to the Wikipedia API endpoint with the search 
query appended to the url constant.

The fetch() function returns a Promise that resolves 
to a Response object, which is parsed as JSON using 
the response.json() method. The resulting data object 
contains an array of search results, which are 
extracted using the data.query.search property.

If there are no search results, the function displays 
an error message in the resultsDOM element using the 
innerHTML property and returns without rendering any 
search results.

If there are search results, the renderResults() 
function is called with the array of search results 
as its argument.

The renderResults() function takes the array of search 
results and maps each item to an HTML card element. 
Each card element contains the title, snippet, and page 
ID of a search result, and is wrapped in an anchor tag 
that links to the corresponding Wikipedia page.

The resulting HTML card elements are joined together 
into a single string using the join() method, and 
inserted into the resultsDOM element using the 
innerHTML property. The innerHTML property replaces 
any existing content in the resultsDOM element with 
the new HTML content.


*/