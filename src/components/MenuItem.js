import React from "react";
import MenuCard from "./MenuCard";
import "../styles/menuItem.css";

const MenuItem = ({ name, meals, handleClick }) => {
	return (
		<div className="menu-item">
			<h2 className="menu-item-title">{name}</h2>
			<div className="menu-items-list">
				<div className="menu-item-items">
					{meals.map(({ id, title, description, price, picture, popular }) => {
						return (
							<MenuCard
								key={id}
								id={id}
								title={title}
								description={description}
								price={price}
								picture={picture}
								popular={popular}
								handleClick={handleClick}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MenuItem;
