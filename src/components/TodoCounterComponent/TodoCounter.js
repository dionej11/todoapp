import React from "react";
import { TodoContext } from "../../todoContext";
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Completed {completedTodos} to {totalTodos}</h2>
    );
}

export {TodoCounter};