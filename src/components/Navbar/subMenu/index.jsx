import React from "react";
import styles from "../style.module.css";
import Link from "next/link";

const SubMenu = ({ setIsSubmenu, dropdown, service, condition }) => {
  return (
    <>
      <div
        onMouseEnter={() => setIsSubmenu(true)}
        onMouseLeave={() => setIsSubmenu(false)}
        className={`absolute top-[30px] left-[0px]  w-[170px] transition-all duration-3000 ease  z-50 bg-white`}
      >
        <ul className={` bg-white`}>
          {dropdown?.map((item, index) => (
            <Link
              key={index}
              href={`${
                service
                  ? `/services/${item.attributes.slug}`
                  : condition
                  ? `/conditions-treated/${item.attributes.slug}`
                  : `${item.link}`
              }`}
            >
              <li
                className={`px-[20px] py-[13px] transition-all ease duration-500 ${styles.cusHover}`}
              >
                <p
                  className={`${styles.hoverText} transition-all ease duration-500 text-[12px] leading-[15px]`}
                >
                  <a
                    href={`${
                      service
                        ? `/services/${item.attributes.slug}`
                        : condition
                        ? `/conditions-treated/${item.attributes.slug}`
                        : `${item.link}`
                    }`}
                  >
                    {item.title || item.attributes.title}
                  </a>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SubMenu;
