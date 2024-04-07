import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

// export function useUpdateUser() {
//   const queryClient = useQueryClient();

//   const { mutate: updateUser, isLoading: isUpdating } = useMutation({
//     mutationFn: updateCurrentUser,
//     onSuccess: (user) => {
//       toast.success("User Details updated Successfullt");
//       queryClient.setQueryData(["user"], user);
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { updateUser, isUpdating };
// }

// import { useMutation, useQueryClient } from "@tanstack/react-query";

// import toast from "react-hot-toast";
// import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      console.log("userr", user);
      toast.success("Account  details has been updated  successfully");
      queryClient.setQueryData(["user"], user.user);
      //   queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
