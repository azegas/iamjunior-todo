import './AddTodo.css'
import { useState } from 'react';

function AddTodo() {
  const [inputValue, setInputValue] = useState(''); // State for input value
  const [todos, setTodos] = useState([]); // State for todo list

  const handleAddTodo = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setTodos([...todos, inputValue]); // Add new todo to the list
      setInputValue(''); // Clear input field
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
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // Render todo list
        ))}
      </ul>
    </div>
  );
}

export default AddTodo
