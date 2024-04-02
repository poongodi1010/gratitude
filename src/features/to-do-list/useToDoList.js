import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getToDoLists } from "../../services/apiToDo";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useToDoList() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  //Sort
  const sortByRaw = searchParams.get("sortBy") || "created_at-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Query
  const {
    isLoading,
    data: { data: toDoList, count } = {},
    error,
  } = useQuery({
    queryKey: ["to_do", filter, sortBy, page],
    queryFn: () => getToDoLists({ filter, sortBy, page }),
  });

  //Pre fectching query
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["to_do", filter, sortBy, page + 1],
      queryFn: () => getToDoLists({ filter, sortBy, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["to_do", filter, sortBy, page - 1],
      queryFn: () => getToDoLists({ filter, sortBy, page: page - 1 }),
    });
  }
  return { isLoading, error, toDoList, count };
}
