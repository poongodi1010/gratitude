import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { getAffirmations } from "../../services/apiAffirmations";
import CarouselAffirmations from "./CarouselAffirmations";
import { useState } from "react";

//import { useNavigate } from "react-router-dom";

function GetAffirmations() {
  const {
    isLoading,
    data: affirmations,
    error,
  } = useQuery({
    queryKey: ["affirmations"],
    queryFn: getAffirmations,
  });
  const [start, setStart] = useState(false);

  if (isLoading) return <Spinner />;
  if (error) {
    console.error(error);
    throw new Error("Unable to get affirmations");
  }

  return (
    <div className="text-center ">
      {/* {affirmations.map((affirm) => ( */}
      {!start && (
        <div className="  mt-24 overflow-hidden rounded-2xl border-2 px-20 py-20 text-center hover:bg-slate-200 hover:shadow-2xl">
          {/* <h2 className="text-wrap"></h2> */}
          <pre className="flex items-center justify-center text-center font-sans text-[1.7rem] font-semibold leading-normal text-[#12372A] max-[767px]:text-[1.4rem] ">
            {`Affirmations help create a positive mindset \nthat will change your life.\nStart now and read \nyour affirmations \neveryday.`}
          </pre>
          <button
            onClick={() => setStart((s) => !s)}
            className="my-8 rounded-2xl bg-[#43766C] px-12 py-4 text-white max-[767px]:text-[1.4rem]"
          >
            Start Now
          </button>
        </div>
      )}

      {start && (
        <CarouselAffirmations affirm={affirmations} key={affirmations.id} />
      )}
      {/* <button
        className="my-4 cursor-pointer rounded-xl border-2 px-8 py-4 hover:bg-gray-300 hover:shadow-xl "
        onClick={() => navigate(-1)}
      >
        Back
      </button> */}
    </div>
  );
}

export default GetAffirmations;
