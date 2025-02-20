import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { Navbar } from '../components';
import { DefaultNewsPage, SearchedNewsPage, SugestedNewsPage } from '../pages';

export const AppRouter = () => {
	
   const [keyWord, setKeyWord] = useState('');

	const searchNotice = (NewKKeyWord) => setKeyWord(NewKKeyWord);
	
	return (
		<>
			<Navbar keyWordNotice={(event) => searchNotice(event)}/>
			<div className='main'>
				<Routes>
					<Route path="/" element={<DefaultNewsPage/>} />
					<Route path="/sugested/:topic" element={<SugestedNewsPage suggestion={keyWord}/>} />
					<Route path="/search/:keyWord" element={<SearchedNewsPage keyWord={keyWord}/>} />
				</Routes>
			</div>
		</>
	);
};
