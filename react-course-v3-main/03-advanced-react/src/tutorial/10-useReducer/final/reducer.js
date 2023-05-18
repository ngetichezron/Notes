import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;


/*

The first file usereducer.jsx is a functional React component that demonstrates the use of the useReducer hook to manage state in a more complex application. It imports an array of data and three action types (CLEAR_LIST, RESET_LIST, and REMOVE_ITEM) from other files. The component defines a defaultState object that includes the data array and a isLoading boolean flag. It also defines three functions that dispatch the corresponding actions to update the state based on user actions (removeItem, clearList, and resetList).

The useReducer hook takes a reducer function and the initial state and returns the current state and a dispatch function to update it. The component calls useReducer with the imported reducer function and the defaultState object.

The component renders a list of items from the data array with a remove button next to each item. When the remove button is clicked, the removeItem function is called, which dispatches the REMOVE_ITEM action with the id of the item to be removed as the payload. Similarly, when the clear button is clicked, the clearList function dispatches the CLEAR_LIST action, which sets the people array to an empty array. When the reset button is clicked, the resetList function dispatches the RESET_LIST action, which sets the people array back to its initial state.

The second file actions.jsx is a module that exports three action types as constants.

The third file reducer.js is a module that exports a reducer function that takes the current state and an action object as arguments and returns the new state. The reducer function handles the CLEAR_LIST, RESET_LIST, and REMOVE_ITEM actions by creating a new state object with updated people array based on the type of action and payload. If the action type is not recognized, it throws an error.


*/