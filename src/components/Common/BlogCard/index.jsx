import Link from "next/link";
import React from "react";
import { imageResolver } from "../../../../utils/helpers";

export default function BlogCard({ data, itemOffset }) {
  return (
    <div>
      <div className="max-w-[1140px] p-[10px] mx-auto pb-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[35px] gap-y-[30px]">
          {data?.map((items, index) => {
            return (
				<div className={`flex  ${
					index >= itemOffset && index < itemOffset + 9 ? "" : "hidden"
				  }`}>
              <Link
                href={`/blog/${items?.attributes?.slug}`}
                key={index}
                legacyBehavior
              >
                <div className="h-full">
                  <div className="relative h-full rounded-sm shadow-md hover:shadow-xl">
                    {items?.attributes?.blog_category?.data !== null && (
                      <div className="absolute right-6 top-5 ">
                        <p className="text-[12px] leading-[12px] font-medium text-end bg-[#d81b60] py-[8px] px-[17px] rounded-[999px] text-[#ffffff]">
                          <a href={`/blog/${items?.attributes?.slug}`}>
                            {
                              items?.attributes?.blog_category?.data?.attributes
                                ?.name
                            }
                          </a>
                        </p>
                      </div>
                    )}
                    {items?.attributes?.imagePath !== null ? (
                      <img
                        src={`https://admin.happykidsdental.org/uploads/${items?.attributes?.imagePath}`}
                        alt="Blog Card"
                        className="w-full  h-[230px] object-cover rounded-t-sm"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        loading="lazy"
                        className="w-full  h-[230px] rounded-t-sm opacity-1 hover:cursor-pointer"
                        alt={
                          items?.attributes?.img?.data?.attributes
                            ?.alternativeText
                        }
                        src={imageResolver(items?.attributes?.img).path}
                      ></img>
                    )}

                    <div className="px-[20px] mt-[20px] flex flex-col  h-[280px] justify-between">
                      <div>
                        <h2 className="text-[21px] leading-[25px] text-[#000000] font-medium mb-[25px] hover:cursor-pointer">
                          {items?.attributes?.title}
                        </h2>
                        <p className=" pb-4 text-[14px] leading-[21px] text-[#777777] font-normal   ">
                          {items?.attributes?.description}
                        </p>
                      </div>
                      <div className="flex justify-between ">
                        <div>
                          <button className="text-[#d81b60] mb-[20px] text-[12px] leading-[18px] font-medium">
                            READ MORE{" "}
                          </button>
                        </div>
                        <div>
                          <span className="text-[12px] leading-5 font-medium">
                            {items?.attributes?.publishedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
			  </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
