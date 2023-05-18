import { people } from '../../../data';
import Person from './Person';
const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;


/*

This code exports a component named List that renders a list of Person components. The Person components are created by mapping over an array of people data imported from another module. The key prop is set to the id property of each person object to help React identify each Person component uniquely and improve performance.

Assuming that the Person component renders the data of each person object, this List component is a simple implementation of a list view that displays data in a repeated format.

*/