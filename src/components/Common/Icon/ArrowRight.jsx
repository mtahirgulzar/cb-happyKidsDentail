import React from "react";

export default function ArrowRight(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="23"
        fill="currentColor"
        className="bi bi-arrow-right-short text-white "
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
        />
      </svg>
      
    </div>
  );
}
