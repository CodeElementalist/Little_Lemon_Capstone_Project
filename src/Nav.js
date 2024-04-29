import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li><Link index to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/menu">Menu</Link></li>
					<li><Link to="/reservation">Reservations</Link></li>
					<li><Link to="/order_online">Order Online</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;