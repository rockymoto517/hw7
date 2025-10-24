import TodoCard from "./components/todo-card";
import todoData from "./data";
import './App.css'

function App() {
  return (
    <>
			<div className="todo">
				<h1>Todo List</h1>
				<div className="todo__form">
					<input id="todo__input" type="text" />
					<button id="todo__btn-add">submit</button>
				</div>
			</div>

			<div id="todo__lists">
				<TodoCard
					name="Pending Tasks"
					id="todo__pending"
					todos={todoData.filter(todo => !todo.completed)}
				/>
				<TodoCard
					name="Completed Tasks"
					id="todo__completed"
					todos={todoData.filter(todo => todo.completed)}
				/>
			</div>
    </>
  )
}

export default App
