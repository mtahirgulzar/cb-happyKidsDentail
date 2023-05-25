import React from "react";

export default function Feedback() {
  return (
    <div>
      <div className="md:flex max-w-[800px] mx-auto bg-[white] shadow-xl">
        <div className="m-[30px] flex items-center ">
          <img src="images/home/image.png" alt="feedback image" loading="lazy"></img>
        </div>
        <div className="p-[40px]">
          <div className="text-center">
            <p className="text-[14px] leading-[14px] text-[#c500ff] font-semibold">Thank You For Your Feedback</p>
          </div>
          <h2 className="text-[#0c0c0c] text-[30px] leading-[36px] font-bold text-center mt-2">We truly value your opinion</h2>
          <div className="mt-10 text-center">
            <p>Review us on <span className="text-[#c500ff]">Yelp </span> or <span className="text-[#c500ff]">Google</span> and receive a complimentary</p>
            <h2 className="text-[#c500ff] font-bold text-[20px]">$10 GIFT CARD</h2>
            <h3 className="mt-[5px]">at your next visit.*</h3>
          </div>
          <div className="">
            <div>
              <button>REVIEW US ON GOOGLE</button>
            </div>
            <div>
              <button>REVIEW US ON Yelp</button>
            </div>
          </div>
          <div>
            <p>
              * After submitting your review, please mention it to the front
              office at your next appointment. One-time use only. Terms may
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
