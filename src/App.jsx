import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function Header() {
  return <h1 className="Header">Todo</h1>
}

function App() {
  /**
   * At first I was trying to create the state in the App component, but then I 
   * realized that the state should be in the AddTodo component. 
   * 
   * To share the todo list between the AddTodo and TodoList components, 
   * we can lift the state up to the App component. This way, App will hold 
   * the todo list, and we can pass it down as props to both AddTodo and TodoList. 
   */

  // State for todo list
  const [todos, setTodos] = useState([]); // Initialize state with an empty array

  // // after updating the todo list, I don't see the newest todo item in the list
  // // useEffect hook helps with that - listens for changes to the todo state.
  // useEffect(() => {
  //   console.log('Updated todo list:', todos);
  // }, [todos]); // This will run whenever `todo` changes

  // eiliskumas 6 - pasiimam paduota verte (inputValue) ir pridedam i todo lista
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Add new todo to the list
  };

  // eiliskumas 1 - renderinam visus 
  return (
    <div className="container">
      <Header />
      {/* eiliskumas 2 - paduodam reikalingas funkcijas kitiem komponentams */}
      <AddTodo onAddTodo={handleAddTodo} /> {/* Pass the function as a prop */}
      <TodoList todos={todos} /> {/* Pass the state as a prop */}
    </div>
  )
}

export default App
