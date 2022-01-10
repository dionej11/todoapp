import React from "react";
import { TodoContext } from "../../todoContext";
import "./TodoForm.css";

function TodoForm() {
	const [newTodoValue, setNewTodoValue] = React.useState("");
	const {
		addTodo,
		setOpenModal
	} = React.useContext(TodoContext);

	const onCancel = () => {
		setOpenModal(false);
	}
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	}
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	}

	return (
		<form onSubmit={onSubmit} className="TodoForm">
				<label>New <br/> To-Do</label>
				<textarea
					placeholder="English homework..."
					value={newTodoValue}
					onChange={onChange}
					required
				/>
				<div className="TodoForm--buttons">
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
					<button type="submit">
						Add
					</button>
				</div>
		</form>
	);
}

export {TodoForm};