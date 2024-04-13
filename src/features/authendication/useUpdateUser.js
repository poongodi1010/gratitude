import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("Account  details has been updated  successfully");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
