import AdminLogIn from "@/components/adminLogIn";
import AdminNav from "@/components/adminNAV";
import React from "react";

const page = () => {
  return (
    <div className="flex ">
      <AdminNav />
      <div className="w-full flex justify-center">
        <AdminLogIn />
      </div>
    </div>
  );
};

export default page;
