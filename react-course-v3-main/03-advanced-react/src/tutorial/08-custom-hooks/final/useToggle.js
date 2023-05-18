import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };

  return { show, toggle };
};

export default useToggle;


/*

The code snippets provided are custom hooks and components that demonstrate the use of these hooks.

toggle.jsx defines a component ToggleExample that uses a custom hook called useToggle. The useToggle hook is responsible for toggling a boolean value that is used to show/hide some content in the ToggleExample component.

fetchdata.jsx is another component that uses a custom hook called useFetch to fetch data from an API endpoint. The useFetch hook takes a URL as input and returns an object with three properties: isLoading, isError, and data. These properties are used in the FetchData component to conditionally render loading, error, or data content.

usefetch.js is the implementation of the useFetch custom hook. It sets up state variables to handle loading, error, and data. It also uses useEffect to fetch data from the provided URL and update the state variables accordingly.

usefetchperson.js is another custom hook that fetches user data from an API endpoint. It is similar to useFetch but returns a user object instead of generic data.

usetoggle.js is the implementation of the useToggle custom hook used in toggle.jsx. It sets up state variables to handle toggling and returns an object with the current boolean value and a function to toggle it.


*/