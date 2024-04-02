import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteGratitude as deleteGratitudeApi } from "../../services/apiGratitude";

export function useDeleteGratitude() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteGratitude } = useMutation({
    mutationFn: deleteGratitudeApi,
    onSuccess: () => {
      toast.success("Gratitude deleted successfully"),
        queryClient.invalidateQueries({
          queryKey: ["gratitude"],
        });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteGratitude };
}
