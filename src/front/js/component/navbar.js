import React from "react";
import { Link } from "react-router-dom";
import logoimg from '../../img/logo.png'
import DarkOrLight from "./darkOrLight";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<img 
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" 
						style={{width: '100px', height: '35px'}}
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<img 
							src={logoimg} 
							style={{width: '40px'}}
						/>
					</Link>
					<DarkOrLight />
				</div>
			</div>
		</nav>
	);
};
