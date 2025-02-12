import { useEffect } from "react";
import { useGetTrendingQuery } from "../../store/API/NewsApi";
import { NewsGrid } from "../newsGrid";


export const DefaultSection = ({topic, id}) => {
   const {data, isLoading, error} = useGetTrendingQuery({topic: topic, language: 'es'});
   
   useEffect(() => {
      if (error) console.error('Error:', error);
   }, [error, data]);

   if (isLoading) console.log('Loading...');

   if (data) {
      return (
         <>
            <NewsGrid topic={data} id={id} />
         </>
      );
   }
   return null;
}
