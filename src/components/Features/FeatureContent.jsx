import FeatureSlide from "./FeatureSlide"
import TabCont from "./TabCont"
import { useRef , useEffect, useState } from "react"
const Content = () => {
    const cardRef = useRef([]);
    const tabRef = useRef([]);
    const [ activeTab , setActiveTab ] = useState(null)
    const [ isActive , setIsActive ] = useState(null)
    useEffect(() => {
        const cardCont = Array.from(cardRef.current);
        cardCont.forEach(card => {
            if (card.querySelector('span').innerText.includes(activeTab?.trim())) {
                card.scrollIntoView({ block: 'center', behavior: 'smooth' });
                const scrollTimeout = setTimeout(() => {
                    card.style.transition = 'transform 0.5s ease-in-out';
                    card.style.transform = 'translateY(-50px)';
                    clearTimeout(scrollTimeout);
                  }, 500);
            }
        })
       //console.log(isActive)
    },[cardRef, activeTab,isActive])

    

    const changeTab = (e ,id) => {
        setActiveTab(e.target.innerText)
        if (isActive) {
            const previousActiveElement = document.getElementById(`${isActive}`)
            if (previousActiveElement) previousActiveElement.classList.remove("bg-[#03217F]", "text-white")
        }
        setIsActive(id);
        e.target.classList.add("bg-[#03217F]" ,"text-white");
    }
    return(
        <div className=" lg:w-[100vw]  h-auto md:min-h-[60vh]  lg:min-h-[100vh] grid gap-8 overflow-hidden">
            <div className="xl:w-[60%] lg:w-[80%] w-[90%] text-center mx-auto grid lg:gap-5">
              <h2 className="lg:text-[50px] text-[30px] text-[#22263F]">AI Models tailored for your business needs</h2>
              <p className="text-[#828282] text-[22px] font-family-sans">Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs</p>
              <TabCont
               tabRef={tabRef}
               changeTab={changeTab}
              />
            </div>
           <FeatureSlide
            cardRef={cardRef}
           />
        </div>
    )
}

export default Content