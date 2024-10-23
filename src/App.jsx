import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function Header() {
  return <h1 className="Header">Todo</h1>
}

function App() {
  return (
    <div className="container">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
