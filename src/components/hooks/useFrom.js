import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

   const [FormState, setFormState] = useState(initialForm);

	const onInputChange = ({target}) => {
		const {name, value} = target;
		setFormState({
			...FormState,
			[name]: value,
		});
	};
   
   const onResetForm = (event)=>{
      setFormState(initialForm)
      event.target[0].value = '';
   }

   return {
      ...FormState,
      FormState,
      onInputChange,
      onResetForm
   };
};