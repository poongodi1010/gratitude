import { useEffect } from "react";
import { useQuotes } from "../../context/QuotesContext";

function DailyQuote() {
  const { quotes = [], fetchDailyQuotes } = useQuotes();

  useEffect(function () {
    fetchDailyQuotes();
  }, []);

  console.log("qyote", quotes);
  return (
    <div className="w-[80%]  text-center max-[424px]:w-full  ">
      {quotes.map((q) => (
        <>
          <h2 className="py-4 text-4xl uppercase max-[424px]:px-2 max-[424px]:py-[0.4rem] max-[424px]:text-[1.7rem]">
            {q.q}
          </h2>
          <p className="text-md max-[424px]:p-2 max-[424px]:text-[1.3rem] ">
            - {q.a}
          </p>
        </>
      ))}
    </div>
  );
}
export default DailyQuote;
