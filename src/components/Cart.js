import React from "react";
import "../styles/cart.css";
import CartListItems from "./CartListItems";
import Total from "./Total";

const Cart = ({ cartListCounters, total, handleCartBtnClick }) => {
	return (
		<div className="cart">
			<div className="cart-card">
				{Math.round(total) === 0 ? (
					<button className="cart-disabled">Valider Mon panier</button>
				) : (
					<button className="cart-validate">Valider Mon panier</button>
				)}

				{Math.round(total) === 0 ? (
					<div className="cart-empty">Votre panier est vide</div>
				) : (
					<div>
						<div>
							{cartListCounters.map(({ id, count, title, price }) => {
								if (count > 0) {
									return (
										<CartListItems
											key={id}
											count={count}
											title={title}
											price={price}
											id={id}
											handleCartBtnClick={handleCartBtnClick}
										/>
									);
								}
							})}
						</div>
						<hr />
						<Total total={total} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
