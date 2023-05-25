import React, { useState, useEffect } from "react";
import Envelope from "../Common/Icon/Envelope";
import Telephone from "../Common/Icon/Telephone";
import Map from "../Common/Icon/Map";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ContactDetail = ({ data, linksData }) => {
  const [contactDetail, setContactDetail] = useState([]);
  const [dis, setDis] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (
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
      fetch("/api/contact", {
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
            toast("Something is wrong.");
          }
                 setBtnDis(false);
          document.getElementById("mySubmit").disabled = true; 
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className="max-w-[1140px] mx-auto lg:my-[80px] my-[40px] px-[16px]">
      <div className="grid md:grid-cols-2 gap-x-[60px]">
        <div className="lg:pt-[20px]">
          <h2 className="text-[32px] leading-[32px] font-semibold text-[#000000] mb-[20px]">
            {data?.title}
          </h2>
          <div className="mb-[20px]">
            <div className="flex items-center">
              <Link
                href={`https://www.google.com/maps/place/Happy+Kids+Dental/@37.9623195,-121.2955358,17z/data=!3m1!4b1!4m5!3m4!1s0x80900d490ff7c85b:0x25f67feb3405089e!8m2!3d37.9623195!4d-121.2933471`}
              >
                <button>
                  <Map className="text-black" />
                </button>
                <span className="pl-3 text-[13px] sm:text-[16px] leading-[24px] text-[#54595f]">
                  {linksData[0]?.title}
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href={`mailto:+${linksData[1]?.title}`}>
                <button>
                  <Envelope className="text-black" />
                </button>
                <span className="pl-3 text-[13px] sm:text-[16px] leading-[24px] text-[#54595f]">
                  {linksData[1]?.title}
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              {/* <Telephone className="text-black" /> */}
              <Link href={`tel:+${linksData[2]?.title}`}>
                <button>
                  <Telephone className="text-black" />
                </button>
                <span className="pl-3 inline text-[13px] sm:text-[16px] leading-[24px] text-[#54595f]">
                  {linksData[2]?.title}
                </span>
              </Link>
            </div>
          </div>
          <div className="mapouter w-full h-[300px]">
            <div className="h-full gmap_canvas">
              <iframe
                className="w-full h-full gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=940 N Center St B&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://piratebay-proxys.com/"></a>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <p className="leading-[24px] text-[#7a7a7a] pt-[10px] md:pt-0 pb-5">
              {data?.description}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name*"
                  name="name"
                  id="name"
                  onChange={(e) =>
                            setDis({ ...dis, name: e.target.value })
                          }
                  className="border-[1px] border-[#818A91]  w-full placeholder:text-[16px] placeholder:leading-[21px] placeholder:text-[#7a7a7a] outline-none rounded px-[16px] py-[8px] mb-2"
                />
            
                <br />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  {...register("phone", { required: true })}
                  placeholder="Phone Number*"
                  onChange={(e) =>
                            setDis({ ...dis, phone: e.target.value })
                          }
                  className="border-[1px] border-[#818A91]   w-full placeholder:text-[16px] placeholder:leading-[21px] placeholder:text-[#7a7a7a] outline-none rounded px-[16px] py-[8px] mb-2"
                />
                <input
                  {...register("date", { required: true })}
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Preferred Time"
                  className="border-[1px] border-[#818A91] w-full placeholder:text-[16px] placeholder:leading-[21px] text-[#7a7a7a] outline-none rounded px-[16px] py-[8px] mb-2"
                />
              </div>
              <div className="text-[#003458] flex my-3">
                {/* <span className="pr-4 font-semibold">Day:</span> */}
                <div className="flex flex-wrap items-center gap-x-2">
                <span className="pr-4 font-semibold">Days:</span>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Monday
                    </label>
                  </div>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Tuesday
                    </label>
                  </div>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Wednesday
                    </label>
                  </div>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Thursday
                    </label>
                  </div>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Friday
                    </label>
                  </div>
                  <div>
                    <input name="time" type="checkbox" id="html" />
                    <label
                      className="pl-1 leading-[16px] text-[#7a7a7a]"
                      htmlFor="html"
                    >
                      Saturday
                    </label>
                  </div>
                </div>
              </div>
              {/* <label htmlFor="">Message</label> */}
              <textarea
                defaultValue={""}
                {...register("message", { required: true })}
                className="border-[1px] border-[#818A91] placeholder:text-[16px] placeholder:leading-[22px] placeholder:text-[#7a7a7a] outline-none rounded px-[14px] py-[5px] mb-2 w-full"
                placeholder="Messages*"
                name="message"
                id="message"
                cols="30"
                rows="4"
                   onChange={(e) =>
                            setDis({ ...dis, message: e.target.value })
                          }
              ></textarea>
              <button
                type="submit"
                id="mySubmit"
                className={`bg-[#003458] text-[15px] leading-[15px] text-[#fff]  hover:bg-[#103458] py-[12.5px] rounded w-full 
                ${
                    !btnDis && "cursor-not-allowed"
                  }
                `}
              >
                Send
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
