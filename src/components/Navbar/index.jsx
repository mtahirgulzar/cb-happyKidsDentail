import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger";
import { imageResolver } from "../../../utils/helpers";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import Modal from "../Common/Appoitment/modal";
import useModal from "../Common/Appoitment/useModal";

export default function Navbar({ data, navServices }) {
  const { isShowing, toggle } = useModal();
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const currentRouteService = router.asPath;

  const [isMenu, setIsMenu] = useState(false);
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu1, setIsSubmenu1] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const [isSubMenu3, setIsSubmenu3] = useState(false);
  
  return (
    <div className="wrapper relative overflow-visible bg-[#dff8fe]">
      <div className="max-w-[1156px] mx-auto ">
        <div className="relative flex items-center justify-between w-full h-full ">
          <div className="lg:py-[19.5px] flex items-center px-4 gap-x-4">
            <Link href={`/`} legacyBehavior>
              <a href={`/`}>
                <img
                  src={imageResolver(data?.logo?.img).path}
                  className="max-w-[70px] "
                  alt={data?.logo?.img?.data?.attributes?.alternativeText}
                  loading="lazy"
                />
              </a>
            </Link>
            <div>
              <p className="leading-[24px] text-[#003458] text-[18px]  font-[600]">
                {data?.logo?.tagline}
              </p>
              <p className="leading-[22px] text-[#f01159] text-[30px]  font-[600]">
                {data?.logo?.headline}
              </p>
              <p className="leading-[24px] text-[18px] text-[#003458] font-[600]">
                {data?.logo?.description}
              </p>
            </div>
          </div>
          <div className="">
            <div className="hidden px-4 lg:flex">
              {data?.navItem?.map((item, index) => (
                <div
                  key={index}
                  className="pl-[40px] relative overflow-visible"
                >
                  {/* <Link href={`${item.link}`} legacyBehavior>
                    <a href={`${item.link}`}>
                    
                    </a>
                  
                  </Link> */}
                  <div
                    onMouseEnter={() => index === 1 && setIsSubmenu(true)}
                    onMouseLeave={() => index === 1 && setIsSubmenu(false)}
                    className={`flex cursor-pointer ${styles.cusMenu}`}
                  >
                    {index === 4 ? (
                      <p
                        onClick={toggle}
                        className={`text-[14px] leading-[20px] font-[600]  text-[#3B5266] cursor-pointer hover:text-[#f01159] ${
                          currentRoute === item.link
                            ? "text-[#EA6393]"
                            : "text-[#1B4C6C]"
                        }`}
                      >
                        <Link href={`${item.link}`} legacyBehavior>
                          <a href={`${item.link}`}>{item.title}</a>
                        </Link>
                      </p>
                    ) : (
                      <p
                        className={`text-[14px] leading-[20px] font-[600]  text-[#3B5266] cursor-pointer hover:text-[#f01159] ${
                          currentRoute === item.link
                            ? "text-[#EA6393]"
                            : "text-[#1B4C6C]"
                        }`}
                      >
                        <Link href={`${item.link}`} legacyBehavior>
                          <a href={`${item.link}`}>{item.title}</a>
                        </Link>
                      </p>
                    )}

                    {/* {index === 1 && ( */}
                    <div className={`${index !== 1 && "hidden"} `}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {isSubMenu && (
                        <div
                          onMouseEnter={() => setIsSubmenu(true)}
                          onMouseLeave={() => setIsSubmenu(false)}
                          className={`absolute top-[20px] left-[10px]  w-[170px] transition-all duration-3000 delay-1000 ease  z-50 bg-[#003458]`}
                        >
                          <ul className={`text-white `}>
                            {navServices?.Footitem?.map((item, index) => (
                              <Link
                                key={index}
                                href={`/services/${item?.link}`}
                                legacyBehavior
                              >
                                <li
                                  className={`px-[18px] py-[14px] transition-all ease duration-500 ${
                                    styles.cusHover
                                  }  ${
                                    currentRouteService ==
                                    `/services/${item.link}`
                                      ? "bg-[#E2183A]"
                                      : "bg-[#1B4C6C]"
                                  }`}
                                >
                                  <p
                                    className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px]`}
                                  >
                                    <a href={`/services/${item.link}`}>
                                      {item.title}
                                    </a>
                                  </p>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* )} */}
                    {/* {index === 4 && ( */}
                    <div className={`${index !== 4 && "hidden"}`}>
                      <Modal
                        isShowing={isShowing}
                        hide={toggle}
                        navServices={navServices}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:hidden flex items-center min-h-full h-[62px] ">
              <Hamburger
                isMenu={isMenu}
                setIsMenu={setIsMenu}
                isSubMenu={isSubMenu}
                navServices={navServices?.Footitem}
                setIsSubmenu={setIsSubmenu}
                data={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
