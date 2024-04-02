import { useQuery } from "@tanstack/react-query";
import { getToDoList } from "../../services/apiToDo";
import { useParams } from "react-router-dom";

export function useToDo() {
  const { id } = useParams();
  console.log("idd", id);
  const {
    isLoading,
    data: toDo,
    error,
  } = useQuery({
    queryKey: ["to_do", id],
    queryFn: () => getToDoList(id),
    retry: false,
  });

  return { isLoading, error, toDo };
}
