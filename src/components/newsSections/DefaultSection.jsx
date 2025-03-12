import { useEffect, useState } from "react";
import { useGetTrendingQuery } from "../../store/API/newsApi";
import { NewsGrid } from "../newsGrid";


export const DefaultSection = ({topic, id, amountNews}) => {
   const [articles, setArticles] = useState([]);

   const {data, isLoading, error} = useGetTrendingQuery({topic: topic, language: 'es'});
   
   useEffect(() => {
      if (error) console.error('Error:', error);
      
      setArticles([]);

      if (data) setArticles(data);
   }, [error, data]);

   if (isLoading) console.log('Loading...');
   
   if (data) {
      return (
         <>
            <NewsGrid topic={articles} id={id} amountNews={amountNews}/>
         </>
      );
   }
   return null;
}
