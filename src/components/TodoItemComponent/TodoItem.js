import React from "react";
import { CheckIcon } from "../../assets/CheckIcon";
import { TrashIcon } from "../../assets/TrashIcon";
import './TodoItem.css';

function TodoItem(props) {
    // const onCompleted = () => {
    //     alert('Completaste el to-do: ' + props.text);
    // };
    // const onDelete = () => {
    //     alert('Borraste el to-do: ' + props.text);
    // };

    return (
        <li className="TodoItem">
            <CheckIcon 
                color={props.completed ? "#25EC51" : "#8A888C"}
                onClick = {props.onComplete}
            />
            <p className = {`${props.completed && 'done' }`} >{props.text}</p>
            <TrashIcon
                color="#F24E4E"
                onClick = {props.onDelete}
            />
        </li>
    );
}

export {TodoItem};