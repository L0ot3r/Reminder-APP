import React from 'react'

const VideoCard = () => {


  return (
    <div className='border w-[290px] sm:w-[70%] h-[300px] p-2 flex flex-col bg-red-300 cursor-pointer'>
      <div className='h-full bg-green-200'>
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="test" className='h-full w-full' />
      </div>
      <div className='border-t-2 bg-slate-400 h-[200px] p-2'>
        <h1>TITLE</h1>
        <p>DESC</p>
      </div>
    </div>
  )
}

export default VideoCard