import React from "react";

export default function Rateing() {
  return (
    <div className="max-w-[480px] bg-white shadow-lg p-[30px] mx-auto relative">
      <div className=" flex flex-col items-center mx-auto my-[60px]">
        <div>
          <p className= "text-center text-[20px] leading-[30px] text-[#0566ad]">
            How do you rate your overall experience during your visit at Happy
            Kids Dental?
          </p>
        </div>
        <div className="mt-8">
          <div className="hover:cursor-pointer">
            <img src="images/home/star5.png" alt="rating star" loading="lazy"></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="images/home/star4.png" alt="rating star" loading="lazy"></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="images/home/star3.png" alt="rating star" loading="lazy"></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="images/home/star2.png" alt="rating star" loading="lazy"></img>
          </div>
          <div className="hover:cursor-pointer">
            <img src="images/home/star1.png" alt="rating star" loading="lazy"></img>
          </div>
        </div>
      </div>
      <button className="absolute top-4 right-6 text-[24px] font-semibold">&times;</button>
    </div>
  );
}
