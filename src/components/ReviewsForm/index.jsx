import React,{useState} from "react";
import OverallModal from "../Common/Overall/OverallModal";
import useModal from "../Common/Overall/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// const data = [
//   {
//     headline: "A - YOUR APPOINTMENT:",
//     text: "1- Ease of making appointments:",
//     text1: "2- Getting after-hours care when your child needed it:",
//   },
//   {
//     headline: "A - YOUR APPOINTMENT:",
//     text: "1- Ease of making appointments:",
//     text1: "2- Getting after-hours care when your child needed it:",
//   },
// ];


export default function ReviewsForm({ data }) {
  const [contactDetail, setContactDetail] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    Popup();
    fetch("/api", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log("Response received", res);
        // if (res.status === 200) {
        //   // console.log("Response succeeded!");
        //   toast("Thank you for contacting us!");
        // } else {
        //   // console.log("Email/Password is invalid.");
        //   toast("Error");
        // }
      })
      .catch((e) => console.log(e));
    reset();
  };
  const { isWatch, Popup } = useModal();
  return (
    <div className="py-[68px] px-[10px] sm:px-[20px] lg:px-[30px]">
      <div className="max-w-[1140px] mx-auto shadow-xl p-[10px]">
        <h2 className=" text-[24px] sm:text-[26px] md:text-[28px] leading-[28px] font-semibold text-[#4c0062] text-center m-[40px] ">
          {data?.header?.title}
          
        </h2>

        <div className="py-[40px] md:py-[80px] px-[10px]">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)} method="POST"
            >
              <div className="border-solid border-b-[2px] border-[#775A01] pb-3 pt-3 text-[#000000] ">
                <h2 className="mt-[16px] mb-[16px] text-[20px] leading-[24px]  font-medium">
                  {data?.survey[0]?.title}
                </h2>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium ">
                    {data?.survey[0]?.textOne}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("first", { required: true })} required name="first" type="radio" id="first" value='excellent' />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("first", { required: true })}  type="radio" name="first" id="first"  value='veryGood'/>
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("first", { required: true })}  type="radio" name="first" id="first"  value='Good'/>
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("first", { required: true })}  type="radio" name="first" id="first" value='Fair'/>
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("first", { required: true })}  type="radio" name="first" id="first" value='poor' />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium">
                    {data?.survey[0]?.textTwo}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("second", { required: true })} value="Excellent" type="radio" name="second" id="second" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("second", { required: true })} value="Very Good" type="radio" name="second" id="second" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("second", { required: true })} value="Good" type="radio" name="second" id="second" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("second", { required: true })} value="Fair" type="radio" name="second" id="second" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input  {...register("second", { required: true })} value="Poor" type="radio" name="second" id="second" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-solid border-b-[2px] border-[#775A01] pb-3 pt-3 text-[#000000] ">
                <h2 className="mt-[16px] mb-[16px] text-[20px] leading-[24px]  font-medium">
                  {data?.survey[1]?.title}
                </h2>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium ">
                    {data?.survey[1]?.textOne}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("third", { required: true })} required value="Excellent" type="radio" name="third" id="third"/>
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("third", { required: true })} value="Very Good" type="radio" name="third" id="third" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("third", { required: true })} value="Good" type="radio" name="third" id="third" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("third", { required: true })} value="Fair" type="radio" name="third" id="third" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("third", { required: true })} value="Poor" type="radio" name="third" id="third" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium">
                    {data?.survey[1]?.textTwo}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("fourth", { required: true })} required value="Excellent" type="radio" name="fourth" id="fourth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("fourth", { required: true })} value="Very Good" type="radio" name="fourth" id="fourth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("fourth", { required: true })} value="Good" type="radio" name="fourth" id="fourth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("fourth", { required: true })} value="Fair" type="radio" name="fourth" id="fourth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("fourth", { required: true })} value="Poor" type="radio" name="fourth" id="fourth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-solid border-b-[2px] border-[#775A01] pb-3 pt-3 text-[#000000] ">
                <h2 className="mt-[16px] mb-[16px] text-[20px] leading-[24px]  font-medium">
                  {data?.survey[2]?.title}
                </h2>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium ">
                    {data?.survey[2]?.textOne}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("fifth", { required: true })} required value="Excellent" type="radio" name="fifth" id="fifth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("fifth", { required: true })} value="Very Good" type="radio" name="fifth" id="fifth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("fifth", { required: true })} value="Good" type="radio" name="fifth" id="fifth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("fifth", { required: true })} value="Fair" type="radio" name="fifth" id="fifth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("fifth", { required: true })} value="Poor" type="radio" name="fifth" id="fifth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium">
                    {data?.survey[2]?.textTwo}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("sixth", { required: true })} required value="Excellent" type="radio" name="sixth" id="sixth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("sixth", { required: true })} value="Very Good" type="radio" name="sixth" id="sixth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("sixth", { required: true })} value="Good" type="radio" name="sixth" id="sixth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("sixth", { required: true })} value="Fair" type="radio" name="sixth" id="sixth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("sixth", { required: true })} value="Poor" type="radio" name="sixth" id="sixth" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-solid border-b-[2px] border-[#775A01] pb-3 pt-3 text-[#000000] ">
                <h2 className="mt-[16px] mb-[16px] text-[20px] leading-[24px]  font-medium">
                  {data?.survey[3]?.title}
                </h2>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] leading-[19px] font-medium ">
                    {data?.survey[3]?.textOne}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    <span>
                      <input {...register("seventh", { required: true })} required value="Excellent" type="radio" name="seventh" id="seventh" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Excellent
                      </label>
                    </span>
                    <span>
                      <input {...register("seventh", { required: true })} value="Very Good" type="radio" name="seventh" id="seventh" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Very Good
                      </label>
                    </span>
                    <span>
                      <input {...register("seventh", { required: true })} value="Good" type="radio" name="seventh" id="seventh" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Good
                      </label>
                    </span>
                    <span>
                      <input {...register("seventh", { required: true })} value="Fair" type="radio" name="seventh" id="seventh" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Fair
                      </label>
                    </span>
                    <span>
                      <input {...register("seventh", { required: true })} value="Poor" type="radio" name="seventh" id="seventh" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Poor
                      </label>
                    </span>
                  </div>
                </div>
                <div className="grid items-center md:grid-cols-2">
                  <p className="mt-[8px] mb-[16px] text-[15.5px] leading-[19px] font-medium">
                    {data?.survey[3]?.textTwo}
                  </p>
                  <div className="flex flex-wrap gap-x-[10px]">
                    {/* <span>
                <input type="radio" name="eight" id="excellent1" />
                <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                  Excellent
                </label>
              </span>
              <span>
                <input type="radio" name="eight" id="veryGood1" />
                <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                  Very Good
                </label>
              </span> */}
                    <span className="">
                      <input {...register("eight", { required: true })} required value="Absolutely" type="radio" name="eight" id="eight" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Absolutely
                      </label>
                    </span>
                    <span>
                      <input {...register("eight", { required: true })} value="Probably" type="radio" name="eight" id="eight" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Probably
                      </label>
                    </span>
                    <span>
                      <input {...register("eight", { required: true })} value="Never" type="radio" name="eight" id="eight" />
                      <label className="pl-[10px] lg:text-[18px] leading-[18px] text-[#f0117e] font-normal">
                        Never
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-2 mt-[16px]">
                  <h3 className="font-medium leading-[19px]">
                    Your Name (optional):
                  </h3>
                  <input
                  {...register("name", )}
                    className="w-full py-[8px] px-[16px] border-solid border-[1px] outline-none rounded-[3px] border-[#003458] "
                    placeholder="Enter Your Name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="grid md:grid-cols-2 mt-[16px]">
                  <h3 className="font-medium leading-[19px]">
                    Your Email Address (optional):
                  </h3>
                  <input
                  {...register("email" )}
                  name='email'
                  id="email"
                    className="w-full py-[8px] px-[16px] border-solid border-[1px] outline-none rounded-[3px] border-[#003458] "
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="flex justify-end  mt-[16px]">
                  <button
                    type="submit"
                    className="py-[10px] px-[40px] font-bold text-white bg-[#F0117E] hover:bg-[#f70c7d] rounded-[4px] inline-flex"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          <ToastContainer />
          </div>
          <OverallModal isWatch={isWatch} hide={Popup} />
        </div>
      </div>
    </div>
  );
}
