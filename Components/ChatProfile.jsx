import React from 'react'

const ChatProfile = () => {
  return (
    <div className='flex active:scale-95 flex-row px-2 border-b-2  rounded-md hover:bg-gray-600 transition-colors duration-75  border-gray-600'>
      <div className="rounded-full w-14 self-center h-12 bg-black gap-2"></div>
      <div className=" w-full self-center h-10 bg-gray-800">
        <p className='text-white font-medium px-2 '>Jenil</p>
      </div>
    </div> 
  )
}

export default ChatProfile
