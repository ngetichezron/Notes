const UserContainer = ({ user, logout }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};
export default UserContainer;


/*

These three files are related to building a basic navbar and user container. Here's what's happening in each file:

    navbar.jsx:
    The file imports the useState hook from React and NavLinks component from './NavLinks'. The Navbar component is a function component that renders a navigation bar with a title and links, and it passes down user and logout functions as props to the NavLinks component. When logout is clicked, it sets the user state to null. The Navbar component is exported as default.

    navlinks.jsx:
    The file imports the UserContainer component from './UserContainer'. The NavLinks component is a function component that renders a navigation container with links and a user container, which is obtained by rendering the UserContainer component and passing the user and logout props to it. The NavLinks component is exported as default.

    usercontainer.jsx:
    The UserContainer component is a function component that renders a user container with a greeting and a logout button. If there is a user, it greets the user with their name, and when the logout button is clicked, it calls the logout function that was passed as a prop from the parent component. If there is no user, it displays a message asking the user to login. The UserContainer component is exported as default.


*/