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
    <div className=" my-6 grid w-full items-center rounded-xl  bg-[#43766C]  px-2  py-4">
      <select
        onChange={handleChange}
        value={sortBy}
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
