import content from "../../assets/content.svg";
import ButtonCont from "./ButtonCont";
import ListItem from "./ListItem";
import { useEffect , useState } from "react";
const Nav = () => {
    const [ innerWidth , setInnerWidth ] = useState()
    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener("resize" , handleResize)
        }
    },[])
    return(
        <div className="w-full h-24  grid relative top-0">
            <div className="w-[95%] flex items-center justify-between mx-auto">
                <div className="w-[20%]">
                <img src={content} alt="company logo" />
                </div>
              
              <svg className="lg:hidden" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M7.94971 11.9497H39.9497"></path><path d="M7.94971 23.9497H39.9497"></path><path d="M7.94971 35.9497H39.9497"></path></g></svg>  
              <ListItem/> 
              <ButtonCont/> 
            </div>
           
        </div>
    )
}

export default Nav