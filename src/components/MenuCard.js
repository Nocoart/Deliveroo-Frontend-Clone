import React from "react";
import "../styles/menuItemCard.css";
import starlogo from "../assets/img/star.svg";

const MenuCard = ({
	title,
	description,
	price,
	picture,
	popular,
	handleClick,
	id,
}) => {
	return (
		<div
			className="menu-item-card"
			onClick={() => handleClick(title, price, id)}
		>
			<div className="menu-item-text">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="menu-item-info">
					<span className="menu-item-price">{price}€</span>
					{popular ? (
						<span className="menu-item-popular">
							{" "}
							<img src={starlogo} alt="" /> Popular
						</span>
					) : null}
				</div>
			</div>
			{picture ? (
				<div className="menu-item-picture">
					<img src={picture} alt="" />
				</div>
			) : null}
		</div>
	);
};

export default MenuCard;
