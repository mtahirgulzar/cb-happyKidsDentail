import React from "react";
import { imageResolver } from "../../../utils/helpers";

const Ensure = ({data}) => {
  return (
    <div className="max-w-[1140px] mx-auto py-[40px] lg:py-[60px] mt-0 lg:mt-[60px] px-[16px]">
      <div className="grid md:grid-cols-2 items-center gap-x-[10px]">
        <div className="order-2 md:order-1">
          <div>
            <img
              className="w-full h-full"
              src={imageResolver(data?.img).path}
              alt={data?.img?.data?.attributes?.alternativeText}
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1">
          <div>
            <h2 className="text-[#f01159] text-[32px] leading-[32px] font-[700]">
              {data?.title}<span className="px-1 font-[500] text-black">{data?.text}</span>
              <span>{data?.headline}</span>
              <span className="font-[500] text-black">
                {data?.tagline}
              </span>
            </h2>
          </div>
          <p className="text-[12px] md:text-[15px] lg:text-[18px] leading-[18px] md:leading-[27px] font-[400] py-[14px]">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ensure;
