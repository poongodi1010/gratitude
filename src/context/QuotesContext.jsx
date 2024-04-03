/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
//import axios from "axios";
// https//zenquotes.io/api/quotes/keyword=confidence
// https://zenquotes.io/api/today

//const BASE_URL = "https://zenquotes.io/api";
//const header = new Headers({ "Access-Control-Allow-Origin": "*" });
const QuotesContext = createContext();

const initialState = {
  quotes: [],
  keywordQuote: [],
  isLoading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "quotes/today":
      return {
        ...state,
        isLoading: false,
        quotes: action.payload,
      };
    case "quotes/keyword":
      return {
        ...state,
        isLoading: false,
        keywordQuote: action.payload,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("unknown action type");
  }
}
function QuotesProvider({ children }) {
  const [{ quotes, keywordQuote, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  //   useEffect(function () {
  async function fetchDailyQuotes() {
    dispatch({ type: "loading" });
    try {
      // const res = await fetch("http://localhost:5000");
      const res = await fetch("https://backendserver-production-af63.up.railway.app");
      //console.log("res", res.json());
      const data = await res.json();

      dispatch({ type: "quotes/today", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error fetching today's quote",
      });
    }
  }
  //     fetchDailyQuotes();
  //   }, []);
  // function fetchDailyQuotes() {
  //   axios
  //     .get("http://localhost:5000/getData")
  //     .then((data) => console.log("data", data));
  // }

  async function getQuotesFromKeyword(keyword) {
    dispatch({ type: "loading" });
    try {
      const url = `https://backendserver-production-af63.up.railway.app/${keyword}`;
      // const url = `http://localhost:5000/${keyword}`;
      console.log("Context url", url);
      const res = await fetch(url);

      const data = await res.json();
      console.log("data", data);
      dispatch({ type: "quotes/keyword", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: `There was an error fetching quote for this ${keyword}`,
      });
    }
  }

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        keywordQuote,
        isLoading,
        getQuotesFromKeyword,
        fetchDailyQuotes,
        error,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
}

function useQuotes() {
  const context = useContext(QuotesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { QuotesProvider, useQuotes };
