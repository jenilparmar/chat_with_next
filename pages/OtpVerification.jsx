import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function OtpVerification() {
  const router = useRouter();
  const { email } = router.query;
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(true);
let bol  = true
  useEffect(() => {
    const sendOtp = async () => {
      try {
        localStorage.removeItem('otp')
        localStorage.removeItem('otpExpires')
        bol = false;
        const res = await fetch('/api/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (res.status === 200) {
          const data = await res.json();
          localStorage.setItem('otp', data.otp);
          localStorage.setItem('otpExpires', data.expires);
          console.log("OTP sent successfully");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
     if(bol) sendOtp();
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedOtp = localStorage.getItem('otp');
    const otpExpires = localStorage.getItem('otpExpires');

    if (Date.now() > otpExpires) {
      alert("OTP expired");
      return;
    }

    if (storedOtp === otp) {
      alert("OTP verified successfully");
      localStorage.removeItem('otp');
      localStorage.removeItem('otpExpires');
      router.push('/Inbox');
    } else {
      alert("Invalid OTP");
    }
  };

  if (loading) {
    return <div className="text-center text-black">Sending OTP...</div>;
  }

  return (
    <div className="w-screen h-screen justify-center flex-col flex">
      <div className="bg-gray-800 text-white shadow-lg w-10/12 h-fit py-6 p-4 self-center rounded-md flex flex-col md:w-8/12 lg:w-3/12">
        <strong className="text-center py-4 text-2xl">OTP Verification</strong>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="otp"
            id="otp"
            placeholder="Enter your OTP here"
            className="w-11/12 text-sm self-center h-12 mt-3 text-black px-3 placeholder:px-1 rounded-lg placeholder:p-4 focus:ring-indigo-900 md:w-8/12 lg:w-11/12"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-sm font-bold p-3 text-white bg-blue-800 w-11/12 text-center divWheat rounded-md active:bg-blue-900 active:scale-95 transition-colors duration-100 ease-in-out self-center mt-4 md:w-8/12 lg:w-11/12"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
