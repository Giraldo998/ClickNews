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

	const navigateToNotice = (topic) => {
		keyWordNotice(topic);
		navigate(`sugested/${topic}`);
	};

	return (
		<nav className="navbar_container">
			<div className="nav_content">
				<div className="navigation container">
					<ul style={{cursor: 'pointer'}}>
						<li>
							<h5 onClick={() => navigateToNotice('sports')}>Deportes</h5>
						</li>
						<li>
							<h5 onClick={() => navigateToNotice('science')}>ciencia</h5>
						</li>
						<li>
							<h5 onClick={() => navigateToNotice('culture')}>Cultura</h5>
						</li>
						<li>
							<h5 onClick={() => navigateToNotice('Religion')}>Religion</h5>
						</li>
						<li>
							<h5 onClick={() => navigateToNotice('Tv')}>Farandula</h5>
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
