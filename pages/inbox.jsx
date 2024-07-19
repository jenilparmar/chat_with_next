import { useRouter } from "next/navigation";
function ChatWindow({email}) {
 const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.status === 200) {
     alert("OTP varifiend")
    } else {
     
    }
  };

  return (
   <>
   <div className="w-screen h-screen justify-center flex-col flex">
   <div className=" bg-gray-800 text-white shadow-lg w-10/12 h-fit py-6 p-4 self-center rounded-md flex flex-col md:w-8/12 lg:w-3/12 ">
        <strong className="text-center py-4 text-2xl">Opt Verification</strong>
     
        <input
          type="number"
          name="otp"
          id="otp"
          placeholder="Enter your OTP here"
          className="w-11/12 text-sm self-center h-12 mt-3 text-black px-3 placeholder:px-1 rounded-lg placeholder:p-4  focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
        />
     
        <button className="text-sm font-bold p-3 text-white bg-blue-800 w-11/12 text-center divWheat rounded-md active:bg-blue-900 active:scale-95 transition-colors duration-100 ease-in-out self-center mt-4 md:w-8/12 lg:w-11/12">
Varify        </button>

        </div>
        </div>
   </>
  );
}

export default ChatWindow;
