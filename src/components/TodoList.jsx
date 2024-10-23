import './TodoList.css'
import TodoItem from './TodoItem';

function TodoList({ todos, handleDeleteTodo }) {
  return (
    // eiliskumas 7 - renderinam todo lista su visais todo itemais
    <div className="TodoList">
        {todos.length > 0 ? todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        )).reverse() : <div>Todo list is empty</div>}
    </div>
  )
}

export default TodoList
