import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CardComponent = () => {
  return (
    <div // Main div with background
      className="w-[100%] h-[100%] mx-auto flex justify-center"
      style={{
        backgroundImage:
          "url('https://billionbeesfx.com/wp-content/uploads/2023/08/who-we-are-vector.png ')",
        backgroundSize: "cover", // Cover the entire div
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div
        className="w-[98%] md:w-[70%] lg:w-[50%] h-[60%] mx-auto  justify-center mb-10 " // card outer Div
      >
        <div
          className="relative w-[100%] h-[100%]  pt-2 pb-2 shadow-2xl border-sky-100 bg-white hover:shadow-2xl my-10 transition-all ease-in-out rounded-xl" //Inner div card Starts Here
        >
          <div
            className="border-b-2 border-sky-900 pb-2" //Upper Part of the Card
          >
            <div
              className="flex justify-between h-40 bg-sky-100" //logo & header of the card
              style={{
                backgroundImage: "url(images/card.png)",
                backgroundSize: "cover", // Cover the entire div
                backgroundPosition: "center", // Center the background image
              }}
            ></div>

            <section
              className=" px-[5%] flex w-[100%]  " //lower Details Starts here
            >
              <div
                className="w-[55%] pl-[1%] pt-[2%]" //Deatails of the Staff
              ></div>

              <div
                className="flex justify-center w-[100%] h-[] " //Card Image & Name & Position
              >
                <div className="h-[100%]">
                  <div className="   flex  absolute top-16 left-10">
                    <div
                      className=" w-48 h-48 rounded-full flex justify-center item-center border-2 border-sky-700 overflow-hidden" //Image div
                    >
                      {
                        <img //Image of the staff
                          src="IMG_8569.jpg"
                          alt="ID image"
                          className="object-cover"
                        />
                      }
                    </div>
                  </div>
                 
                </div>
                    <div>
                      <h1>Amosh ST Bista</h1>
                    </div>
              </div>
            </section>
          </div>
          <section className="w-[100%] px-[5%] py-[2%] flex justify-between pt-[2%]">
            <div className="flex">
              <RiVerifiedBadgeFill size={25} className="text-green-600" />
              <h1 className="text-l font-semibold pl-2">Verifed Staff </h1>
            </div>
            <div>
              <p className="text-l font-semibold ">
                {" "}
                Visit
                <a href="/" className="text-sky-800 font-bold pl-1">
                  SASTRA NETWORK SOLUTION INC
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
