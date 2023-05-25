import Link from "next/link";
import React, { useState, useRef } from "react";
import Google from "../../Common/Icon/google";
import Yelp from "../../Common/Icon/Yelp";
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
import firstModal from "../../Common/Overall/useModal";

const OverallModal = ({ isSee, hide, firstModalHide }) => {
  const { isWatch, Popup } = firstModal();
  return (
    <React.Fragment>
      {isSee && (
        <>
          <div className="modal-overlay " />
          <div
            className="modal-wrapper-inner"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal rounded-xl ">
              <div className="px-5 sm:px-7 md:px-[35px] py-5  bg-[#fff] rounded">
                <div
                  className="modal-header absolute top-[30px] right-[40px]"
                  onClick={firstModalHide}
                >
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
                <div className="h-full ">
                  <div>
                    <div className="md:flex  mx-auto bg-[white] ">
                      <div className="m-[30px] flex items-center ">
                        <img
                          src="images/home/image.png"
                          alt="feedback modal"
                          loading="lazy"
                        ></img>
                      </div>
                      <div className="p-[40px] ">
                        <div className="text-center">
                          <p className="text-[14px] leading-[14px] text-[#c500ff] font-semibold">
                            Thank You For Your Feedback
                          </p>
                        </div>
                        <h2 className="text-[#0c0c0c] text-[30px] leading-[36px] font-bold text-center mt-2">
                          We truly value your opinion
                        </h2>
                        <div className="mt-10 text-center">
                          <p className="text-[#7D7D7D]">
                            Review us on{" "}
                            <span className="text-[#c500ff]">Yelp </span> or{" "}
                            <span className="text-[#c500ff]">Google</span> and
                            receive a complimentary
                          </p>
                          <h2 className="text-[#c500ff] font-bold text-[20px]">
                            $10 GIFT CARD
                          </h2>
                          <h3 className="mt-[5px] text-[#7D7D7D]">
                            at your next visit.*
                          </h3>
                        </div>

                        <div className="max-w-[500px] mx-auto">
                          <div className=" grid grid-cols-2 gap-16 mt-7 mb-3 text-[13px] leading-[13px]  ">
                            <Link
                              href={`https://www.google.com/maps/place/Happy+Kids+Dental/@37.9622573,-121.2934341,17z/data=!4m5!3m4!1s0x80900d490ff7c85b:0x25f67feb3405089e!8m2!3d37.9622372!4d-121.2935573`}
                              legacyBehavior
                            >
                              <div className="bg-[#77FFEA] hover:bg-white duration-400 transition-all hover:border-[#c500ff] hover:border-2 border-2 border-[#77FFEA] py-[14px]  text-center text-[#c500ff] rounded-sm">
                                <div className="flex justify-center gap-2 ">
                                  <a href="https://www.google.com/maps/place/Happy+Kids+Dental/@37.9622573,-121.2934341,17z/data=!4m5!3m4!1s0x80900d490ff7c85b:0x25f67feb3405089e!8m2!3d37.9622372!4d-121.2935573">
                                    <Google />
                                  </a>
                                  <button>REVIEW US ON GOOGLE</button>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href={`https://www.yelp.com/biz/happy-kids-dental-stockton?osq=happy+kids+dental`}
                              legacyBehavior
                            >
                              <div className="bg-[#77FFEA] hover:bg-white duration-400 transition-all hover:border-[#c500ff] hover:border-2 border-2 border-[#77FFEA] py-[14px]  text-center text-[#c500ff] rounded-sm">
                                <div className="flex justify-center gap-2 ">
                                  <a href="https://www.yelp.com/biz/happy-kids-dental-stockton?osq=happy+kids+dental">
                                    <Yelp fill="#c500ff" />
                                  </a>
                                  <button>REVIEW US ON Yelp</button>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="py-[50px]">
                            <p className="text-[12px] leading-[16px] text-[#7D7D7D] ">
                              * After submitting your review, please mention it
                              to the front office at your next appointment.
                              One-time use only. Terms may apply.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
