/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className=" flex  w-full items-center rounded-xl px-2    ">
      {options.map((option) => (
        <button
          key={options.value}
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          className="mx-2 my-6 rounded-2xl bg-[#43766C] px-8 py-6 text-white hover:bg-[#2d5f55] hover:shadow-xl   "
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
