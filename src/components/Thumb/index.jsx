import React from "react";
import { imageResolver } from "../../../utils/helpers";

const Thumb = ({ data }) => {
  return (
    <div className="max-w-[1140px] mx-auto xl:pb-[80px] lg:pb-[45px] pb-5  lg:pt-[90px] pt-[10px] my-[30px] lg:my-[80px] px-[8px]">
      <div className="grid md:grid-cols-2 items-center gap-x-[15px]">
        <div className="p-[10px]">
          <div>
            <h2 className="text-[#f01159] text-[32px] leading-[32px] font-[700]">
              {data?.title}
              <span className="px-1 font-[500] text-black">{data?.text}</span>
              <span>{data?.headline}</span>
              <span className="font-[500] text-black">{data?.tagline}</span>
            </h2>
          </div>
          <p className=" text-[12px] md:text-[15px] lg:text-[18px] leading-[18px] md:leading-[27px] font-[400] py-[14px]">
            {data?.description}
          </p>
        </div>
        <div>
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
  );
};

export default Thumb;
