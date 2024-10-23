import { FaTrashAlt } from "react-icons/fa";
import './TodoItem.css';


// eiliskumas 8 - renderinam todo item
function TodoItem({ todo, handleDeleteTodo }) {
    return (
        <div className="todo-item">
            <div className="todo-left">
                <input type="checkbox" />
                <span>{todo}</span>
            </div>
            <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
        </div>
    )
}

export default TodoItem;