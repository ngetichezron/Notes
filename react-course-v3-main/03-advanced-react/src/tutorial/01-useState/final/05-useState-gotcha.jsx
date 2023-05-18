import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;


/*

    errorexample.jsx:
    This file defines a component ErrorExample that demonstrates an error commonly made when trying to modify a variable directly inside a function component. The component has a local variable count initialized to 0. When the button is clicked, the handleClick function is called, which increments count and logs the new value to the console. However, modifying a local variable like count directly inside a function component does not trigger a re-render, so the value displayed on the page does not change. This is why this file is named errorexample.jsx.

    usestatebasics.jsx:
    This file defines a component UseStateBasics that uses the useState hook to maintain a state variable count. The component renders a heading that displays the current count and a button that, when clicked, increments the count. The useState hook returns an array with two elements: the current state value (count) and a function to update the state (setCount). The handleClick function uses the setCount function to update the count state variable, triggering a re-render of the component with the new count value displayed.

    usestatearray.jsx:
    This file defines a component UseStateArray that uses the useState hook to maintain a state variable people, which is initialized to an array of objects containing data for people. The component renders each person's name and a "remove" button for each person in the array. When a "remove" button is clicked, the removeItem function is called, which removes the corresponding person object from the people array and updates the state with the new array, triggering a re-render with the updated list displayed. There is also a "clear items" button that sets the people state variable to an empty array, clearing the displayed list.

    usestateobject.jsx:
    This file defines a component UseStateObject that uses the useState hook to maintain a state variable person, which is initialized to an object containing data for a person. The component renders the person's name, age, and hobby, and a button that, when clicked, updates the person state variable with new data for a different person named "John" with a different age and hobby. There are examples of two incorrect ways to update the state variable commented out in the code, which do not preserve the existing values of the state object.

    usestategotcha.jsx:
    This file defines a component UseStateGotcha that demonstrates a common issue that can arise when using the useState hook. When a button is clicked, the handleClick function is called, which sets a timeout to update the value state variable after three seconds. If the setValue function is called directly inside the timeout callback, it may not work as expected because the value variable has already been closed over and will not have the current value at the time the callback is executed. To solve this problem, the setValue function should be called with a function that takes the current state value as an argument and returns the new state value. This way, the latest value of the state variable will be used in the update.

*/

