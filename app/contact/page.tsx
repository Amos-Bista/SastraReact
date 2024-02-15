"use client";

import React, { useState } from "react";
import ContactImg from "@/components/contactCover";
import ContactBox from "@/components/contactBox";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GoogleMapsEmbed } from "@next/third-parties/google";

import Map from "@/components/Map";

export default function CareerPage() {
  const markers = [
    { position: { lat: 40.7128, lng: -74.006 }, title: "New York City" },
    { position: { lat: 34.0522, lng: -118.2437 }, title: "Los Angeles" },
    // Add more markers as needed
  ];
  return (
    <div>
      <ContactImg />
      <br />
      <br />
      <div className="w-[100%] flex justify-center mx-auto">
        <div className="pl-120 w-[100%] flex justify-center gap-6">
          <ContactBox
            text={"Phone"}
            desc={"+977-1-5342523"}
            desc2={"+977-1-5363967"}
            logo={
              <FaPhoneAlt
                size={35}
                className=" hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            }
          />
          <ContactBox
            text={"Email"}
            desc={"info@sastranetwrok.com"}
            desc2={"it@sastranetwrok.com"}
            logo={
              <MdMarkEmailRead
                size={35}
                className=" hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            }
          />
          <ContactBox
            text={"Address"}
            desc={"1st floor, Dream Home Building"}
            logo={
              <FaLocationDot
                size={35}
                className="hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
              />
            }
          />
        </div>
      </div>
      <div className="w-[100%] bg-sky-600 px-64 py-20">
        <form action="">
          <h1 className="font-bold text-white text-3xl my-4">
            Get in Touch with us.
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="w-[35%] my-2 px-4 py-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[35%] my-2 px-4 py-1"
            />
            <input
              type="phone"
              placeholder="Phone no"
              className="w-[35%] my-2 px-4 py-1"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-[35%] my-2  px-4 py-1"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[80%] h-44 my-2 px-4 py-1 flex justify-start"
            />
            <br />
            <div></div>
            <br />
            <button className="h-10 w-20 bg-white font-mono text-l hover:scale-110 hover:bg-gray-200 ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <h1>Map Example</h1>
          <Map markers={markers} />
        </div>
      </div>
    </div>
  );
}
