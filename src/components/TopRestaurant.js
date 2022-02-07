import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/topRestaurant.css";

const TopRestaurant = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const response = await axios.get(
			"https://deliveroo-backend-app.herokuapp.com/"
		);
		console.log(response.data.restaurant);
		setData(response.data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return isLoading ? null : (
		<div className="top-restaurant">
			<div className="description">
				<h1>{data.restaurant.name}</h1> <p>{data.restaurant.description}</p>
			</div>
			<img
				className="pic-top-restaurant"
				src={data.restaurant.picture}
				alt={`${data.restaurant.name} picture`}
			/>
		</div>
	);
};

export default TopRestaurant;
