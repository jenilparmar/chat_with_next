import React, { useState } from "react";
import { MdVideoCall } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Input from "@/Components/Input";

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(prevMessages => [message]);
  };

  return (
    <>
      <div className="w-screen h-screen bg-cyan-800 flex flex-col justify-between">
        <div className="w-full h-16 bg-cyan-700 flex flex-row items-center px-2 z-10">
          <div className="rounded-full w-12 h-12 bg-cyan-600"></div>
          <p className="font-bold text-2xl px-2 text-white">Jenil</p>
          <div className="ml-auto px-2 flex flex-row space-x-4 text-4xl text-white">
            <MdVideoCall />
            <IoCall />
          </div>
        </div>
        <div className="flex-col-reverse flex pb-16 md:w-full overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className="ml-8  md:w-9/12 text-white md:self-end md:mr-6 h-fit  transition-all scale-105 duration-100 bg-cyan-900 indent-4  mb-2 p-2 rounded-lg">
              {message}
            </div>
          ))}
        </div>
      </div>
      <Input addMessage={addMessage} />
    </>
  );
}

export default ChatWindow;
