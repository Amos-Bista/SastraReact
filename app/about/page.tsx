import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import Testo from "@/components/testo"; 
import Expert from "@/components/Expert";

import { TbSettingsCog } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineWifi } from "react-icons/md";
import { HiDatabase } from "react-icons/hi";
import { FaHandshakeSimple, FaVideo } from "react-icons/fa6";
import { SiSpringsecurity } from "react-icons/si";
import { TiWiFi } from "react-icons/ti";
import AboutImg from "@/components/aboutImg";
import AboutBox from "@/components/aboutBox";
import { IconBaseProps } from "react-icons";
import AboutExp from "@/components/AboutExp";
import { IoMan } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTimer } from "react-icons/io";
import { BsAlexa } from "react-icons/bs";


export default function About() {
  return (
    <main>
      <div className="pt-10">
        <AboutImg />
        <div className="py-20 px-20" >
            <div className="my-6">
                <h1 className="text-l font-bold text-sky-600">OUR STORY</h1>
            </div>
            <div>
                <h1 className="font-bold text-3xl text-blue-900 mb-4">Networking Company</h1>
                <p>Established in the year 2003, Sastra concentrates on providing state-of-art technology solutions in system integration, network architecture, integrated cross-platform client-server  infrastructure design and implementation, supporting and maintaining a wide variety of networking services with an emphasis on standards compliance and optimization.</p>
            </div>
            <div className="my-8">
                <h1 className="text-l font-bold text-sky-600">OUR MISSION</h1>
            </div>
            <div>
                
                <p>Sastra’s mission is to be the paramount in ICT service and solution provider, with concrete emphasis on ascertaining, qualifying and providing technology solutions that offer enduring business significance to our clients.</p>
            </div>
        </div>


        <div className="shadow-lg py-10">
          <div className="flex flex-col  mx-auto">
           
           <div className="flex flex-col">
            <div className="flex flex-wrap flex-row gap-8 mx-auto">
              <AboutBox  
                      text="20"  
  
                      desc="Years of experience"
               /> 
              <AboutBox
                      text="+500"
                      desc="Satisfied Clients"
                      />
              <AboutBox 
                      text="12+"
                      desc="Valued Partner"
                       />
            </div>
           </div>
          </div>
        </div>

       <div>
        <div className="my-20 flex flex-col ">
           <h1 className="text-blue-900 text-l font-bold mb-8 flex justify-center">OUR EXPERTISE</h1>
           <h2 className="text-sky-600 text-3xl font-bold flex justify-center">Why Choose Us</h2>
             <div className="flex justify-center gap-10 ">
             <AboutExp
                logo={<IoMan size={80}  className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"/>}
                 text="Experties"
                 desc="With a team of highly skilled and prowess individuals, Sastra has flawlessly executed many ambitious projects. With required skills in our arsenal we can help you sail through uncertain future more smoothly."
             />
             <AboutExp
                    logo={<VscWorkspaceTrusted size={80}  className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200" />}
                 text="Reliability"
                 desc="During its extensive market presence, Sastra has been a reliable partner and service provider to many well known organization and entities. We respect the trust devoted by our customer and partners and strive to give optimum output."
             />
             </div>
             <div className="flex justify-center gap-10 ">
             <AboutExp
                logo={<IoMdTimer size={80}  className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"/>}
                 text="Punctual"
                 desc="We respect our customer’s precious time and also understand that time accompanies a cost, so we mobilize ourselves with a intention to always keep you in surplus."
             />
             <AboutExp
                    logo={<BsAlexa size={80}  className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200" />}
                 text="Relevance"
                 desc="In this uncertain and ever changing world, we believe that our team should be well aware about the present market condition and give our customer relevant solution which will save them energy, money and time."
             />
             </div>
        </div>
       </div>

        
        
      </div>
    </main>
  );
}
