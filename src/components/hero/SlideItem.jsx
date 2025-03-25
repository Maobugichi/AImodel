const SlideItem = ({src, alt, text}) => {
    return(
        <div className="w-[200px] lg:w-[300px] text-[#101828] grid place-items-center">
            <img src={src} alt={alt} />
            <p>{text}</p>
        </div>
    )
}

export default SlideItem