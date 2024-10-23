import './AddTodo.css'
import { useState, useEffect } from 'react';

function AddTodo() {
  const [inputValue, setInputValue] = useState(''); // State for input value
  const [todos, setTodo] = useState([]); // State for todo list

  // after updating the todo list, I don't see the newest todo item in the list
  // useEffect hook helps with that - listens for changes to the todo state.
  useEffect(() => {
    console.log('Updated todo list:', todos);
  }, [todos]); // This will run whenever `todo` changes

  const handleAddTodo = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setInputValue(''); // Clear input field
      // console.log('inputValue:', inputValue);
      setTodo([...todos, inputValue]); // spred operator to add input value to the end of the todo list
    }
  }

  return (
    <div className="AddTodo">
      <input 
        type="text" 
        placeholder="Add Todo" 
        value={inputValue} // Bind input value to state
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
      />
      <button type="button" onClick={() => {
        handleAddTodo();
      }}>Add</button> {/* Call function on click and log todo list */}
    </div>
  );
}

export default AddTodo
