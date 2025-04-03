import { useEffect, useState } from "react";
import { useGetTrendingQuery } from "../../store/API/NewsApi";
import { NewsGrid } from "../newsGrid";
import { ErrorPage } from "../../pages";


export const DefaultSection = ({topic, id}) => {

   const [enanbleQuery, setEnableQuery] = useState(false);
   
   useEffect(() => {
      const delays = { '1': 0, '3': 1000, '4': 2000 };
      const timer = setTimeout(() => {
         setEnableQuery(true);
       }, delays[id]);
       
       return () => clearTimeout(timer);

   }, [id]);
  
   const {data, isLoading, error} = useGetTrendingQuery({topic: topic, language: 'es'}, {skip: !enanbleQuery});
   
   if (isLoading) console.log('Loading...');
   
   if (error) {
		console.log(error);
		return <ErrorPage typeError={error}/>
	}
   
   if (data) {
      return (
         <>
            <NewsGrid topic={data} id={id}/>
         </>
      );
   }
   return null;
}
