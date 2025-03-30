
export const HamburgerMenu = ({activateNavbar}) => {
   
	return (
		<label className="burger" htmlFor="burger">
			<input type="checkbox" id="burger" onClick={activateNavbar} />
			<span></span>
			<span></span>
			<span></span>
		</label>
	);
};
