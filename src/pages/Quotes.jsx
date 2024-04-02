import { QuotesProvider } from "../context/QuotesContext";
import DailyQuote from "../features/quotes/DailyQuote";
import QuotesByKeyword from "../features/quotes/QuotesByKeyword";

function Quote() {
  return (
    <QuotesProvider>
      <div className="grid grid-cols-1 grid-rows-[150px_400px] px-8 py-8 max-[424px]:pl-0 max-[424px]:pr-2">
        <div className="mb-6 flex items-center justify-center rounded-2xl border-2 border-black  bg-orange-300 max-[424px]:w-full">
          <DailyQuote />
        </div>
        <div>
          <QuotesByKeyword />
        </div>
      </div>
    </QuotesProvider>
  );
}
export default Quote;
