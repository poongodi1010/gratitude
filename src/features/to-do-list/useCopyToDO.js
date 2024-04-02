import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getToDoListByDate } from "../../services/apiToDo";
//import { useParams } from "react-router-dom";

export function useCopyToDo() {
  //const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("date");

  //Query
  const {
    isLoading,
    data: toDoListByDate,
    error,
  } = useQuery({
    queryKey: ["to_do", filterValue],
    queryFn: () => getToDoListByDate(filterValue),
  });

  return { isLoading, error, toDoListByDate };
}
