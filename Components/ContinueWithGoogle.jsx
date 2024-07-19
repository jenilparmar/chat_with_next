import React from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
const ContinueWithGoogle = () => {

  return (
    <>
      {" "}
      <button
        onClick={() => signIn("google")}
        className="w-32 bg-red-500 h-10 text-center p-2">
        <FcGoogle /> Continue with Google
      </button>
     <div className="text-red-500"></div>
    </>
  );
};

export default ContinueWithGoogle;
