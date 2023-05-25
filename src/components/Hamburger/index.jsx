import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Modal from "../Common/Appoitment/modal";
import useModal from "../Common/Appoitment/useModal";

const Hamburger = ({
  isSubMenu,
  isMenu,
  setIsSubmenu,
  setIsMenu,
  data,
  navServices,
}) => {
  const { isShowing, toggle } = useModal();
  const router = useRouter();
  const currentRoute = router.pathname.slice(0);
  const currentRouteService = router.asPath;
  return (
    <>
      {" "}
      {!isMenu && (
        <span
          onClick={() => setIsMenu(!isMenu)}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#f01159"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
      )}
      {isMenu && (
        <span
          onClick={() => {
            setIsMenu(!isMenu), setIsSubmenu(false);
          }}
          className="px-4 transition-all duration-500 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#f01159"
            className="bi bi-x-lg text-[#f01159]"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
      )}
      {isMenu && (
        <div className="bg-[#003458] text-white z-50 min-h-[300px] absolute left-0 top-[70px] w-full shadow-lg">
          {data?.navItem?.map((item, index) => (
            <ul key={index} className="w-full">
              <li
                onClick={() => index === 1 && setIsSubmenu(!isSubMenu)}
                className={`px-[30px] py-[21px]  cursor-pointer transition-all ease duration-500 ${
                  styles.cusHover
                } flex cursor-pointer ${styles.cusMenu} flex-col text-white ${
                  currentRoute === item.link ? "bg-[#E2183A]" : ""
                }`}
              >
                {index === 1 ? (
                  <p
                    className={`text-[15px] leading-[20px] font-[400] text-white transition-all ease duration-500 flex ${styles.hoverText}  }`}
                  >
                    <Link href={`${item.link}`} legacyBehavior>
                      <a href={`${item.link}`}>{item.title}</a>
                    </Link>
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
                  </p>
                ) : index === 4 ? (
                  <p
                    onClick={toggle}
                    className={`text-[15px] leading-[20px] font-[400] text-white transition-all ease duration-500 flex ${styles.hoverText}  }`}
                  >
                    {item.title}
                  </p>
                ) : (
                  <Link href={`${item.link}`} legacyBehavior>
                    <p
                      className={`text-[15px] leading-[20px] font-[400] text-white transition-all ease duration-500 flex ${styles.hoverText}`}
                    >
                      <a href={`${item.link}`}>{item.title}</a>
                    </p>
                  </Link>
                )}
              </li>
              {index === 1 && isSubMenu && (
                <div
                  className={` w-full transition-all duration-3000 ease  z-50 bg-[#003458]  `}
                >
                  <ul className={`text-white `}>
                    {navServices?.map((item, index) => (
                      <Link
                        href={`/services/${item.link}`}
                        key={index}
                        legacyBehavior
                      >
                        <li
                          className={`px-[30px] py-[14px] transition-all ease duration-500 ${
                            styles.cusHover
                          } ${
                            currentRouteService === `/services/${item.link}`
                              ? "bg-[#E2183A]"
                              : ""
                          }`}
                        >
                          <p
                            className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px] pl-[10px]`}
                          >
                            <a href={`/services/${item.link}`}>{item.title}</a>
                          </p>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
              {index === 4 && <Modal isShowing={isShowing} hide={toggle} />}
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Hamburger;
