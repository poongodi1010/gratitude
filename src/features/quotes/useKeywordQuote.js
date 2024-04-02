import { useQuery } from "@tanstack/react-query";
import { getKeyword } from "../../services/apiQuotes";

export function useKeywordQuote() {
  const {
    isLoading,
    data: keyword,
    error,
  } = useQuery({
    queryKey: ["keywords"],
    queryFn: getKeyword,
  });

  return { isLoading, error, keyword };
}
