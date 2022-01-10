import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        props.setOpenModal(prevState => !prevState);
    }
    return (
        <button 
            className="TodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};