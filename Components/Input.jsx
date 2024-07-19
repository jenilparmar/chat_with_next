import React, { useEffect, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import getEmoji from './getemoji';

function Input() {
  const [message, setMessage] = useState('');
  const [emojis, setEmojis] = useState([]);

  const handleEmoji = () => {
    const emojiArray = getEmoji(message); // Assuming getEmoji returns an array of emojis

    // Create a new array with each emoji repeated 50 times
    const repeatedEmojis = emojiArray.flatMap(emoji => Array.from({ length: 50 }, () => emoji));

    setEmojis(repeatedEmojis);
    
  };

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
          placeholder='Type something...'
          className='h-10 w-full text-black indent-2 rounded-lg bg-blue-50 placeholder:text-gray-500 placeholder:px-4'
        />

<div className='bg-cyan-700 w-12 h12 rounded-full justify-center active:scale-95 flex'>
<IoSendSharp onClick={handleEmoji} className='self-center text-xl  text-white' />
</div>      </div>
    </div>
  );
}

export default Input;
