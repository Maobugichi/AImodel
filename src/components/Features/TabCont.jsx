import TabItem from "./TabItem"

const TabCont = ({tabRef , changeTab}) => {
    const tab = [
        {
         id:"1",
         text:"Market Prediction",
         width:"lg:w-[158px]" 
        },
         {
            id:"2",
            text: "Finance",
            width:"lg:w-[85px]"
         },  
         {
            id:"3",
            text: "Analytics",
            width:"lg:w-[96px]"
         }, 
         
         {
            id:"4",
            text: "Content Generation",
            width:"lg:w-[174px]"
         }, 
         
         {
            id:"5",
            text: "Customer Support",
            width: "w-[164px]"
         }, ]

    const tabItem = tab.map((item,i) => <TabItem ref={(el) => (tabRef.current[i] = el)} id={item.id} key={item.id} content={item.text} width={item.width} changeTab={changeTab}/>)
    return(
        <div className="border-2 border-[#E4E4E7]  rounded-md lg:w-[95%] w-full flex justify-between h-[44px] mx-auto items-center">
         <div className="w-full md:w-[95%]  mx-auto flex justify-between">
          {tabItem}
         </div>
           
        </div>
    )
}

export default TabCont