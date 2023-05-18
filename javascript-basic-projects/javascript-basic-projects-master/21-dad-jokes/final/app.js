const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error(' error');
    }
    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();


/*

This JavaScript code retrieves a random dad joke from 
the website 'https://icanhazdadjoke.com/' using the 
Fetch API and displays it on a webpage.

The code first defines a constant url that holds the 
URL for the dad joke API endpoint. It then selects a 
button element with the class "btn" and an element 
with the class "result".

An event listener is added to the button element that 
listens for a click event. When the button is clicked, 
the fetchDadJoke() function is called.

The fetchDadJoke() function first sets the text content 
of the result element to "Loading...". It then uses the 
Fetch API to make a GET request to the url endpoint and 
includes headers specifying that it expects a JSON 
response and that the request is coming from a user 
agent called "learning app".

If the response is not OK (i.e. if it returns an error status), 
the function throws an error with a message of "error". 
If the response is OK, the function uses response.json() 
to extract the JSON data from the response.

The function then sets the text content of the result 
element to the "joke" property of the returned JSON data.

If an error is caught during the execution of the try 
block, the error message is logged to the console and 
the text content of the result element is set to 
"There was an error...".

Finally, the fetchDadJoke() function is called at the 
end of the code to retrieve a random dad joke when the 
page is first loaded.

*/