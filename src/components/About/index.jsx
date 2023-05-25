import React from "react";
import Link from "next/link";
import { imageResolver } from "../../../utils/helpers";

export default function About({ data }) {
  console.log("data =======", data);
  return (
    <div className="max-w-[1140px] mx-auto px-4 my-5 lg:my-[80px]">
      <div className="grid md:grid-cols-2 gap-x-[25px]">
        <div className="order-2 md:order-1">
          <img
            className="h-full w-full"
            src={imageResolver(data?.img).path}
            alt={data?.img?.data?.attributes?.alternativeText}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center order-1">
          <h2 className="text-[#000000] leading-[19px] text-[19px] font-normal">
            {data?.tagline}
          </h2>
          <h2 className="text-[#000000] leading-[40px] text-[40px] font-extrabold my-[20px]">
            {data?.title}
          </h2>
          <p className="text-[#000000] leading-[27px] text-[12px] md:text-[14px] lg:text-[18px] font-normal mb-5 ">
            {data?.headline}
          </p>
          <div>
            <Link href={`${data?.cta?.link}`} legacyBehavior>
              <a
                href={`${data?.cta?.link}`}
                className="btn text-[18px] leading-[27px] font-bold text-[#f01159] hover:text-[#FAACC5]  "
              >
                {data?.cta?.title}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
