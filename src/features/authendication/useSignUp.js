import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/home", { restart: true });
      toast.success(
        "Acount created successfully",
      );
    },
  });
  return { signup, isLoading };
}
