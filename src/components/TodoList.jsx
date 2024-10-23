import './TodoList.css'

function TodoList({ todos }) {
  return (
    // eiliskumas 7 - renderinam todo lista su visais todo itemais
    <div className="TodoList">
        <ul>
            {todos.length > 0 ? todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            )) : <li>Todo list is empty</li>}
        </ul>
    </div>
  )
}

export default TodoList
