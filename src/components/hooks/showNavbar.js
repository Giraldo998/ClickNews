import { useState } from "react"

export const showNavbar = () => {

   const [isActive, setIsActive] = useState(false)

   const activeNavbar = () =>{
      
      setIsActive(!isActive)
      console.log('active');
   } 

   return {
      ...isActive,
      isActive,
      activeNavbar
  }
}
