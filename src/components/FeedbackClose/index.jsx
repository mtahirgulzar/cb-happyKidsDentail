import React from 'react'

export default function FeedbackClose() {
  return (
    <div>
      <div className="md:flex max-w-[800px]  mx-auto bg-[white] shadow-xl relative">
        <div className="m-[30px] flex items-center ">
          <img className='w-full' src="images/home/image.png" loading='lazy'></img>
        </div>
        <div className="p-[40px] py-[160px]">
          <div className="flex items-center gap-x-[4px]">
          <div className='w-10 h-[1px] bg-[black] ml-[-30px]'></div>
            <p className="text-[14px] leading-[14px] text-[#c500ff] font-semibold">Thank You For Your Feedback</p>
          </div>
          <h2 className="text-[#0c0c0c] text-[30px] leading-[36px] font-bold text-center mt-2">We truly value your opinion</h2>
        
        <div className='flex justify-end mt-16 '>
        <button className='text-[#ff6395] bg-[#c500ff] inline-flex py-[12px] rounded-sm  px-[24px]'>Close</button>
        </div>
              
            
        </div>
        <button className="absolute top-4 right-6 text-[24px] font-semibold">&times;</button>
      </div>
    </div>
  )
}
