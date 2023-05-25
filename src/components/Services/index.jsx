import React from "react";
import Link from "next/link";
import ServiceCard from "../Common/Servicecard";
import { Prevention } from "../Common/Icon/Prevention";
import { Treatment } from "../Common/Icon/Treatment";
import { Filling } from "../Common/Icon/Filling";
import { Crowns } from "../Common/Icon/crowns";
import { Sealents } from "../Common/Icon/Sealents";
import { Extraction } from "../Common/Icon/Extraction";
import { imageResolver } from "../../../utils/helpers";

const ServiceData = [
  {
    Svg: <Prevention />,
  },
  {
    Svg: <Treatment />,
  },
  {
    Svg: <Filling />,
  },
  {
    Svg: <Crowns />,
  },
  {
    Svg: <Sealents />,
  },
  {
    Svg: <Extraction />,
  },
];
export default function Service({ data, service }) {
  return (
    <div className="w-full">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-[#000000] leading-[19px] text-[19px] font-normal">
          {data?.tagline}
        </h2>
        <h2 className="text-[#000000] leading-[40px] text-[40px] font-extrabold my-[20px]">
          {data?.title}
        </h2>
        <p className="text-[#000000] leading-[27px] text-[16px] lg:text-[18px] font-normal mb-10 lg:max-w-[500px]">
          {data?.headline}
        </p>
        <div>
          <Link href={`${data?.cta?.link}`} legacyBehavior>
            <button className="mb-[50px] text-[18px] leading-[27px] font-bold text-[#f01159] hover:text-[#FAACC5]  ">
              <a href={`${data?.cta?.link}`}>
                {data?.cta?.title}
              </a>
            </button>
          </Link>
        </div>
      </div>
      <div
        style={{
          background: `url(${imageResolver(service?.img).path
            }) no-repeat center center/cover`,
        }}
      >
        <div className="max-w-[1140px] mx-auto px-4">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-[35px] py-[32px]">
            {service?.card?.map((item, index) => (
              <li key={index} className="list-none">
                <ServiceCard
                  data={item?.img}
                  headline={item?.tagline}
                  description={item?.description}
                  btn={item?.headline}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
