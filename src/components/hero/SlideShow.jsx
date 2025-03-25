import quoLogo from "../../assets/quoLogo.svg";
import catLogo from "../../assets/catLogo.svg";
import cirLogo from "../../assets/cirLogo.svg";
import sisLogo from "../../assets/sisLogo.svg";
import SlideItem from "./SlideItem";
import { motion } from "motion/react";
import { useState,useEffect } from "react";

const SlideShow = () => {
    const slideitemObject = [
        {
            id:"#1",
            src:quoLogo,
            text: "Quotient"
        },
        { 
            id:"#2",
            src:sisLogo,
            text: "Sisyphus"
        },
        {
            id:"#3",
            src: cirLogo,
            text: "Circooles"
        },
        {
            id:"#4",
            src: catLogo,
            text: "Catalog"
        },
        {
            id:"#5",
            src: cirLogo,
            text: "Circooles"
        },
    ];
    const [x , setX] = useState({
        xPositive: 700,
        xNegative: -1500
    })
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    },[])

    useEffect(() => {
        if (windowWidth < 600) {
            setX({
                xPositive:500,
                xNegative:-1000
            })
        }
    },[windowWidth])
    const items = slideitemObject.map(item => {
        return(
            <SlideItem
             key={item.id}
             src={item.src}
             alt={item.text}
             text={item.text}
            />
        )
    })
    return(
        <div className="grid w-full overflow-hidden gap-5 h-32">
            <motion.div
            initial={{x:x.xPositive}}
            animate={{x:x.xNegative}}
            transition={{repeat: Infinity, repeatType:"loop", duration:5}}
            className="flex w-[95%] gap-10  mx-auto ">
                {items}
            </motion.div>
        </div>
    )
}

export default SlideShow