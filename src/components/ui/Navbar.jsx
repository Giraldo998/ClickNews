import React from 'react';
import './assets/navbar.css';

export const Navbar = () => {
	return (
		<nav className="navbar_container">
			<div className="nav_content">
				<div className="navigation container">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">log</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className="logo container">
					<a href="#">
						<img src="src\assets\img\ClickNews_Logo.svg" alt="" />
					</a>
				</div>
				<div className="search container">
					<input type="text" placeholder="Search" />
				</div>
			</div>
		</nav>
	);
};
