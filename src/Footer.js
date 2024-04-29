import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faFacebook, 
 faInstagram, 
} from "@fortawesome/free-brands-svg-icons"; 
import logo from "./logo.svg";

const socials = [ 
 { 
   icon: faFacebook, 
   url: "https://www.facebook.com/littlelemon", 
 }, 
 { 
   icon: faInstagram, 
   url: "https://www.instagram.com/littlelemon", 
 }, 
];

const Footer = () => {
	return (
		<>
			<footer className="containerFooter">
				<div className="itemFooterlogo">
					<div><img src="logo.svg" alt="Little Lemon" /></div><div><p>Little Lemon</p></div>
				</div>
				<div className="itemFooter1">
					<h2>Doormat Navigation</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/menu">Menu</Link></li>
						<li><Link to="/reservation">Reservations</Link></li>
						<li><Link to="/order_online">Order Online</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</div>
				<div className="itemFooter2">
					<h2>Contact Details</h2>
					<p>Address</p>
					<p>Phone Number</p>
					<p>E-mail Address</p>
				</div>
				<div className="itemFooter3">
					<h2>Social Media</h2>
					{socials.map(({ icon, url }) => ( 
						<a 
							 key={url} 
							 href={url} 
							 target="_blank" 
							 rel="noopener noreferrer" 
						> 
							 <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
						</a> 
					 ))}
				</div>
			</footer>
		</>
	)
};

export default Footer;
		