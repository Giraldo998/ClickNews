import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { Navbar } from '../components';
import { DefaultNewsPage, SearchedNewsPage, SugestedNewsPage } from '../pages';

export const AppRouter = () => {
	
   const [keyword, setKeyword] = useState('');

	const searchNotice = (newKeyword) => setKeyword(newKeyword);
	
	return (
		<>
			<Navbar keyWordNotice={(event) => searchNotice(event)}/>
			<div className='main'>
				<Routes>
					<Route path="/" element={<DefaultNewsPage/>} />
					<Route path="/sugested/:topic" element={<SugestedNewsPage suggestion={keyword}/>} />
					<Route path="/search/:keyword" element={<SearchedNewsPage keyWord={keyword}/>} />
				</Routes>
			</div>
		</>
	);
};
