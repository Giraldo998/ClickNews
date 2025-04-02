
export const HamburgerMenu = ({activateNavbar, checkStatus}) => {
   
	return (
		<label className="burger" htmlFor="burger">
			<input 
				type="checkbox" 
				id="burger" 
				onClick={activateNavbar} 
				checked={checkStatus}
			/>			
			<span></span>
			<span></span>
			<span></span>
		</label>
	);
};
