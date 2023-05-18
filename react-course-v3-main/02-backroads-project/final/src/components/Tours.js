import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
    </section>
  )
}
export default Tours




/*


These are the files that make up a React project. React is a JavaScript library for building user interfaces. The files are as follows:

    about.js: This file exports a functional component About. It displays information about the company, including an image, a title, and some text. It imports an image file called aboutImg and a component called Title.
    footer.js: This file exports a functional component Footer. It displays the footer of the website, including links to pages and social media accounts, as well as a copyright notice. It imports data from a file called data, and two components called PageLinks and SocialLink.
    hero.js: This file exports a functional component Hero. It displays the hero section of the website, including a banner with a title, some text, and a call-to-action button.
    navbar.js: This file exports a functional component Navbar. It displays the navbar of the website, including a logo, links to pages, and social media icons. It imports data from a file called data, and two components called PageLinks and SocialLink.
    pagelink.js: This file exports a functional component PageLink. It displays a single link, including the text and href attributes. It is used by the PageLinks component.
    pagelinks.js: This file exports a functional component PageLinks. It displays a list of links to pages. It imports data from a file called data, and a component called PageLink.
    service.js: This file exports a functional component Service. It displays a single service, including an icon, a title, and some text. It is used by the Services component.
    services.js: This file exports a functional component Services. It displays a list of services. It imports data from a file called data, and a component called Service.
    sociallink.js: This file exports a functional component SocialLink. It displays a single social media icon, including an icon and href attributes. It is used by the Navbar and Footer components.
    title.js: This file exports a functional component Title. It displays a title and subtitle. It is used by the About and Services components.

Overall, these files work together to create a website with a navbar, hero section, about section, services section, and footer. They use data from a data.js file to populate information about the company, including page links and social media accounts.


*/




/*

    about.js: This file exports a functional component called About. It contains JSX code that renders a section with an image and some text, including a title and a subtitle. It also imports an image and a Title component, which is used to display the title and subtitle.

    footer.js: This file exports a functional component called Footer. It renders the footer section of the web page and includes links to various pages of the website and social media profiles. It imports data about page links and social links from a separate file and uses that data to dynamically generate the links.

    hero.js: This file exports a functional component called Hero. It renders the hero section of the web page, which includes a banner with a title, some text, and a button. It's a simple component that doesn't rely on any external data or components.

    navbar.js: This file exports a functional component called Navbar. It renders the navigation bar of the website, which includes the logo, a button to toggle the mobile menu, links to various pages, and icons to social media profiles. It imports data about page links and social links from a separate file and uses that data to dynamically generate the links.

    pagelink.js: This file exports a functional component called PageLink. It's a simple component that renders a single link in the navigation bar or footer. It takes in two props: link, which contains the URL and text of the link, and itemClass, which specifies the CSS class to apply to the link.

    pagelinks.js: This file exports a functional component called PageLinks. It renders a list of links in the navigation bar or footer. It imports data about page links from a separate file and uses that data to dynamically generate the links. It also imports the PageLink component to render each individual link.

    service.js: This file exports a functional component called Service. It renders a single service offered by the website, including an icon, title, and text. It takes in three props: icon, which specifies the CSS class for the icon to display, title, which contains the title of the service, and text, which contains the description of the service.

    services.js: This file exports a functional component called Services. It renders a section of the web page that displays a list of services offered by the website. It imports data about services from a separate file and uses that data to dynamically generate the services. It also imports the Title and Service components to display the title and individual services.

    sociallink.js: This file exports a functional component called SocialLink. It renders a single social media icon and link in the navigation bar or footer. It takes in three props: itemClass, which specifies the CSS class to apply to the icon, href, which contains the URL of the social media profile, and icon, which specifies the CSS class for the icon to display.

    title.js: This file exports a functional component called Title. It renders a title and subtitle for a section of the website. It takes in two props: title, which contains the main title of the section, and subTitle, which contains a subtitle to accompany the title.


*/

/*



*/