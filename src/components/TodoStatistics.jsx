import './TodoStatistics.css';

function TodoStatistics({ todos }) {
    return <div className="TodoStatistics">
        <p>Total todos: {todos.length}</p>
    </div>
}

export default TodoStatistics;