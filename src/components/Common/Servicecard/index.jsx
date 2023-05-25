import React from "react";
import { Prevention } from "../Icon/Prevention";
import Modal from "../../Common/Appoitment/modal";
import useModal from "../../Common/Appoitment/useModal";
import { imageResolver } from "../../../../utils/helpers";


export default function ServiceCard({data,headline,description,btn}) { 
  const { isShowing, toggle } = useModal();
  
  return (
    <div>
      <div className="p-[28px] rounded-xl bg-[#ffffff]">
        <div className=" w-[70px] h-[70px] mb-5"> 
          <img src={imageResolver(data).path} alt={data?.data?.attributes?.alternativeText} loading="lazy"  className="w-full h-full"/>
        </div>
        <div className="w-full">
          <h2 className="mb-[20px] text-[#000000] text-[19px] leading-[19px] font-semibold">
            {headline}
          </h2>
          <p className="mb-[40px] text-[#000000] text-[16] leading-[24px] font-normal">
           {description}
          </p>

          {/* <Link href={''}> */}
        
            <button onClick={toggle} className="w-full  text-end text-[11px] leading-[11px] font-extrabold text-[#f01159] hover:text-[#FAACC5] ">
              {btn}
            </button>
        
          <Modal
                isShowing={isShowing}
                hide={toggle}
              />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
