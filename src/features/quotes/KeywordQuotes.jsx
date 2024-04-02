import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function KeywordQuotes({ keyword }) {
  //const { quotesKeyword } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/quotes/${keyword}`);
  }
  return (
    <div
      className="m-4 cursor-pointer rounded-xl border-2 p-8 text-center capitalize hover:bg-gray-200 hover:text-black hover:shadow-xl max-[424px]:m-2"
      onClick={handleClick}
    >
      {" "}
      {keyword}{" "}
    </div>
  );
}

export default KeywordQuotes;
