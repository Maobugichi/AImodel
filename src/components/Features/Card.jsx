import { motion } from "motion/react"
import { useEffect } from "react"

const Card = ({ title, text, src, alt , isActive , ref }) => {
   
    return(
        <motion.div
        ref={ref}
        initial={{y:0}}
        animate={{y:isActive ? -20 : 0}}
        className="bg-[#F6FAF3] lg:w-[1042px]  h-auto md:min-h-[30vh] min-h-[40vh] rounded-lg flex ml-1 flex-col md:flex-row items-center">
            <div className="lg:w-[950px] md:w-[720px] w-[300px] h-1/2 lg:grid bg-re` place-items-center text-center gap-3 p-4">
             <span className="md:text-[19px] text-[15px] text-[#828282]">{title}</span>
             <h3 className="lg:text-[42px] md:text-[32px] text-[20px] text-[#22263F]">{text}</h3>
             <button className="bg-[#03217F] w-[133px] h-[35px] text-[12px] md:text-[16px] rounded-md text-white">
                Learn More
             </button>
            </div>
            <img className="lg:w-[500px] md:w-[350px]" src={src} alt={alt} />
        </motion.div>
    )
}

export default Card 