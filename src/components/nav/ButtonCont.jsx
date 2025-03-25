import Button from "../Button";

const ButtonCont = () => {
    const buttonInfo = [{
        content:"Login",
        class:"border border-white w-[60px] lg:w-[88px] md:text-[12px] text-white text-[14px]"
    },
    {
        content:"Get Started Now ",
        class:"bg-[#FFFFFF] lg:w-[128px] w-[100px] md:text-[12px] lg:text-[14px]"
    }
   ];

    const buttons = buttonInfo.map(item => {
        return(
            <Button
             content={item.content}
             className={item.class}
            />
        )
    })
    return(
        <div className="hidden lg:flex w-[25%] lg:w-[20%] justify-between">
            {buttons}
        </div>
    )
}

export default ButtonCont