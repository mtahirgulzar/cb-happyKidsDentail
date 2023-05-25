import React from "react";
import Link from "next/link";
import { imageResolver } from "../../../utils/helpers";

export default function Offer({ data }) {

  console.log("data ============7", data)
  return (
    <div>
      <div className="max-w-[1140px] mx-auto xl:pb-[80px] lg:pb-[45px] pb-5  lg:pt-[90px] pt-[10px] my-[30px] lg:my-[80px] px-[8px]">
        <div className="grid md:grid-cols-2 items-center gap-x-[15px]">
          <div className="p-[10px]">
            <div>
              <h2 className="mb-2 sm:mb-6 text-[#1c2c40] text-[20px] sm:text-[36px] lg:text-[40px] leading-[28px] sm:leading-[40px] font-extrabold">
                {data?.title}
              </h2>
            </div>
            <p className=" text-[12px] md:text-[15px] lg:text-[18px] leading-[18px] md:leading-[27px] font-[400] py-[14px]">
              {data?.description}
            </p>
            <div>
              <Link href="/" className="btn mg-[14px] lg:mb-[20px] text-[16px] lg:text-[18px] leading-[27px] font-bold text-[#f01159] hover:text-[#FAACC5]  ">
                  {/* <button > */}
                    {data?.cta?.name}
                  {/* </button> */}
              </Link>
            </div>
          </div>
          <div className="">
            <div>
              <img
                className="w-full h-full"
                src={imageResolver(data?.img).path}
                alt={data?.img?.data?.attributes?.alternativeText}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
