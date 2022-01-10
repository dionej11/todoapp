import React from "react";
import { Title } from "../components/TitleComponent/Title";
import { TodoCounter } from "../components/TodoCounterComponent/TodoCounter";
import { TodoSearch } from "../components/TodoSearchComponent/TodoSearch";
import { TodoList } from "../components/TodoListComponent/TodoList";
import { TodoItem } from "../components/TodoItemComponent/TodoItem";
import { CreateTodoButton } from "../components/TodoButtonComponent/CreateTodoButton";
import {TodoContext} from "../todoContext";
import {Modal} from "../modal"
import { TodoForm } from "../components/TodoForm/TodoForm";
import {TodosError} from "../components/Skeletons/TodosError/TodosError";
import {TodosLoading} from "../components/Skeletons/TodosLoading/TodosLoading";
import {EmptyTodos} from "../components/Skeletons/EmptyTodos/EmptyTodos";


function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);
	return(
		<React.Fragment>
			<Title title="Personal's To-Do"/>
			<TodoCounter/>
			<TodoSearch/>
			<TodoList >
				{error && <TodosError error={error} />}
				{loading && <TodosLoading totalTodos={searchedTodos.length} />}
				{(!loading && !searchedTodos.length) && <EmptyTodos />}
				{searchedTodos.map(todo => (
					<TodoItem
						key = {todo.text}
						text = {todo.text}
						completed = {todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}

export {AppUI};