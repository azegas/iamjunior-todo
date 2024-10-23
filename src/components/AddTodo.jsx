import './AddTodo.css'
import { useState } from 'react';

function AddTodo({ onAddTodo }) {
  // eiliskumas 3 - deklaruojam input value state?
  const [inputValue, setInputValue] = useState(''); // State for input value

  // eiliskumas 4 - sukuriam funkcija, kuri tikrina ar paspaustas enter ir input nera tuscias
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim()) { // Check if input is not empty
        // eiliskumas 5 - i paduota funkcija (handleAddTodo) paduodam inputValue verte
        onAddTodo(inputValue); // Call the function passed as prop
        setInputValue(''); // Clear input field
      }
    }
  } 

  return (
    <div className="AddTodo">
      <input 
        type="text" 
        placeholder="Add Todo" 
        value={inputValue} // Bind input value to state
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
        onKeyDown={handleKeyPress} // instead of add button, press enter to add todo
      />
    </div>
  );
}

export default AddTodo
