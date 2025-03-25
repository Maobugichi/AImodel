import Card from "./Card";
import { cardDetails } from "../../actions";
import { useEffect, useRef } from "react";

const FeatureSlide = ({cardRef}) => {

    const cardItems = cardDetails.map((card,i) => {
        return(
            <Card
             ref={(el) => (cardRef.current[i] = el)}
             key={card.key}
             title={card.title}
             text={card.text}
             src={card.src}
             alt={card.title}
            />
        )
    })
    return(
        <div className="pb-10  lg:pb-0 flex items-end w-[95%] h-auto min-h-[80vh] h-600:text-xsm h-600:text-md h-600:text-lg  h-600:text-xl h-600:text-2xl h-600:text-3xl h-600:text-4xl  mx-auto lg:gap-10 lg:overflow-hidden overflow-x-auto snap-x snap-mandatory">
            {cardItems}
        </div>
    )
}

export default FeatureSlide