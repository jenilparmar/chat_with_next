import React from "react";
import Link from "next/link";
import AuthButton from "./AuthButton";
export default function Signup() {
  return (
    <>
      <div className=" bg-gray-800 text-white shadow-lg w-10/12 h-fit p-4 self-center rounded-md flex flex-col md:w-8/12 lg:w-4/12 lg:top-8">
        <strong className="text-center p-4 text-4xl">Signin</strong>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="w-11/12 self-center h-12 mt-3 text-black px-3 placeholder:px-1 rounded-lg placeholder:p-4  focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-11/12 self-center h-12 text-black px-3 placeholder:px-1 rounded-lg mt-3 placeholder:p-4  focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
        />
        <button className="text-2xl font-bold p-3 text-white bg-blue-800 w-11/12 text-center divWheat rounded-md active:bg-orange-100 transition-colors duration-100 ease-in-out self-center mt-4 md:w-8/12 lg:w-11/12">
          Signin
        </button>
        <p className="flex flex-row self-center my-2 gap-2">
          Don't have an account?{" "}
          <Link href={"./"} className="text-blue-500 active:text-blue-600">
            Login
          </Link>
        </p>
        <div className="h-0.5 self-center  rounded-xl w-11/12 bg-orange-100 md:w-8/12 lg:w-11/12"></div>
<div className="self-center my-2">
<AuthButton />
</div>      </div>
    </>
  );
}
