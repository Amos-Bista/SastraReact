import React from "react";
import AdminNav from "@/components/adminNAV";

const AdminCareer = () => {
  return (
    <main className="w-full flex pt-[5%]">
      <div className="w-[18%] mt-[5%]">
        <AdminNav />
      </div>
      <div className=" flex ml-[2%] border-4 w-[100%]">
        <div className="flex-col w-[100%]">
          <div className="border-b-4 pt-[2%] mt-[1%] ">
            <h1 className="flex justify-center text-3xl font-semibold ">
              Career Page - Admin Panel
            </h1>
          </div>

          <div className="pt-[5%]">Component</div>
        </div>
      </div>
    </main>
  );
};

export default AdminCareer;
