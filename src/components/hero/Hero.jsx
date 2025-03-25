import Nav from "../nav/Nav";
import HeroContent from "./HeroContent";
import SlideShow from "./SlideShow";
const Hero = () => {
    return(
        <div className="grid lg:gap-10 w-full">
            <div  style={{ backgroundImage: 'var(--background-image-radial)',width: '100vw',}}
             className="w-full h-auto min-h-[60vh]  lg:min-h-[70vh] md:min-h-[60vh]  flex flex-col justify-center font-family-figtree">
             <Nav/>
             <HeroContent/>
            </div>
           <div className="overflow-hidden w-full grid place-items-center gap-4 mt-4">
             <span className="text-[#667085]   text-center w-[80%]">Join 4,000+ companies already growing</span>
             <SlideShow/>
           </div>
           
        </div>
    )
}

export default Hero