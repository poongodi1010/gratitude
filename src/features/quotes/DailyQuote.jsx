import { useEffect } from "react";
import { useQuotes } from "../../context/QuotesContext";

function DailyQuote() {
  const { quotes = [], fetchDailyQuotes } = useQuotes();

  useEffect(function () {
    fetchDailyQuotes();
  }, []);

  return (
    <div className="w-[80%]  text-center   ">
      {quotes.map((q) => (
        <>
          <h2 className="py-4 text-4xl uppercase max-[767px]:text-2xl">
            {q.q}
          </h2>
          <p className="text-md  ">- {q.a}</p>
        </>
      ))}
    </div>
  );
}
export default DailyQuote;
