const container = document.querySelector('.container')

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person
      return `
       <article class='card'>
         <img src="${avatar_url}" alt='person' />
           <h4>${login}</h4>
         <a href="${html_url}" class="btn">view profile</a>
       </article>
       `
    })
    .join('')
  container.innerHTML = newFollowers
}

export default display


/*

This code exports a function called display that takes 
an array of follower objects as its argument. 
The function first uses the map method to transform 
the array of followers into an array of HTML article 
elements. For each follower, it extracts the avatar_url, 
login, and html_url properties from the object and 
interpolates them into an HTML string that creates an 
article element with an image, a header, and a link.

The function then calls the join method on the 
resulting array of article elements to create a single 
string of HTML. Finally, it sets the innerHTML property 
of the container element to the new HTML string.

Overall, this code generates HTML for each follower 
in the input array and sets the innerHTML property of 
the container element to display the follower cards.

*/