import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunction;



/*

    codeexample.js:

This file is a simple example of a functional React component using the useState hook to manage state. It defines a function CodeExample which returns a div containing a header displaying the value of the state variable value and a button. Clicking the button increments the value state by 1. The sayHello function logs a message to the console when the component renders.

    useeffectbasics.jsx:

This file is an example of using the useEffect hook in a functional React component. It defines a function UseEffectBasics which returns a div containing a header displaying the value of the state variable value and a button. Clicking the button increments the value state by 1. The sayHello function logs a message to the console when the component renders. The component has two useEffect hooks: the first one runs every time the value state changes and logs a message to the console. The second one runs only once when the component mounts (due to the empty dependency array []), and also logs a message to the console.

    multipleeffects.jsx:

This file is an example of using multiple useEffect hooks in a functional React component. It defines a function MultipleEffects which returns a div containing two headers displaying the values of the state variables value and secondValue, respectively, and two buttons. Clicking each button increments the corresponding state variable by 1. The component has two useEffect hooks: the first one runs every time the value state changes and logs a message to the console. The second one runs every time the secondValue state changes and logs a different message to the console.

    fetchdata.jsx:

This file is an example of fetching data from an API using the useEffect and useState hooks in a functional React component. It defines a function FetchData which returns a section containing a header and an unordered list of items. The component fetches a list of GitHub users from the API, and updates the users state variable with the retrieved data. The component uses the useCallback hook to memoize the fetchData function, and the useEffect hook to call the fetchData function when the component mounts.

    cleanupfunction.jsx:

This file is an example of using the useEffect hook to create and clean up a side effect in a functional React component. It defines a function CleanupFunction which returns a button and a conditional rendering of the RandomComponent function. The RandomComponent function creates an interval that logs a message to the console every second when the component mounts, and clears the interval when the component unmounts. The interval is created only once due to the empty dependency array [] passed as the second argument to the useEffect hook.

*/
