import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { Navbar } from '../components';
import { DefaultNews, SearchedNews } from '../pages';

export const AppRouter = () => {
	
   const [keyWord, setKeyWord] = useState('');

	const searchNotice = (NewKKeyWord) => setKeyWord(NewKKeyWord);
	
	return (
		<>
			<Navbar keyWordNotice={(event) => searchNotice(event)}/>
			<div className='main'>
				<Routes>
					<Route path="/" element={<DefaultNews/>} />
					<Route path="/search" element={<SearchedNews keyWord={keyWord}/>} />
				</Routes>
			</div>
		</>
	);
};
