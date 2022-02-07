import React from "react";

const CartListItems = ({ id, count, title, price, handleCartBtnClick }) => {
	return (
		<div className="cart-list-item">
			<div className="counter">
				<button onClick={() => handleCartBtnClick(id, "-")}>-</button>
				{count}
				<button onClick={() => handleCartBtnClick(id, "+")}>+</button>
			</div>
			<span className="cart-description">{title}</span>
			<span className="cart-price">{(price * count).toFixed(2)}€</span>
		</div>
	);
};

export default CartListItems;
