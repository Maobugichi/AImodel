import { motion } from "motion/react"

const Button = ({content,className}) => {
    return(
        <motion.button
        whileHover={{scale:0.9 , transition: "spring" }}
        whileTap={{scale: 1.2, transition:"spring"}}
        className={`h-[37px] ${className} rounded-[5px]`}>{content}</motion.button>
    )
}

export default Button