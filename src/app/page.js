import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import Stats from "../sections/Stats";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";
import StorySection from "../sections/StorySection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Process from "../sections/Process";

export default function Home(){

return(
<>
<Navbar/>

<Hero/>

<StorySection/>

<Services/>

<Process/>

<Portfolio/>

<Stats/>

<CTA/>

<Contact/>

<Footer/>

<WhatsAppButton/>
</>
)

}