import {SearchedSection} from '../components';

export const SearchedNewsPage = ({keyWord}) => {

	return (
		<>
			<SearchedSection keyWord={keyWord} id="1" />
			<SearchedSection keyWord={keyWord} id="2" />
		</>
	);
};
