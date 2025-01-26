import { useEffect } from "react";
import { Navbar } from "./components";
import { useSearchNewsQuery } from "./store/API/NewsApi";

export const App = () => {
	const {data, error, isLoading} = useSearchNewsQuery({query: 'nasa', language: 'en'});
	
	useEffect(() => {
		if (data) {
			 console.log('Data:', data);
		}
		if (error) {
			 console.error('Error:', error);
		}
		if (isLoading) {
			 console.log('Loading...');
		}
  	}, [data, error, isLoading]);
	
	return (
		<>
			{/* <header> */}
			<Navbar/>
			{/* banner */}
			{/* </header> */}
		</>
	);
};
