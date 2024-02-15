import React from "react";

function Testo() {
  return (
    <div className="h-90 w-[100%] bg-gray-200 flex justify-center gap-4 py-10 px-10 mt-16">
      <div className=" w-[22%]">
        <div className=" py-6 px-10">
          <h1 className=" text-sm text-roboto w-[100%] font-bold text-blue-500">
            WHAT OUR CLIENT SAYS
          </h1>
          <br />
          <h2 className=" font-semibold font-Poppins text-3xl">Testimonials</h2>
        </div>
      </div>
      <div className=" bg-white w-[28%] py-10 px-10 border-b-4 border-blue-500">
        <div className="">
          <p className="italic">
            " Sastra Network has been instrumental in helping governmental
            bodies like us to implement latest technology and ensure proper
            functionality of critical operations. With government's data
            security and integrity being top priority, Sastra's expertise and
            services have been a great aid to MOFA in the path of nation's
            development. "
          </p>
          <br />
          <div>
            <h1>Bikram Shrestha</h1>
            <p className="text-xs">
              IT Officer - Ministry of Foreign Affairs, Nepal
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white w-[28%] py-10 px-10 border-b-4 border-blue-500">
        <p className="italic">
          "Thanks to Sastra's incredible service and great products, we are able
          to implement cutting-edge technology in order to meet our business
          needs. Sastra's quick response and support has been a bonus for smooth
          and uninterrupted IT service contributing to our overall growth. "
        </p>
        <br />
        <br />
        <br />
        <div>
          <h1>Ananta Kattel</h1>
          <p className="text-xs">IT Manager - Hotel Crowne Imperial</p>
        </div>
      </div>
    </div>
  );
}

export default Testo;
