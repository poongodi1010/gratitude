// const data = [
//   "confidence",
//   "courage",
//   "dreams",
//   "happiness",
//   "inspiration",
//   "kindness",
//   "leadership",
//   "love",
//   "success",
// ];

import KeywordQuotes from "./KeywordQuotes";
import { useKeywordQuote } from "./useKeywordQuote";

//import { useEffect } from "react";
//import { useParams } from "react-router-dom";
//import { useQuotes } from "../../context/QuotesContext";

function QuotesByKeyword() {
  const { keyword: keywords = [] } = useKeywordQuote();

  return (
  
    <div className="grid grid-cols-3 grid-rows-3 max-[767px]:grid-cols-[5fr_5fr] ">
      {keywords.map((word) => (
        <KeywordQuotes keyword={word.keyword} key={word.id} />
      ))}
    </div>
  );
}
export default QuotesByKeyword;
