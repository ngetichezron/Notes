import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // get values one by one
    const name = formData.get('name');
    console.log(name);
    // get all of them
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // reset values
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;


/*

The first code snippet is a React component ControlledInputs which renders a form with two controlled input fields for name and email. The component uses the useState hook to create state variables name and email which are initially set to empty strings. The input fields have their value set to these state variables, and the onChange event of each input is handled by a function that updates the corresponding state variable with the new input value using the setName and setEmail functions respectively.

There is also a form handleSubmit function that prevents the default form submission behavior, logs the current values of name and email to the console, and can perform other operations as well.

The second code snippet is another React component UserChallenge that renders a form to add new users and displays a list of existing users with a "remove" button for each. The component also uses the useState hook to create state variables name and users which are initially set to an empty string and an array of user objects respectively. The handleSubmit function is called when the form is submitted and creates a new user object with a unique id and the current value of the name state variable. The new user is added to the array of users, and the state is updated using the setUsers function. The removeUser function is called when a "remove" button is clicked and filters the array of users to remove the user with the given id.

The third code snippet is a React component MultipleInputs which renders a form with multiple controlled input fields for name, email, and password. The component uses the useState hook to create a state variable user which is initially set to an object with empty strings for each property. The input fields have their value and name attributes set to the corresponding property of the user object, and the onChange event of each input is handled by a function that updates the user state variable with a new object that has the corresponding property updated with the new input value.

The fourth code snippet is a React component OtherInputs which renders a form with a checkbox input and a select input for choosing a framework. The component uses the useState hook to create state variables shipping and framework which are initially set to false and 'react' respectively. The checkbox input's checked attribute is set to the shipping state variable, and the onChange event is handled by a function that updates the shipping state variable with the new checked value. The select input's value attribute is set to the framework state variable, and the onChange event is handled by a function that updates the framework state variable with the new selected value.



*/


/*

The fifth code snippet is a React component named "OtherInputs". This component is also using the useState hook to manage its state.

The component has two states: "shipping" and "framework". "shipping" is a boolean state that represents whether or not the user has selected the shipping option. "framework" is a string state that represents the user's preferred front-end framework.

The component renders a form with two inputs. The first input is a checkbox labeled "Shipping". When the user clicks on this checkbox, the "shipping" state is updated accordingly.

The second input is a radio button group labeled "Choose your favorite front-end framework:". This radio button group consists of four options: "React", "Angular", "Vue", and "Svelte". When the user clicks on one of these options, the "framework" state is updated accordingly.

Finally, the component renders the current values of the "shipping" and "framework" states to the screen.

*/