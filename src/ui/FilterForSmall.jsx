/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
function FilterForSmall({ filterField, options }) {
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
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
    setIsVisible(false);
  }

  return (
    <div ref={ref} className="mx-2">
      <button
        onClick={() => setIsVisible((v) => !v)}
        className=" relative my-6 flex items-end justify-end rounded-2xl bg-[#43766C] px-8  py-[0.45rem]  text-[1rem] text-white !outline-none"
      >
        Filter
      </button>
      {isVisible ? (
        <ul className="absolute right-[75px] top-[140px] rounded-xl bg-[#43766C]  px-4 text-white">
          {options.map((option) => (
            <li
              key={options.value}
              onClick={() => handleClick(option.value)}
              disabled={currentFilter === option.value}
              className="my-[0.15rem] py-1 text-[0.9rem]"
            >
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default FilterForSmall;
