import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteToDo as deleteToDoApi } from "../../services/apiToDo";

export function useDeleteToDo() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteToDo } = useMutation({
    mutationFn: deleteToDoApi,
    onSuccess: () => {
      toast.success("To Do entry deleted successfully"),
        queryClient.invalidateQueries({
          queryKey: ["to_do"],
        });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteToDo };
}
