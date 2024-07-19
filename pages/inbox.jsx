import Input from "@/Components/Input";
import React from "react";
import { MdVideoCall } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Image from "next/image";

function ChatWindow() {
  return (
    <>
      <div className="w-screen h-screen bg-cyan-800 flex flex-col justify-between">
        <div className="w-full h-16 bg-cyan-700 flex flex-row items-center px-2 z-10">
          <div className="rounded-full w-12 h-12 bg-cyan-600"></div>
          <p className="font-bold text-2xl px-2 text-white">Suzie</p>
          <div className="ml-auto px-2 flex flex-row space-x-4 text-4xl text-white">
            <MdVideoCall />
            <IoCall />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto  p-4">
       
        </div>
      </div>
      <Input />
    </>
  );
}

export default ChatWindow;
