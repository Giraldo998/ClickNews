import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks';
import './assets/navbar.css';

export const Navbar = ({keyWordNotice}) => {
	const {keyWord, onInputChange} = useForm();
	const navigate = useNavigate();

	const onsSubmit = (e) => {
		e.preventDefault();
		keyWordNotice(keyWord);
		navigate('/search');
	};

	return (
		<nav className="navbar_container">
			<div className="nav_content">
				<div className="navigation container">
					<ul style={{display: 'none'}}>
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
					<NavLink to={'/'}>
						<img src="src\assets\img\ClickNews_Logo.svg" alt="" />
					</NavLink>
				</div>

				<div className="search container">
					<form action="submit" onSubmit={onsSubmit}>
						<input
							type="text"
							placeholder="Search"
							name="keyWord"
							value={keyWord}
							onChange={onInputChange}
						/>
						<button type="submit">
							Buscar
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
