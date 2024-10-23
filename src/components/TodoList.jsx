import './TodoList.css'
import { FaTrashAlt } from "react-icons/fa";

function TodoList({ todos }) {
  return (
    // eiliskumas 7 - renderinam todo lista su visais todo itemais
    <div className="TodoList">
        {todos.length > 0 ? todos.map((todo, index) => (
            <div key={index} className="todo-item">
                <div className="todo-left">
                    <input type="checkbox" />
                    <span>{todo[0].toUpperCase() + todo.slice(1)}</span>
                </div>
                <FaTrashAlt className="trash-icon" />
            </div>
        )).reverse() : <div>Todo list is empty</div>}
    </div>
  )
}

export default TodoList
