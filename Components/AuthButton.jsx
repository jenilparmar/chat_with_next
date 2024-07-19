// components/AuthButton.js

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export default function AuthButton() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) console.log(session);
  }, [session]);
  return (
    <div>
      {!session && (
        <>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="flex justify-center self-center p-3 border-[0.2vh] hover:scale-95 active:scale-95 transition-transform duration-150 bg-white border-black rounded-lg">
            {" "}
            <FcGoogle className="self-center" />{" "}
            <p className="self-center ml-2 font-medium text-gray-800">
              Continue with Google
            </p>
          </button>
        </>
      )}
    </div>
  );
}
