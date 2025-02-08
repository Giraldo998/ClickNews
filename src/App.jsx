import { useState } from "react";
import { Navbar, NewsGrid } from "./components";
import { SearchedNews } from "./pages/SearchedNews";

export const App = () => {
	const [keyWord, setKeyWord] = useState('');

	const searchNotice = (NewKKeyWord) => {
		
		setKeyWord(NewKKeyWord);
	}
	
	return (
		<>
			<Navbar keyWordNotice={(event) => searchNotice(event)}/>
				
			<main style={{marginTop: '80px'}}>
				<SearchedNews keyWord={keyWord}/>
			</main>
			{}
		</>
	);
};
