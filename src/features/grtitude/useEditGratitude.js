import { useMutation, useQueryClient } from "@tanstack/react-query";
//import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { createEditGratitude } from "../../services/apiGratitude";

export function useEditGratitude() {
  const queryClient = useQueryClient();

  const { mutate: editGratitude, isLoading: isEditing } = useMutation({
    mutationFn: ({ newGratitudeData, id }) => createEditGratitude(newGratitudeData, id),
    onSuccess: () => {
      toast.success("Gratitude has been edited successfully");
      queryClient.invalidateQueries({ queryKey: ["gratitude"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editGratitude };
}
