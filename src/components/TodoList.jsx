import './TodoList.css'
import TodoItem from './TodoItem';

function TodoList(props) {
    // tik example kas yra props
    console.log(props);
    const todos = props.todos;
    const handleDeleteTodo = props.handleDeleteTodo;
    const title = props.title;
    
  return (
    // eiliskumas 7 - renderinam todo lista su visais todo itemais
    <div className="TodoList">
        <h2>{title}</h2>
        {todos.length > 0 ? todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        )).reverse() : <div>Todo list is empty</div>}
    </div>
  )
}

export default TodoList
