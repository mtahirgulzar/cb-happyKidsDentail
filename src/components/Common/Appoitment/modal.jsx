import React, { useState, useRef, useEffect } from "react";
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isShowing, hide }) => {
  const form = useRef();
  const [dis, setDis] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
      dis.email.length &&
      dis.name.length &&
      dis.phone.length &&
      dis.message.length
    ) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      // document.getElementById("mySubmit").disabled = true;
    }
  }, [dis]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.name.trim().length === 0) {
      toast("Please Enter a correct Name");
      return;
    }
    if (data.phone.length > 20) {
      toast("Please Enter a correct phone number");
    } else if (data.message.length > 800) {
      toast("write a correct message");
    } else {
      fetch("/api/appointment", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response received", res);
          if (res.status === 200) {
            // console.log("Response succeeded!");
            toast("Thank you for contacting us!");
          } else {
            // console.log("Email/Password is invalid.");
            toast("Email/Password is invalid.");
          }
          setBtnDis(false);
          document.getElementById("mySubmit").disabled = true; 
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <React.Fragment>
      {isShowing && (
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal rounded-xl ">
              <div className="px-5 sm:px-7 md:px-[35px] py-5  bg-[#fff] rounded">
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
                  <div className="flex flex-col lg:flex-row gap-x-4">
                    <div className="pr-3 w-full  lg:w-[55%]">
                      <h2 className="text-[#060606] text-center text-[24px] sm:text-[28px] lg:text-[33px] leading-[33px] font-[600] mb-5 mt-8">
                        Appointment Request
                      </h2>
                      <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div>
                          <label
                            className="text-[#003458] font-medium"
                            htmlFor="name"
                          >
                            Name*
                          </label>{" "}
                          <br />
                          <input
                            {...register("name", { required: true })}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={(e) =>
                            setDis({ ...dis, name: e.target.value })
                          }
                            className="border-[1px] border-[#818A91] w-full placeholder:text-[14px] outline-none rounded px-1 py-[4px] mb-2"
                          />
                          <label
                            className="text-[#003458] font-medium"
                            htmlFor="email"
                          >
                            Email*
                          </label>
                          <br />
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter Your Email"
                            id="email"
                            name="email"
                            onChange={(e) =>
                            setDis({ ...dis, email: e.target.value })
                          }
                            className="border-[1px] border-[#818A91] w-full placeholder:text-[14px] outline-none rounded px-1 py-[4px] mb-2"
                          />
                          <label
                            className="text-[#003458] font-medium"
                            htmlFor="phone number"
                          >
                            Phone Number*
                          </label>
                          <input
                            {...register("phone", { required: true })}
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Enter Your Phone Number"
                            onChange={(e) =>
                            setDis({ ...dis, phone: e.target.value })
                          }
                            className="border-[1px] border-[#818A91] w-full placeholder:text-[14px] outline-none rounded px-1 py-[4px] mb-2"
                          />
                        </div>
                        <div className="text-[#003458] mb-2">
                          <span className="pr-2 font-semibold">Time:</span>
                          <input name="time" type="radio" id="html" /> 
                          <label className="pr-1" htmlFor="html">
                            AM
                          </label>
                          <input name="time" type="radio" id="html" /> 
                          <label htmlFor="html">PM</label>
                          <br />
                        </div>
                        <div className="text-[#003458] flex">
                          <span className="pr-4 font-semibold">Days:</span>
                          <div className="flex flex-wrap ">
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                Monday
                              </label>
                            </div>
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                Tuesday
                              </label>
                            </div>
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                wednesday
                              </label>
                            </div>
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                Thursday
                              </label>
                            </div>
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                Friday
                              </label>
                            </div>
                            <div>
                              <input name="time" type="checkbox" id="html" /> 
                              <label className="pr-2" htmlFor="html">
                                Saturday
                              </label>
                            </div>
                          </div>
                        </div>
                        <label htmlFor="">Message*</label>
                        <textarea
                          defaultValue={""}
                          {...register("message", { required: true })}
                          id="message"
                          name="message"
                          className="border-[1px] border-[#818A91]  placeholder:text-[14px] outline-none rounded px-1 py-[4px] mb-2 w-full"
                          placeholder="Messages using this form are not considered private. Avoid sending financial or medical private information through this facility."
                          cols="30"
                          rows="4"
                          onChange={(e) =>
                            setDis({ ...dis, message: e.target.value })
                          }
                        ></textarea>
                        <button
                          type="submit"
                          id="mySubmit"
                          className={` bg-[#003458] text-[15px] leading-[15px] text-[#fff] hover:bg-[#103458] py-2 rounded w-full
                          ${
                    !btnDis && "cursor-not-allowed"
                  }`}
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                    <div className="w-full  lg:w-[45%] flex  items-center">
                      <div>
                        <img
                          src="/images/home/modal.png"
                          alt="kid picture"
                          className="w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Modal;
