import React from "react";
import logo from "../assets/img/deliveroo-logo.svg";
import "../styles/header.css";

const Header = () => {
	return (
		<header>
			<div className="container">
				<img src={logo} alt="logo" className="logo" />
			</div>
			<hr />
		</header>
	);
};

export default Header;
