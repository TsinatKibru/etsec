import Advertisement from "@/components/Advertisement";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HumanCapital from "@/components/HumanCapital";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import PaymentPlans from "@/components/PaymentPlans";
import SecurityServiceCards from "@/components/SecurityServiceCards";
import ServiceTypes from "@/components/ServiceTypes";
import TechnologyComponent from "@/components/TechnologyComponent";
import InclinedBorderComponent from "@/components/test";
import Image from "next/image";


export default function Home() {
  return (
    <div className=" text-darkbluegray overflow-x-hidden ">
      <div className=" md:px-44 ">
       <div className="hidden md:block"><Navbar/></div>
       <div className="block md:hidden"><MobileNavbar/></div>
       <div id="hero">
          <HeroSection />
        </div>
      </div>

      <div className="  ">
        <InclinedBorderComponent />
      </div>
    
      <div className="top-56 bg-verylightblue " id="services" >
        <SecurityServiceCards />
        <Advertisement />
      </div>
       
      <div className="bg-gradient-to-b from-verylightblue to-white" id="technology">
        <TechnologyComponent />
      </div>
       
      <div className=" z-50" id="service-types">
        <ServiceTypes />
      </div>
     
      <div className=" mt-18 bg-verylightblue" id="human-capital">
        <HumanCapital />
        
      </div>
      
      <div className=" " id="payment-plans">
        <PaymentPlans />
        
      </div>
      
      <div className="mt-20 " id="footer">
        <Footer />
        
      </div> 
    </div>
  );
}
