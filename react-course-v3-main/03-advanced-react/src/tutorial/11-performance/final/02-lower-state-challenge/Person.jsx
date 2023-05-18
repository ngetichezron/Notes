const Person = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;


/*

The files are related to a React application that displays a list of people and a form to add new people to the list. Here is what is happening in each file:

    form.jsx: This file exports a functional component that displays a form for adding a new person to the list. The component uses useState hook to store the name value entered by the user. When the user submits the form, the handleSubmit function is called, which prevents the default form submission behavior, checks if the name value is not empty, and calls the addPerson function passed as a prop from the parent component LowerStateChallenge with the name value. Finally, the name value is reset to an empty string.

    index.jsx: This file exports a functional component LowerStateChallenge that displays the Form component and the List component. The component uses useState hook to store the array of people and the addPerson function, which adds a new person to the list by generating a unique id and appending the new person to the array. The addPerson function is passed as a prop to the Form component to add new people to the list.

    list.jsx: This file exports a functional component that displays a list of people passed as a prop people. The component uses the map function to iterate over the people array and returns a Person component for each person with the key attribute set to the id value of the person.

    person.jsx: This file exports a functional component that displays the name of a person passed as a prop name. The Person component is used by the List component to display each person's name.


*/