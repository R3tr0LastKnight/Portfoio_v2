import React, { useState } from "react";
import "./entry.css";
import "../styles/skillsRes.css";

function Entry(props) {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`term transition-all group relative ${flip ? "" : ""}`}>
      <a
        className="anchorP lg:min-h-[19rem] gap-8 relative transition-all duration-500 overflow-y-scroll"
        target="blank"
        href={props.link}
      >
        {/* <div className={`${flip ? "opacity" : "block"}`}>
          <dt>
            <span
              className="preview w-full lg:min-h-[20rem] "
              role="img"
              aria-label="img"
            >
              <img className="h-full w-full" src={props.img} alt="" />
            </span>
          </dt>
          <div className="  lg:py-4 pb-4 lg:pb-8 px-8 ">
            <span className="title relative text-white  ">{props.name}</span>
          </div>
        </div>
        <div className={`${flip ? "block" : "hidden"}`}>
          <dd className="link text-justify">{props.desc}</dd>
        </div> */}

        <div
          className={`transition-all duration-500 ease-in-out ${
            flip
              ? "opacity-0 translate-y-10 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <dt>
            <span
              className="preview w-full lg:min-h-[20rem]"
              role="img"
              aria-label="img"
            >
              <img className="h-full w-full" src={props.img} alt={props.name} />
            </span>
          </dt>
          <div className=" py-4 lg:mt-4 lg:pb-4 px-8">
            <span className="title relative text-white">{props.name}</span>
          </div>
        </div>

        {/* Back Content */}
        <div
          className={`transition-all duration-500 ease-in-out absolute top-0 left-0 w-full ${
            flip
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <dd className="link text-justify justify-center align-middle px-3">
            <p className="overflow-y-scroll max-h-[210px] lg:max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {" "}
              {props.desc}
            </p>
          </dd>
        </div>
      </a>

      <div
        onClick={() => {
          setFlip(!flip);
        }}
        className="flex absolute bottom-2 right-4 hover:-translate-y-1 invert cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    </div>
  );
}

export default Entry;
