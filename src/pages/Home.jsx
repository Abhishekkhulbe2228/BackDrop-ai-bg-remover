import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";
import Header from "../components/Header";
import Pricing from "../components/pricing";
import Testimonials from "../components/Testimonials";
import TryNow from "../components/TryNow";

const Home = () => { 
    return ( 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
            {/* Hero Section*/}
            <Header />

            {/* Background remooval steps section*/}
            <BgRemovalSteps />

            {/*Background removal slider section */}
            <BgSlider />
            
            {/* Buy credits plan section*/}
            <Pricing />

            {/* User testing section*/}
            <Testimonials />

            {/* Try now section*/}
            <TryNow />
       </div>
    )
}

export default Home