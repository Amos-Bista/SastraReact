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


export default function Home() {
  return (
    <main>
      <div className="pt-10">
        <HeroSection />
        <div className="w-[70%] flex m-auto mt-20">
          <div className="w-[50%] border-r-2">
            <p className="text-4xl text-right pr-[5%] font-bold">
              Why choose us
            </p>
          </div>
          <div className="w-[35%] text-left pl-[3%]">
            With more than a decade of experience and diverse portfolio of
            implemented projects, we possess required market expertise to
            provide you with best support and solution.
          </div>
        </div>


        <div className="shadow-lg py-20">
          <div className="flex flex-col  mx-auto">
            <h1 className="text-3xl font-bold text-gray-700 text-mono mt-10   flex justify-center  ">Our Expertise </h1>
           
           <div className="flex flex-col">
            <div className="flex flex-wrap flex-row gap-8 mx-auto">
              <Expert  
                      logo={<TbSettingsCog size={55} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200" />}
                      text="Network Desgin"
                      desc="Optimum network design to meet your ever changing  business  needs"
               /> 
              <Expert 
                      logo={<HiDatabase size={60} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"/>}
                      text="Data Center"
                      desc="Complete solution for data center design with service continuity, security, flexibility and adaptability to changes"
                      />
              <Expert 
                      logo={<FaVideo size={60} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"/>}
                      text="Video Conferencing"
                      desc="Stay connected with your stakeholders anytime, anywhere with our flawless VC solution" />
            </div>
            <div className="flex flex-wrap flex-row gap-8 mx-auto">
              <Expert  
                      logo={<SiSpringsecurity size={60} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"/>}
                      text="Network Security"
                      desc="Securing your network against threats and vulnerability over internet"
               />
              <Expert 
                      logo={<TiWiFi size={60} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200" />}
                      text="Wireless"
                      desc="Design, plan and install efficient wireless solution at your premises"
                      />
              <Expert 
                      logo={<FaHandshakeSimple size={60} color="blue" className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200" />}
                      text="IT Consultancy"
                      desc="Evaluate and implement your IT system and infrastructure to help you achieve business objectives" />
            </div>
           </div>
          </div>
        </div>

        <div className="flex bg-gradient-to-r from-gray-500 to-slate-900 rounded-xl text-white text-lg mt-10 items-center m-auto lg:w-[65%] md:w-[80%] sm:w-[100%]">
          <div className="w-[70%] h-40 font-extralight overflow-hidden">
            <p className="px-10 py-4">
              “We believe in our well talented and experienced experts who take
              pride and ownership in their jobs. With the right mixture of
              optimum solution and our experts, we give you the tailor made
              solution and consultation to meet your current business need which
              will also account for future ambiguity.”
            </p>
          </div>
          <div className="py-4 font-bold text-l">
            <p className="">Kishor Panth</p>
            <p className="">CEO</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-center font-extrabold text-2xl mb-10">
            Our Valued Clients
          </p>
          <LogoCarousel />
          <Testo />
        </div>
      </div>
    </main>
  );
}
