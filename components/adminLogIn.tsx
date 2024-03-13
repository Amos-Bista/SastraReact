"use client";

import React from "react";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen ">
      <div className="h-[50%] flex-col justify-center shadow-lg w-[100%] p-[2%] border-t-4 bg-sky-400/10 border-blue-400 rounded-xl">
        <h1 className=" flex justify-center text-xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-4">
          <input
            className="pl-[5%] py-[10%] h-12 w-80  rounded-xl "
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="pl-[5%] py-[10%] h-12 w-80  rounded-xl "
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-500 rounded-xl text-white font-bold cursor-pointer px-6 py-4 hover:bg-blue-700">
            Login
          </button>

          <div className="flex justify-center">
            {error && (
              <div className=" bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
          </div>

          <Link
            className="text-sm mt-3 text-right"
            href={"/admin/adminRegisterPage"}
          >
            Don't have an account?{" "}
            <span className="underline text-blue-800 hover:scale-125 ">
              Register
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
