export const NavigationMenu = ({catchTopic}) => {
   
	return (
		<ul>
			<li>
				<h5 onClick={() => catchTopic('sports')}>Deportes</h5>
			</li>
			<li>
				<h5 onClick={() => catchTopic('science')}>Ciencia</h5>
			</li>
			<li>
				<h5 onClick={() => catchTopic('culture')}>Cultura</h5>
			</li>
			<li>
				<h5 onClick={() => catchTopic('Religion')}>Religión</h5>
			</li>
			<li>
				<h5 onClick={() => catchTopic('Tv')}>Farándula</h5>
			</li>
		</ul>
	);
};
