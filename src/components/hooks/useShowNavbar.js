import { useEffect, useState } from "react"

export const useShowNavbar = () => {

   const [isActive, setIsActive] = useState(false)
   const [isChecked, setIsChecked] = useState(true)

   const activeNavbar = () => {
      setIsActive(!isActive)
      setIsChecked(!isChecked)
   }

   useEffect(() => {
      const handleScroll = () => {
         setIsActive(false)
         setIsChecked(false)
      }

      window.addEventListener('scroll', handleScroll)
   
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   

   return {
      isActive,
      activeNavbar,
      isChecked,
  }
}
