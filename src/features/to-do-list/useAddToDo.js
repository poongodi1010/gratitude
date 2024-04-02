import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToDoList } from "../../services/apiToDo";
import toast from "react-hot-toast";

export function useAddToDo() {
  const queryClient = useQueryClient();
  const { mutate: addToDo, isLoading: isAdding } = useMutation({
    mutationFn: addToDoList,
    onSuccess: () => {
      toast.success("New ToDo has been added successfully");
      queryClient.invalidateQueries({ queryKey: ["to_do"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addToDo };
}
