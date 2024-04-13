import { useNavigate, useParams } from "react-router-dom";
import { useQuotes } from "../../context/QuotesContext";
import { useEffect } from "react";
import Carousel from "./Carousel";

function KeywordQuotesDisplay() {
  const { keywordQuote = [], getQuotesFromKeyword } = useQuotes();
  const { keyword } = useParams();
  const navigate = useNavigate();
  useEffect(function () {
    getQuotesFromKeyword(keyword);
  }, []);

  function handleBack() {
    navigate(-1);
  }
  return (
    <div className="text-center">
      <Carousel keywordQuote={keywordQuote} />

      <button
        className="my-4 cursor-pointer rounded-xl border-2 px-8 py-4 hover:bg-gray-300 hover:shadow-xl "
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
}

export default KeywordQuotesDisplay;
