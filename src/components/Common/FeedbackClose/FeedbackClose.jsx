import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

const OverallModal = ({ islook, hide, firstModalHide }) => {
  return (
    <React.Fragment>
      {islook && (
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper-inner "
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal rounded-xl ">
              <div className="px-5 sm:px-7 md:px-[35px] py-5  bg-[#fff] rounded">
                <div className="modal-header absolute top-[10px] right-[20px]">
                  {/* <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button> */}
                </div>
                <div className="">
                  <div className="md:flex max-w-[800px]  mx-auto bg-[white]  relative">
                    <div className="m-[30px] flex items-center ">
                      <img className="w-full" src="images/home/image.png" loading="lazy" alt="feed back modal close"></img>
                    </div>
                    <div className="p-[40px] py-[160px]">
                      <div className="flex items-center gap-x-[4px]">
                        <div className="w-10 h-[1px] bg-[black] ml-[-30px]"></div>
                        <p className="text-[14px] leading-[14px] text-[#c500ff]  font-semibold">
                          Thank You For Your Feedback
                        </p>
                      </div>
                      <h2 className="text-[#0c0c0c] text-[30px] leading-[36px] font-bold text-center mt-2">
                        We truly value your opinion
                      </h2>

                      <div className="flex justify-end mt-16 ">
                        <div onClick={firstModalHide}>
                          <button
                            onClick={hide}
                            className="text-white bg-[#c500ff] inline-flex py-[12px] rounded-sm  px-[24px]"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <button className="absolute top-4 right-6 text-[24px] font-semibold">
                      &times;
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default OverallModal;
