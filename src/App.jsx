import { Navbar } from "./components";
import { NewsGrid } from "./components/newsGrid/NewsGrid";

export const App = () => {
	
	return (
		<>
			{/* <header> */}
			<Navbar/>
			{/* banner */}
			{/* </header> */}
			<main style={{marginTop: '80px'}}>
				<NewsGrid topic="economy" id='1' />
				<NewsGrid topic="General" id='2' />
				<NewsGrid topic="technology" id='3' />
				<NewsGrid topic="culture" id='4' />
			</main>
			{}
		</>
	);
};
