import { useSearchArticleQuery} from '../../store/API/NewsApi';
import { NewsGrid } from '../newsGrid';
import { ErrorPage } from '../../pages';

export const SearchedSection = ({keyWord, id}) => {
	const {data, isLoading, error} = useSearchArticleQuery({query: keyWord,	language: 'es'});
		
	if (isLoading) console.log('Loading...');

	if (error) {
		console.log(error);
		return <ErrorPage typeError={error}/>
	}

	if (data) {
	   return (
	      <>
	         <NewsGrid topic={data} id={id} />
	      </>
	   );
	}
};
