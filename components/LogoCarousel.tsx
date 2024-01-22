import Image from "next/image";

import election from "@/public/election.png";
import ntc from "@/public/ntc.png";
import cg from "@/public/cg.png";
import crown from "@/public/crown.png";
import adbl from "@/public/adbl.png";
import kendra from "@/public/kendra.png";
import nitc12345 from "@/public/nitc12345.png";
import nta1 from "@/public/nta1.png";
import opmcm123456789 from "@/public/opmcm123456789.png";
import police123456 from "@/public/police123456.png";

export default function LogoCarousel() {
  const logos = [
    { src: election, alt: "Election" },
    { src: ntc, alt: "ntc" },
    { src: cg, alt: "cg" },
    { src: crown, alt: "crown" },
    { src: adbl, alt: "adbl" },
    { src: kendra, alt: "kendra" },
    { src: nitc12345, alt: "nitc12345" },
    { src: nta1, alt: "nta1" },
    { src: opmcm123456789, alt: "opmcm123456789" },
    { src: police123456, alt: "police123456" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-60 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-60 animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
