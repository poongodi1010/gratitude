/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

function ToDoFooter({ dates }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDate = searchParams.get("date");

  return (
    <div className="  mb-8 mt-16 grid  grid-cols-7 justify-center ">
      {dates.map((d) => (
        <div
          key={d}
          className="cursor-pointer rounded-3xl border-[1px] bg-[#43766C] py-1 text-center text-white"
          onClick={() => {
            searchParams.set("date", d);

            setSearchParams(searchParams);
          }}
        >
          <button disabled={currentDate === d} className="!outline-none">
            {format(d, "MM/dd")}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoFooter;
