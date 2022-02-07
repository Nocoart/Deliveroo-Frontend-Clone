import React from "react";
import MenuItem from "./MenuItem";
import "../styles/menu.css";

const Menu = ({ categories, handleClick }) => {
	return (
		<div className="menu">
			{categories.map(({ name, meals }, index) => {
				return (
					<MenuItem
						key={index}
						name={name}
						meals={meals}
						handleClick={handleClick}
					/>
				);
			})}
		</div>
	);
};

export default Menu;
