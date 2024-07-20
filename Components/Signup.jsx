import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthButton from "./AuthButton";

export default function Signup() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    alert("hi")
    e.preventDefault();
    // Redirect to OTP verification page with email as a query parameter
    router.push(`/OtpVerification?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      <div className="bg-gray-800 text-white shadow-lg w-10/12 h-fit p-4 self-center rounded-md flex flex-col md:w-8/12 lg:w-3/12">
        <strong className="text-center p-4 text-3xl">Signin</strong>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-11/12 self-center h-12 mt-3 text-black px-3 placeholder:px-1 rounded-lg placeholder:p-4 focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-11/12 self-center h-12 text-black px-3 placeholder:px-1 rounded-lg mt-3 placeholder:p-4 focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-xl font-bold p-3 text-white bg-blue-800 w-11/12 text-center divWheat rounded-md active:bg-blue-900 active:scale-95 transition-colors duration-100 ease-in-out self-center mt-4 md:w-8/12 lg:w-11/12"
          >
            Signin
          </button>
        </form>
        <div className="h-0.5 self-center mt-3 rounded-xl w-11/12 bg-orange-100 md:w-8/12 lg:w-11/12"></div>
        <div className="self-center my-2">
          <AuthButton />
        </div>
      </div>
    </>
  );
}
