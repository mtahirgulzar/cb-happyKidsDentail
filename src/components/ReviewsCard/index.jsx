import React, { useEffect } from "react";
import Google from "../Common/Icon/google";
import { Star } from "../Common/Icon/star";
const StartIcon = [
  { icon: <Star /> },
  { icon: <Star /> },
  { icon: <Star /> },
  { icon: <Star /> },
  { icon: <Star /> },
];
const data = [
  {
    image: "images/home/reviewsCard.png",
    headline: "Angela Shepherd",
    date: "August 5, 2022.",
    pragraph:
      "Great staff great doctor clean environment friendly front desk great dental assistant love this company",
  },
  {
      image: "images/home/reviewsCard.png",
    headline: "Angela Shepherd",
    date: "August 5, 2022.",
    pragraph:
      "Great staff great doctor clean environment friendly front desk great dental assistant love this company friendly front desk great dental assistant love this company",
  },
  {
    image: "images/home/reviewsCard.png",
  headline: "Angela Shepherd",
  date: "August 5, 2022.",
  pragraph:
    "Great staff great doctor clean environment friendly front desk great dental assistant love this company",
},
{
  image: "images/home/reviewsCard.png",
headline: "Angela Shepherd",
date: "August 5, 2022.",
pragraph:
  "Great staff great doctor clean environment friendly front desk great dental assistant love this ",
},
];

export default function ReviewsCard() {

  useEffect(() => {
  

    const slider= document.getElementById("trustSlider")
    const script = document.createElement("script");
    script.src = 'https://cdn.trustindex.io/loader.js?0fd7fde63008778a6e5277bd52';
    script.async = true;
    slider.appendChild(script);
  
},[])
  
  return (
    <div className="max-w-[1140px] mx-auto mb-[30px]">
      <div id="trustSlider" className="grid md:grid-cols-1 pt-[77px]">
        {/* {data.map((items, index) => {
          return (
            <div key={index} className="bg-[#F8F9F9] p-[25px] rounded-xl m-[8px] hover:mt-[-0.5px] btn">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="w-[40px] h-[40px]">
                    <img className="w-full" src={items.image} loading="lazy" alt="review logo"></img>
                  </div>
                  <div className="ml-[15px] max-w-[257px]">
                    <h2 className="text-[15px] font-bold text-[#000000] leading-[21px]">
                      {items.headline}
                    </h2>
                    <p className="text-[12px] leading-[17px] text-[#000000] font-normal">
                      {items.date}
                    </p>
                  </div>
                </div>
                <Google width="24px" height="24px" />
              </div>
              <div className="flex mt-[15px] mb-[6px] gap-x-[1px]">
                {StartIcon.map((item, index) => (
                  <div key={index} className=''>
                    {item.icon}</div>
                ))}
              </div>

              <p className="text-[16px] leading-[23px] text-[#000000] pt-[5px]">
                {items.pragraph}
              </p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
