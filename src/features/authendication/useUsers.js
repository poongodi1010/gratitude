import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUsers() {
  const {
    isLoading,
    data: user,
    isAuthenticated,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(isAuthenticated);
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
