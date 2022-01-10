import React from "react";
import { TodoContext } from "../../todoContext";
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Completed <span>{completedTodos}</span> to <span>{totalTodos}</span></h2>
    );
}

export {TodoCounter};