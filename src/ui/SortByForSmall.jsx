/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function SortByForSmall({ options }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsVisible(false);
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [setIsVisible],
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
    setIsVisible(false);
  }
  return (
    // <div className=" my-6 grid w-full items-center rounded-xl  bg-[#43766C]  px-2  py-4">
    <div ref={ref}>
      <button
        onClick={() => setIsVisible((v) => !v)}
        className=" relative my-6 flex items-end justify-end rounded-2xl bg-[#43766C] px-8  py-[0.45rem]  text-[1rem] text-white !outline-none"
      >
        Sort
      </button>
      {isVisible ? (
        <select
          onChange={handleChange}
          value={sortBy}
          // type="white"
          className="absolute right-[8px] top-[140px] w-[65px] rounded-xl  border-none bg-[#43766C] text-[1rem]  text-white   !outline-none hover:bg-none "
        >
          {/* <ul className="absolute right-[8px] top-[140px] rounded-xl bg-[#43766C]  px-4 text-white"></ul> */}

          {options.map((option) => (
            <option
              value={option.value}
              key={option.value}
              className="my-[0.15rem] rounded-2xl py-1 text-[0.9rem]"
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}

export default SortByForSmall;
