import Features from "./Features/Features"
import Hero from "./hero/Hero"
import SlideShow from "./hero/SlideShow"

const HomePage = () => {
    return(
        <div className="overflow-hidden grid gap-20 h-auto min-h-[100vh] lg:min-h-[200vh]  w-full">
         <Hero/>
         <Features/>
        </div>
    )
}

export default HomePage