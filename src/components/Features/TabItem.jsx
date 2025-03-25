const TabItem = ({content, isActive , width , ref , changeTab ,id} ) => {
    return(
        <button id={id} onClick={(e) => {changeTab(e,id)} } ref={ref} className={`lg:${width} h-[30px] lg:h-[36px] lg:text-[16px] text-xs whitespace-nowrap rounded-[5px] p-1 lg:rounded-lg`}>{content}</button>
    )
}

export default TabItem