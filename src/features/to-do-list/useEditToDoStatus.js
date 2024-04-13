import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { editToDoStatus } from "../../services/apiToDo";

export function useEditToDoStatus() {
  const queryClient = useQueryClient();

  const { mutate: editStatus, isLoading: isEditing } = useMutation({
    mutationFn: ({ newStatus, id }) => editToDoStatus(newStatus, id),
    onSuccess: () => {
      toast.success("Status has been edited successfully");
      queryClient.invalidateQueries({ queryKey: ["to_do"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editStatus };
}
