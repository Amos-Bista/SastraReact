import React from "react";

const AdminNav = () => {
  const Image = {
    height: "100px",
    width: "200px",
    margin: " 0 0 0 10px",
  };

  return (
    <div className="h-100%  bg-sky-300/60">
      <div className=" flex-col justify-center">
        <div className="py-10 flex justify-center">
          <img src="favicon.ico" alt="" className="" style={Image} />
        </div>

        <ul className=" flex-col py-[10%]">
          <li className="flex justify-center px-[2%] py-[2%] text-3xl text-white hover:text-black font-bold hover:bg-white hover:border-sky-200 borber-b-2 rounded-lg ">
            <a href="#">Home</a>
          </li>

          <li className="flex justify-center px-[2%] py-[2%] text-3xl text-white hover:text-black font-bold hover:bg-white hover:border-sky-200 borber-b-2 rounded-lg">
            <a href="">About</a>
          </li>

          <li className="flex justify-center px-[2%] py-[2%] text-3xl text-white hover:text-black font-bold hover:bg-white hover:border-sky-200 borber-b-2 rounded-lg">
            <a href="">Career</a>
          </li>

          <li className="flex justify-center px-[2%] py-[2%] text-3xl text-white hover:text-black font-bold hover:bg-white hover:border-sky-200 borber-b-2 rounded-lg">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;
