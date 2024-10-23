import './AddTodo.css'
import { useState } from 'react';

function AddTodo() {
  const [inputValue, setInputValue] = useState(''); // State for input value

  const handleAddTodo = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setInputValue(''); // Clear input field
      console.log('inputValue:', inputValue);
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
      <button type="button" onClick={handleAddTodo}>Add</button> {/* Call function on click */}
    </div>
  );
}

export default AddTodo
