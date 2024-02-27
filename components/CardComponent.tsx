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
        className="w-[98%] md:w-[70%] lg:w-[50%] h-[50%] mx-auto  justify-center mb-10" // Outer Div
      >
        <div
          className=" w-[100%] h-[100%]  pt-2 pb-2 shadow-2xl border-sky-100 bg-white hover:shadow-2xl my-10 transition-all ease-in-out rounded-xl" //Inner div card Starts Here
        >
          <div
            className="  pl-[3%] border-b-2 border-sky-900 pb-2" //Upper Part of the Card
          >
            <div
              className=" pt-[2%] flex justify-between h-[20%]" //logo & header of the card
            >
              <div
                className="w-[30%] " //logo
              >
                <img
                  src="https://sastranetwork.com/storage/2021/05/sastra-logo-2048x1220.png"
                  alt="sastra"
                  className="h-18 pl-[5%] "
                />
              </div>
              <div
                className=" w-[70%] flex justify-center pt-[3%] pl-[5%] " //header of the card
              >
                <h1 className="font-extrabold text-3xl">
                  Sastra Network Solution Inc.
                </h1>
              </div>
            </div>

            <section
              className=" px-[5%] flex w-[100%]  " //lower Details Starts here
            >
              <div
                className="w-[55%] pl-[1%] pt-[2%]" //Deatails of the Staff
              >
                <div className="pt-[8%] pb-[2%] flex">
                  <h1 className="font-semibold text-xl">ID : -</h1>
                  <p className="text-xl font-sans pl-2 font-semibold">32</p>
                </div>
                <div className="flex py-1">
                  <h2 className="text-s font-sans font-bold ">Email : - </h2>
                  <p className="text-s font-sans pl-2">bistaamosh@gmail.com</p>
                </div>
                <div className="flex py-1">
                  <h2 className="text-s font-sans font-bold ">Phone : - </h2>
                  <p className="text-s font-sans pl-2">9813075481</p>
                </div>
                <div className="flex py-1">
                  <h2 className="text-s font-sans font-bold ">Address : -</h2>
                  <p className="text-s font-sans pl-2">Greenland, Tokha-8</p>
                </div>
                <div className="flex py-1">
                  <h2 className="text-s font-sans font-bold ">
                    Blood Group : -
                  </h2>
                  <p className="text-s font-sans pl-2">O+</p>
                </div>
              </div>

              <div
                className="flex justify-center w-[40%] h-[100%] " //Card Image & Name & Position
              >
                <div className="h-[100%] flex-col justify-center">
                  <div className="   flex justify-center">
                    <div
                      className=" w-48 h-48 rounded-full flex justify-center item-center border-2 border-sky-700 overflow-hidden" //Image div
                    >
                      {/* <img                        //Image of the staff
                        src="IMG_8569.jpg"
                        alt="ID image"
                        className="object-cover"
                      /> */}
                    </div>
                  </div>
                  <div
                    className="pt-[5%] w-[100%] flex-col justify-center" //Name and Position  div
                  >
                    <h1 className="py-[2%] text-l  font-sans font-semibold mx-auto flex justify-center">
                      Amosh ST Bista
                    </h1>
                    <h2 className="flex justify-center text-sm font-bold ">
                      Frontend Developer
                    </h2>
                  </div>
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
