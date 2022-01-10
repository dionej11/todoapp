import React from "react";
import { useLocalStorge } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props) {
	const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorge('TODO_V1', []);

  const [searchValue, setSearchValue] = React.useState(''); //creo un estado [val, funcion]
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    
    if(!newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }else {
      newTodos[todoIndex].completed = false;
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
  
    newTodos.push({
      completed: false,
      text: text
    });

    saveTodos(newTodos);
  };
	return (
		<TodoContext.Provider value={{
			loading,
			error,
			totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo,
      openModal,
      setOpenModal,
      addTodo
		}}>
			{props.children}
		</TodoContext.Provider>
	);
}

export {TodoContext, TodoProvider};