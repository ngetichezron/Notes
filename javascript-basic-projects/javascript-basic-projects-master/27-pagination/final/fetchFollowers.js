const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default fetchFollowers


/*

This code exports a function called fetchFollowers that 
uses the fetch method to make an HTTP GET request to 
the GitHub API endpoint that returns the followers of a 
specific user (in this case, john-smilga). The per_page 
parameter is set to 100, which means that each API 
response will contain up to 100 followers.

The fetch method returns a promise that resolves to a 
Response object. We use the await keyword to wait for 
the promise to resolve, and then call the json method 
on the response object to extract the JSON data from 
the response body. This returns another promise, which 
we also wait for with the await keyword.

Finally, the function returns the JSON data as an 
array of follower objects.

Overall, this code defines a function that fetches 
follower data from the GitHub API and returns it as a 
JSON object.

*/







//////// global css /////////////////////////



/*
This block of CSS code defines fonts, variables, global 
styles, and some classes for the web page.

  The first section imports the Open Sans and Roboto 
  fonts from Google Fonts using @import.

  The second section defines variables using :root, 
  including primary and grey shades, white, red and 
  green shades, font families, transition, spacing, 
  radius, shadow, and width.

  The third section defines global styles 
  for * (all elements), body, ul, a, h1 to h4, and 
  p elements. For example, the body element sets the f
  ont family to var(--ff-secondary), which refers 
  to the font family variable defined in the variables 
  section. The ul element sets list-style-type to none 
  to remove bullet points for unordered lists. The h1 
  to h4 elements set font sizes, line heights, and 
  margins. The p element sets the color to 
  var(--clr-grey-5), which refers to the grey-5 
  variable defined in the variables section.

  The fourth section defines media queries for 
  screen width larger than 800px. The font sizes for 
  h1 to h4 and body are increased, and the line 
  heights are reduced.
  
  The fifth section defines global classes, 
  including section, section-center, and main. 
  The section class sets padding, and the section-center 
  class sets the width, margin, and max-width. 
  The main class sets the minimum height to the 
  viewport height, and centers the content using grid. 
  The media query in the section-center class adjusts 
  the width for screen width larger than 992px.

Overall, this CSS code provides a consistent and 
responsive styling for the web page, with well-defined 
fonts, colors, spacing, and layout.


*/