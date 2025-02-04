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
				<NewsGrid topic="politics" />
				<NewsGrid topic="General" />
				<NewsGrid topic="technology" />
				<NewsGrid topic="economy" />
			</main>
			{}
		</>
	);
};
