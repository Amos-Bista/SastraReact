import AdminLogIn from "@/components/adminLogIn";
import AdminNav from "@/components/adminNAV";
import React from "react";

const AdminLoginPage = () => {
  return (
    <div className="flex ">
   
      <div className="w-full flex justify-center">
        <AdminLogIn />
      </div>
    </div>
  );
};

export default AdminLoginPage;
