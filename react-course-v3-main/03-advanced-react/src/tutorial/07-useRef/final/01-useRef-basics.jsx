import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    const name = refContainer.current.value;
    console.log(name);
  };
  useEffect(() => {
    // console.log(refContainer.current);
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  }, [value]);

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            ref={refContainer}
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;



/*

This React code defines a functional component called UseRefBasics that uses the useRef hook to create a reference to an HTML input element and to track whether the component has been mounted. It also uses the useState hook to manage a state variable called value.

Here is a detailed breakdown of the code:

javascript

import { useEffect, useRef, useState } from 'react';

This line imports the useEffect, useRef, and useState hooks from the React library.

javascript

const UseRefBasics = () => {

This line defines a functional component called UseRefBasics using an arrow function.

javascript

const [value, setValue] = useState(0);

This line initializes a state variable called value with an initial value of 0 and provides a setValue function to update it.

javascript

const refContainer = useRef(null);

This line creates a reference to an HTML input element by calling the useRef hook and assigning the result to a variable called refContainer. The initial value of the reference is null.

javascript

const isMounted = useRef(false);

This line creates another reference using the useRef hook and assigns it to a variable called isMounted. The initial value of this reference is false.

javascript

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(refContainer.current);
  const name = refContainer.current.value;
  console.log(name);
};

This function is called when the form is submitted. It prevents the default form submission behavior, logs the current value of the refContainer reference to the console, and extracts the value of the input element by accessing the value property of the refContainer.current object.

javascript

useEffect(() => {
  refContainer.current.focus();
});

This effect hook is called after every render. It calls the focus method on the refContainer.current object to focus the input element.

javascript

useEffect(() => {
  if (!isMounted.current) {
    isMounted.current = true;
    return;
  }
  console.log('re-render');
}, [value]);

This effect hook is called after every render, but it only executes the code inside the hook if the value state variable has changed. The first time this hook is called, it sets the value of isMounted.current to true. On subsequent calls, it logs the message 're-render' to the console.

javascript

return (
  <div>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          id='name'
          ref={refContainer}
          className='form-input'
        />
      </div>
      <button type='submit' className='btn btn-block'>
        submit
      </button>
    </form>
    <h1>value : {value}</h1>
    <button onClick={() => setValue(value + 1)} className='btn'>
      increase
    </button>
  </div>
);

This block of JSX code returns the elements that will be rendered to the screen. It includes a form with an input element that is associated with the refContainer reference, a submit button, a header element that displays the current value of the value state variable, and a button that increments the value variable when clicked.


*/