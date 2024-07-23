import React, { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';

function Input({addMessage}) {
  const [message, setMessage] = useState('');

  const handleMessage=()=>{
    addMessage(message);
setMessage("")
 
  }

  return (
    <div className='w-screen h-screen absolute top-0 flex flex-col-reverse'>
      <div className='self-center py-3 px-3 h-fit w-screen flex flex-row justify-between gap-2'>
        <input
          onChange={e => {
            setMessage(e.target.value);
          }}
          type='text'
          name='chatbox'
          id='chatbox'
          value={message}
          placeholder='Type something...'
          className='h-10 w-full text-black indent-2 rounded-lg bg-blue-50 placeholder:text-gray-500 placeholder:px-4'
        />
        <div className='bg-cyan-700 w-12 h-12 rounded-full justify-center active:scale-95 flex'>
          <IoSendSharp onClick={handleMessage} className='self-center text-xl text-white' />
        </div>
      </div>
    </div>
  );
}

export default Input;
