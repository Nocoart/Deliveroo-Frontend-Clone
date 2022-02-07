import React from "react";
import TopRestaurant from "./TopRestaurant";
import Menu from "./Menu";
import "../styles/main.css";

import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "./Cart";

const Main = () => {
	//FETCH DATA
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const response = await axios.get(
			"https://deliveroo-backend-app.herokuapp.com/"
		);
		setCategories(response.data.categories);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	//CART VIA MENU BTN
	const [cartListCounters, setCartListCounters] = useState([]);
	const [total, setTotal] = useState(0);

	const handleClick = async (title, price, id) => {
		console.log({ id: { id }, title: { title }, price: { price } });

		let totalPrice = Number(total);

		const idArr = [];
		for (let i = 0; i < cartListCounters.length; i++) {
			idArr.push(cartListCounters[i].id);
		}

		if (idArr.indexOf(id) > -1) {
			const copy = [...cartListCounters];
			copy[idArr.indexOf(id)].count++;
			setCartListCounters(copy);
			totalPrice += Number(copy[idArr.indexOf(id)].price);
		} else {
			const copy = [...cartListCounters];
			copy.push({ count: 1, id: id, title: title, price: price });
			setCartListCounters(copy);
			totalPrice += Number(price);
		}

		setTotal(totalPrice);
	};

	//CART VIA CART BTN
	const handleCartBtnClick = (id, str) => {
		let totalPrice = Number(total);
		const idArr = [];
		for (let i = 0; i < cartListCounters.length; i++) {
			idArr.push(cartListCounters[i].id);
		}
		const copy = [...cartListCounters];
		if (str === "-") {
			copy[idArr.indexOf(id)].count--;
			totalPrice -= Number(copy[idArr.indexOf(id)].price);
		} else if (str === "+") {
			copy[idArr.indexOf(id)].count++;
			totalPrice += Number(copy[idArr.indexOf(id)].price);
		}
		setCartListCounters(copy);
		setTotal(totalPrice);
	};

	//RETURN
	return (
		<main>
			<TopRestaurant />

			<div className="content">
				<div className="content-center">
					{isLoading ? null : (
						<Menu categories={categories} handleClick={handleClick} />
					)}
					{isLoading ? null : (
						<Cart
							cartListCounters={cartListCounters}
							total={total}
							handleCartBtnClick={handleCartBtnClick}
						/>
					)}
				</div>
			</div>
		</main>
	);
};

export default Main;
