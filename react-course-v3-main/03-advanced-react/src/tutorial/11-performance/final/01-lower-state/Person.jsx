const Person = ({ name }) => {
  console.log('render');

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;


/*

These React files implement a simple example of using state and props to render a list of people and a button that increments a counter when clicked.

In the Counter.jsx file, a functional component Counter is defined using the useState hook to initialize a count state variable to 0. The component returns a button element that displays the current count and increments it when clicked.

In the Person.jsx file, a functional component Person is defined that takes a name prop and simply displays it within an h4 tag. The component also logs a message to the console every time it is rendered.

The List.jsx file defines a functional component List that takes a people prop, which is an array of person objects that have a name and id property. The component maps over the people array and renders a Person component for each person with the corresponding name prop.

In the index.jsx file, a functional component LowerState is defined that initializes a people state variable using the useState hook and sets it to the data array imported from ../../../../data. The component renders a Counter component and a List component with the people state passed as a prop.

Overall, these files demonstrate how state and props can be used in React to create a simple UI with a counter and a list of people. The counter component uses useState to track a count and update the UI, while the list component receives an array of people objects as a prop and maps over it to render a Person component for each person.


*/