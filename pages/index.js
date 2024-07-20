// pages/index.js

import Signup from '@/components/Signup'; // Ensure correct path and capitalization
import Inbox from '@/components/inbox';   // Ensure correct path and capitalization
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';


export default function Home() {
  const { data: session } = useSession();
  

  return (


<div className='w-screen h-screen flex justify-center'>
      {!session ? <Signup /> : <Inbox DATA ={session.user.name}/>}
    </div>
  
  );
}
