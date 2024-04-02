/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className=" my-6 grid items-center rounded-xl bg-[#43766C]  px-2  py-4  sm:w-1/2 sm:py-0 sm:text-xl lg:w-full">
      <select
        onChange={handleChange}
        value={sortBy}
        // type="white"
        className="rounded-xl border-none bg-[#43766C] p-2  text-white !outline-none hover:bg-none sm:p-0"
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
