// pages/otp.js

import { useState } from 'react';

export default function OTPRequest() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      setMessage('OTP sent successfully');
    } else {
      setMessage('Error sending OTP');
    }
  };

  return (
    <div>
      <h1>Request OTP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send OTP</button>
      </form>
      
    </div>
  );
}
