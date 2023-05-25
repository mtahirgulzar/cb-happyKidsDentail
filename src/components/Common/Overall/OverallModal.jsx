import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
import useModal from "../Feedback/UseModal";
import Feedback from "../Feedback/FeedbackModal";
import useModalClose from "../../Common/FeedbackClose/useFeedbackModal";
import FeedbackClose from "../../Common/FeedbackClose/FeedbackClose";

const OverallModal = ({ isWatch, hide }) => {
  const [toggle, setToggle] = useState(false);

  const { isSee, Seeup } = useModal();
  const { islook, lookUp } = useModalClose();
  // const handleToggle = () => {
  //   Seeup()
  //   handleFirstModal();
  //   // setToggle(!toggle)
  //   // if(close == true){
  //   //   hide();
  //   // }
  //   };

  return (
    <React.Fragment>
      <div>
        {isWatch && (
          <>
            <div onClick={hide} className={` modal-overlay `} />
            <div
              className="modal-wrapper-inner "
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
            >
              <div className="modal-first rounded-xl ">
                <div className="px-5 sm:px-3 md:px-[10px] py-2  bg-[#fff] rounded">
                  <div className="modal-header absolute top-[10px] right-[20px]">
                    <button
                      type="button"
                      className="modal-close-button"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={hide}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="">
                    <div className="max-w-[480px] bg-white  p-[30px] mx-auto relative">
                      <div className=" flex flex-col items-center mx-auto my-[60px]">
                        <div>
                          <p className="text-center text-[20px] leading-[30px] text-[#0566ad]">
                            How do you rate your overall experience during your
                            visit at Happy Kids Dental?
                          </p>
                        </div>
                        <div className="mt-8">
                          <div onClick={Seeup}>
                          <div  className="hover:cursor-pointer">
                            <img src="images/home/star5.png" alt="over all modal star" loading="lazy"></img>
                          </div>
                          <div className="hover:cursor-pointer">
                            <img src="images/home/star4.png" alt="over all modal star" loading="lazy"></img>
                          </div>
                          </div>
                          <div onClick={lookUp}>
                            <div className="hover:cursor-pointer">
                              <img src="images/home/star3.png" alt="over all modal star" loading="lazy"></img>
                            </div>
                            <div className="hover:cursor-pointer">
                              <img src="images/home/star2.png" alt="over all modal star" loading="lazy"></img>
                            </div>
                            <div className="hover:cursor-pointer">
                              <img src="images/home/star1.png" alt="over all modal star"></img>
                            </div>
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
        <FeedbackClose islook={islook} hide={lookUp} firstModalHide={hide} />
        <Feedback isSee={isSee} hide={Seeup} firstModalHide={hide} />
      </div>
    </React.Fragment>
  );
};

export default OverallModal;
