import { useQuery } from "@tanstack/react-query";
import { getGratitude } from "../../services/apiGratitude";

export function useGratitude() {
  const {
    isLoading,
    data: gratitude,
    error,
  } = useQuery({
    queryKey: ["gratitude"],
    queryFn: getGratitude,
  });

  return { isLoading, error, gratitude };
}
