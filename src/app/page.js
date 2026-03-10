import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StorySection from "../components/StorySection";

export default function Home(){

return(
<>
<Navbar/>
<Hero/>
<StorySection/>
<Services/>
<Portfolio/>
<Stats/>
<CTA/>
<Contact/>
<Footer/>
<WhatsAppButton/>
</>
)

}