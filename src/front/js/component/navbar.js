import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
					<img 
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" 
						style={{width: '150px', height: '50px'}}
					/>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
