import { useContext } from 'react';
import { NavbarContext } from './Navbar';
import { useAppContext } from './Navbar';
const UserContainer = () => {
  const { user, logout } = useAppContext();
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

The above code contains three different JSX files that work together to create a simple Navbar with login/logout functionality using the React Context API.
navbar.jsx

The navbar.jsx file contains the main component that creates the Navbar and sets up the Context Provider. The NavbarContext is created using the createContext() method from the React library. This is used to pass data down the component tree. The useAppContext() custom hook is created using useContext() method from React, to access the context data in child components.

Inside the Navbar component, useState() hook is used to create a user state with a default value of { name: 'bob' }. The logout() function is created to set the user state to null. The Navbar is created with the nav tag and the NavbarContext.Provider is used to wrap the child components of the Navbar.
navlinks.jsx

The navlinks.jsx file contains the NavLinks component which is used inside the Navbar component to create the Navbar links. It is a simple component that returns an unordered list containing two list items with links to "home" and "about" pages. It also renders the UserContainer component.
usercontainer.jsx

The usercontainer.jsx file contains the UserContainer component, which is rendered by the NavLinks component. The useAppContext() custom hook is used to access the user and logout values from the NavbarContext.Provider created in navbar.jsx. The component returns a message that greets the user and a "logout" button. If the user state is null, it renders a message prompting the user to login.

Together, these three components create a simple Navbar with login/logout functionality using the React Context API.


*/