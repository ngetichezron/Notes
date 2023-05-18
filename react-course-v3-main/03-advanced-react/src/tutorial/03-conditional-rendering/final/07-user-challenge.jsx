import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: 'vegan food truck' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;


/*

    multiplereturnsbasics.jsx: This code demonstrates how to use conditional rendering to show a loading indicator until data has been fetched. It uses the useState and useEffect hooks to manage the loading state and to fetch the data. The if statement checks if the data is still loading, and if it is, it shows a loading message. Otherwise, it shows the main content of the app.

    multiplereturnsfetchdata.jsx: This code is similar to the previous one, but it also handles errors that may occur while fetching the data. It uses the useState and useEffect hooks to manage the loading state, error state, and fetched data. The if statements check whether the data is still loading or if an error occurred while fetching it, and show the corresponding message. If there was no error and the data was fetched successfully, it shows the user's avatar, name, company, and bio.

    hooksrule.jsx: This code shows that you can't use hooks conditionally, i.e., inside an if statement. The useState hook is only used when the condition variable is true, which is not allowed. Instead, the if statement should be used inside the component's return statement.

    shortcirtcuitoverview.jsx: This code shows how to use short-circuit evaluation to render content conditionally. It uses the useState hook to manage two variables: text, which is falsy, and name, which is truthy. The || operator is used to show a default value if text is falsy, and the && operator is used to show a value only if text is truthy. Similarly, the || operator is used to show name if it is truthy, and the && operator is used to show a value only if name is truthy.

    shortcircuitexamples.jsx: This code provides some more examples of using short-circuit evaluation to render content conditionally. It uses the useState hook to manage two variables: text, which is falsy, and name, which is truthy. It also manages a user object, an isEditing boolean, and a custom SomeComponent. The code shows how to render content conditionally based on whether a variable is truthy or falsy, and how to use the ternary operator to toggle between different elements or components.

    togglechallenge.jsx: This code is a challenge that requires you to implement a toggle button that shows or hides an alert message. It uses the useState hook to manage the showAlert boolean variable. The onClick event handler for the button toggles the value of showAlert. The if statement inside the component's return statement shows the alert message only if showAlert is true.

*/