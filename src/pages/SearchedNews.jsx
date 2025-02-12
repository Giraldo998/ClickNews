import {SearchedSection} from '../components';

export const SearchedNews = ({keyWord}) => {

	// console.log(keyWord);
	
	
	return (
		<>
			<SearchedSection keyWord={keyWord} id="1" />
			<SearchedSection keyWord={keyWord} id="2" />
		</>
	);
};
