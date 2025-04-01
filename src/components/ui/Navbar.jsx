import {NavLink, useNavigate} from 'react-router-dom';
import {showNavbar, useForm} from '../hooks';
import {HamburgerMenu, NavigationMenu} from './components';
import './assets/navbar.css';
import './assets/navbarMobile.css';

export const Navbar = ({keyWordNotice}) => {
	
	const {keyWord, onInputChange, onResetForm} = useForm();
	const {isActive, activeNavbar} = showNavbar();
	const navigate = useNavigate();

	const onsSubmit = (event) => {
		event.preventDefault();
		keyWordNotice(keyWord);
		navigate(`/search/${keyWord}`);
		onResetForm(event);
	};

	const navigateToNotice = (topic) => {
		keyWordNotice(topic);
		navigate(`sugested/${topic}`);
	};

	return (
		<nav className="navbar_container">
			<div className="nav_content">
				<div className="buttonMobileMenu">
					<HamburgerMenu activateNavbar={activeNavbar}/>
				</div>

				<div className={`navigation ${isActive ? 'active' : ''}`}>
					<NavigationMenu catchTopic={(event) => navigateToNotice(event)}/>
				</div>

				<div className="logo container">
					<NavLink to={'/'}>
						<img
							src="src\assets\img\ClickNews_Logo.svg"
							alt="ClickNews_logo"
						/>
					</NavLink>
				</div>

				<div className={`search_container ${isActive ? 'active' : ''}`}>
					<form action="submit" onSubmit={onsSubmit} className="form">
						<input
							type="text"
							placeholder="Busca por un tema, ej: Colombia"
							name="keyWord"
							autoComplete="off"
							value={keyWord}
							onChange={onInputChange}
						/>
						<button type="submit">Buscar</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
