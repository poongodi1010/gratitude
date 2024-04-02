import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditGratitude } from "../../services/apiGratitude";
import toast from "react-hot-toast";

export function useCreateGratitude() {
  const queryClient = useQueryClient();
  const { mutate: createGratitude, isLoading: isCreating } = useMutation({
    mutationFn: createEditGratitude,
    onSuccess: () => {
      toast.success("New Gratitude has been created successfully");
      queryClient.invalidateQueries({ queryKey: ["gratitude"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createGratitude };
}
