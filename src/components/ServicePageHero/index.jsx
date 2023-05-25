import React from "react";
import { imageResolver } from "../../../utils/helpers";
import Modal from "../Common/Appoitment/modal";
import useModal from "../Common/Appoitment/useModal";

const ServicesPageHero = ({ data }) => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="max-w-[1140px] mx-auto xl:pt-[50px] md:pt-7 pt-5  lg:pb-[70px] px-[16px] md:px-0">
      <div className="grid md:grid-cols-2 items-center">
        <div className="py-[57px] md:px-[28px]">
          <h2 className="text-black text-[40px] leading-[40px] font-[600]">
            {data?.title}
          </h2>
          <p className="text-[12px] md:text-[15px] lg:text-[18px] leading-[18px] md:leading-[27px] font-[400] py-[14px] mb-[20px]">
            {data?.headline}
          </p>
          <div>
            <button onClick={toggle} className="btn py-[12px] px-[24px] rounded-md text-[12px] sm:text-[15px] leading-[15px] font-medium text-[#ffff] bg-[#f01159]  hover:bg-[#f56a96] btn-shadow">
              {/* <link  href="" > */}
              {data?.cta?.title}
              {/* </link> */}
            </button>
          </div>
        </div>
        <Modal
                isShowing={isShowing}
                hide={toggle}
                
              />
        <div className="sm:p-[10px]">
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

export default ServicesPageHero;
