import React from "react";
import Link from "next/link";
import Modal from "../Common/Appoitment/modal";
import useModal from "../Common/Appoitment/useModal";
import { imageResolver } from "../../../utils/helpers";

export default function Hero({ navServices, data }) {
  const { isShowing, toggle } = useModal();
  
  return (
    
    <div className="max-w-[1140px] mx-auto px-4 pt-12">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col  justify-center mt-6 sm:mt-10 md:mt-0">
          <h2 className="text-[#f01159] text-[18px] leading-[18px] font-normal tracking-[1px] mb-4 sm:mb-[20px]">
            {data?.tagline}
          </h2>
          <h2 className="text-[#000] text-[28px] sm:text-[43px] lg:text-[48px] leading-[31px] sm:leading-[43px] lg:leading-[62.5px] font-normal tracking-[1.5px] mb-[20px] max-w-[440px]">
            {data?.title}
            <span className=" text-[#000] text-[28px] sm:text-[43px] lg:text-[48px] leading-[31px] sm:leading-[43px] lg:leading-[62.5px] font-bold tracking-[1px] mb-[20px] max-w-[420px]">
              {data?.headline}
            </span>
          </h2>
          <div>
            <button
              onClick={toggle}
              className="btn-shadow btn py-[12px] px-[24px] rounded-[3px] text-[12px] sm:text-[16px] lg:text-[20px] leading-[12px] sm:leading-[16px] lg:leading-[20px] font-bold text-[#ffff] bg-[#f01159]  hover:bg-[#df1175] "
              
            >
              {/* <link  href="" > */}
              {data?.cta?.title}
              {/* </link> */}
            </button>
              <Modal
                isShowing={isShowing}
                hide={toggle}
                navServices={navServices}
              />
          </div>
        </div>
        <div>
          <img
            className="w-full h-full"
            src={imageResolver(data?.img).path}
            loading="lazy"
            alt={data?.img?.data?.attributes?.alternativeText}
          />
        </div>
      </div>
    </div>
  );
}
