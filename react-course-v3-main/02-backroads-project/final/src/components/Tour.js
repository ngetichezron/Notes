const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>
            {location}
          </p>
          <p>from ${cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  )
}
export default Tour


/*

This is a functional component called Tour that takes in several props: image, date, title, info, location, duration, and cost. It returns a JSX template that displays the tour details in a card format.

Inside the template, there is an article element with a class name of tour-card. This element contains two child elements, div elements with class names of tour-img-container and tour-info.

The tour-img-container div contains an img element that displays the tour image passed in as the image prop. It also contains a p element that displays the tour date passed in as the date prop.

The tour-info div contains the rest of the tour details. It has a div element with a class name of tour-title that contains an h4 element displaying the tour title passed in as the title prop. It also has a p element displaying the tour information passed in as the info prop.

The tour-footer div contains three p elements displaying the location, cost, and duration of the tour passed in as the location, cost, and duration props, respectively. The location is displayed with a font-awesome map icon.

Finally, the component is exported as the default export of the file, allowing it to be used in other parts of the application.

*/


/*

tours.js
This is a functional component in React that renders a list of tours using the Tour component. It imports the tours array from a file called data.js and maps over the array using the map method to create a new array of Tour components with the spread operator (...) to pass all the properties of each tour object as props to the Tour component. Each Tour component is given a unique key prop with the id property of each tour object.

The Title component is also imported and used to render a title and subtitle for the section. The featured-center class is applied to a div element to center the featured tours. Finally, the whole component is wrapped in a section element with an id of tours.

Overall, this component renders a section of the page with a list of featured tours, each rendered as a Tour component with their respective information displayed in the UI.

*/