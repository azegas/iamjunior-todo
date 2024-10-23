import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoStatistics from './components/TodoStatistics';
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
  const [todos, setTodos] = useState(() => {
    // Retrieve todos from local storage if available
    const savedTodos = localStorage.getItem('todos');
    // If savedTodos exists, parse it and return the parsed array
    // If not, return an empty array
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // // useEffect to save todos to local storage whenever they change
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos)); // Save todos to local storage
  // }, [todos]); // This will run whenever `todos` changes

  // eiliskumas 6 - pasiimam paduota verte (inputValue) ir pridedam i todo lista
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Add new todo to the list
  };

  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter(t => t !== todo)); // Remove the todo from the list
  };

  // eiliskumas 1 - renderinam visus 
  return (
    <div className="container">
      <Header />
      {/* eiliskumas 2 - paduodam reikalingus dalykus as props (values, funkcijas) kitiem komponentams */}
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} /> 
      <TodoStatistics todos={todos} />
    </div>
  )
}

export default App
