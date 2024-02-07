import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import Testo from "@/components/testo"; 

export default function Home() {
  return (
    <main>
      <div className="pt-10">
        <HeroSection />
        <div className="w-[70%] flex m-auto mt-10">
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
