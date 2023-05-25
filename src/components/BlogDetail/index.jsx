import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import BlogBody from "../Common/BlogBody";
import BlogDetailCard from "../Common/BlogDetailCard";
import ArrowRight from "../Common/Icon/ArrowRight";
import Envelope from "../Common/Icon/Envelope";
import Facebook from "../Common/Icon/Facebook";
import Linkedin from "../Common/Icon/Linkedin";
import Twitter from "../Common/Icon/Twitter";
import Link from "next/link";

const BlogDetail = ({ data, cutBlog }) => {
  const router = useRouter();
  const [dis, setDis] = useState({
    email: "",
  });
  const [btnDis, setBtnDis] = useState(false);
  useEffect(() => {
    if (dis.email.length) {
      setBtnDis(true);
      document.getElementById("mySubmit").disabled = false;
    } else {
      setBtnDis(false);
      //   document.getElementById("mySubmit").disabled = true;
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
    console.log("email data", data);
    if (data.email.length > 30) {
      toast("Please Enter correct mail");
    } else {
      fetch("/api/blogMail", {
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
            toast("Mail is not sent.");
          }
          setBtnDis(false);
          document.getElementById("mySubmit").disabled = true;
        })
        .catch((e) => console.log(e));
      reset();
    }
  };
  return (
    <div className="max-w-[1140px] mx-auto px-[16px]">
      <div>
        <div className=" mb-[30px]">
          <BlogBody data={data?.body} cusClass={"cus-our-blog"} />
        </div>
      </div>
      <div className="sm:flex justify-between items-center sm:items-start border-t-[1px] border-b-[1px] my-5 py-[25px] max-w-[750px] mx-auto ">
        <div>
          <p className="text-[#2b7a78] text-[24px] lg:text-[15px] leading-[29px] lg:leading-[18px] font-light text-center p-[10px] sm:p-0">
            Share This Post
          </p>
        </div>
        <div className="flex gap-x-[10px] max-w-[140px] mx-auto sm:mx-0">
          <div className="px-[3px] py-[3px] mx-auto bg-[#1CA885] btn hover:bg-[#F46192] hover:cursor-pointer">
            <Link
              href={`https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.happykidsdental.org%252Fimportance-of-fluoride-treatment-for-kids%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB`}
              legacyBehavior
            >
              <a
                href={`https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.happykidsdental.org%252Fimportance-of-fluoride-treatment-for-kids%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB`}
              >
                <Facebook />
              </a>
            </Link>
          </div>
          <div className="px-[4px] py-[3px] mx-auto bg-[#1CA885] btn hover:bg-[#F46192] hover:cursor-pointer">
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.happykidsdental.org%2Fimportance-of-fluoride-treatment-for-kids%2F`}
              legacyBehavior
            >
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.happykidsdental.org%2Fimportance-of-fluoride-treatment-for-kids%2F`}
              >
                <Linkedin />
              </a>
            </Link>
          </div>
          <div className="px-[3px] py-[3px] mx-auto bg-[#1CA885] hover:bg-[#F46192] btn hover:cursor-pointer">
            <Link
              href={`https://twitter.com/intent/tweet?text=%20https://www.happykidsdental.org/importance-of-fluoride-treatment-for-kids/`}
              legacyBehavior
            >
              <a
                href={`https://twitter.com/intent/tweet?text=%20https://www.happykidsdental.org/importance-of-fluoride-treatment-for-kids/`}
              >
                <Twitter />
              </a>
            </Link>
          </div>
          <div className="px-[3px] py-[3px] mx-auto bg-[#1CA885] hover:bg-[#F46192] btn hover:cursor-pointer">
            <Link
              href={`mailto:+${`HappyKidsDental940@outlook.com`}`}
              legacyBehavior
            >
              <a href={`mailto:+${`HappyKidsDental940@outlook.com`}`}>
                <Envelope fill="#ffffff" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#E7FFAC] my-[80px] max-w-[750px] mx-auto rounded px-[20px] md:px-[40px] lg:px-[50px] py-[70px] shadow-xl ">
        <div>
          <h2 className="text-[#2b7a78] font-light text-[26px] leading-[31px] text-center ">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-center text-[#2b7a78] leading-[16px] font-light mt-2">
            Get Updates And Learn From The Best
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="md:flex justify-between pt-[50px]">
            <div className="w-full md:w-[75%] ">
              <input
                {...register("email", { required: true })}
                tabIndex={0}
                id="email"
                name="email"
                onChange={(e) => setDis({ ...dis, email: e.target.value })}
                required
                role="input"
                arial-label="Please input your email"
                type="email"
                className="w-full px-[16px] py-[10px] inline-flex leading-[21px] rounded-[30px] border-solid border-[1px] border-[#2b7a78] focus:outline-none  placeholder:text-[#1ca885] placeholder:text-[15px] "
                placeholder="Enter Your Email"
              />
            </div>
            <button
              type="submit"
              id="mySubmit"
              className={` bg-[#1CA885] hover:bg-[#F46192] rounded-[30px] w-full md:w-[20%] py-[10px] btn mt-[10px] md:mt-0  text-[15px] leading-[15px] font-medium justify-center text-white inline-flex items-center 
              ${!btnDis && "cursor-not-allowed"}`}
            >
              Send
              <ArrowRight />
            </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
      <div className="max-w-[750px] mx-auto">
        <h2 className="text-start text-[24px] leading-[29px] font-light text-[#2b7a78]  pb-[40px]">
          More To Explore
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-[35px] max-w-[750px] mx-auto ">
        {cutBlog?.slice(0, 2).map((item, index) => (
          <div key={index}>
            <BlogDetailCard TwoBlog={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
