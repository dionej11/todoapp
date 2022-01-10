import React from "react";
import './TodoSearch.css';
import lupa from '../../assets/search-solid.svg';
import { TodoContext } from "../../todoContext";

function TodoSearch() {
	const {searchValue, setSearchValue} = React.useContext(TodoContext);
	const onSearchValueChange = (event) => {
		// console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<div className="TodoSearch__content">
			<input
				type="text" 
				placeholder="Search task.."
				value={searchValue}
				onChange={onSearchValueChange}
			/>
			<img src={lupa} alt="icon search"/>
		</div>
	);
}

export {TodoSearch};