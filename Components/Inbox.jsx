import React from "react";
import { signOut } from "next-auth/react";
import { GoSignOut } from "react-icons/go";
import ChatProfile from "./ChatProfile";
const inbox = ({DATA}) => {
  return (
    <>
       <div className="w-screen h-screen flex flex-col justify-center ">
      <div className="w-full md:w-5/12 lg:w-3/12 h-screen flex flex-col bg-gray-700 self-center">
      <div className="w-full h-12 -mt-2 rounded-lg flex flex-row px-2 justify-between bg-gray-800">
        <p className="self-center text-white font-medium">Hii {DATA}</p>
        <button onClick={() => signOut()} >
        <GoSignOut className="text-xl text-white active:scale-95" />
     </button>
      </div>
      <ChatProfile/>
      </div>
    </div>
    </>
  );
};

export default inbox;

    // <div>
    //   Hi {DATA}
    //  
    // </div>