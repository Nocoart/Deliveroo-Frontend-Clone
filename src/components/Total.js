import React from "react";

const Total = ({ total }) => {
	return (
		<div className="cart-list-total">
			<div className="cart-list-total-line">
				<span className="cart-description">Sous-total</span>
				<span className="cart-price">{total.toFixed(2)} €</span>
			</div>
			<div className="cart-list-total-line">
				<span className="cart-description">Frais de livraison</span>
				<span className="cart-price">2,50 €</span>
			</div>
			<hr />
			<div className="cart-list-total-line">
				<span className="cart-description">Total</span>
				<span className="Total">{(total + 2.5).toFixed(2)} €</span>
			</div>
		</div>
	);
};

export default Total;
