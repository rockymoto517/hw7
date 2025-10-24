function TodoItem({name, completed}) {
	console.log("todoing");
	if (completed) {
		return (
			<div className="todo__item">
				<button className="todo__btn-mark">Uncomplete</button>
				<span className="todo__title">{name}</span>
				<div>
					<button className="todo__btn-edit">Edit</button>
					<button className="todo__btn-delete">Delete</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className="todo__item">
				<div>
					<button className="todo__btn-edit">Edit</button>
					<button className="todo__btn-delete">Delete</button>
				</div>
				<span className="todo__title">{name}</span>
				<button className="todo__btn-mark">Uncomplete</button>
			</div>
		)
	}
}

export default function TodoCard({name, id, todos}) {
	return (
		<div className={"todo__div"} id={id}>
			<h1>{name}</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					name={todo.name}
					completed={todo.completed}
				/>
			))}
		</div>
	)
}
