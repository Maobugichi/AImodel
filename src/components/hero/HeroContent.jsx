import Button from "../Button"

const HeroContent = () => {
    return(
        <div className="w-[90%] md:w-[80%]  xl:w-[60%] text-center mx-auto h-auto min-h-[60vh] md:min-h-[30vh] grid place-items-center gap-2 pb-4">
            <span className="text-[#7191FF] text-[16px]">Leverage on Automation</span>
            <h1 className="text-[30px] text-white lg:text-[76px]">AI Models for Business Solutions</h1>
            <p className=" text-[20px] lg:text-[22px] text-white font-family-sans">Leveraged the power of AI to automate, analyze , and optimize your workflows. Our specialized models are designed to fit different business needs</p>
            <Button
             content="Get Started Now"
             className="bg-[#ffffff] w-[192px]"
            />
        </div>
    )
}

export default HeroContent