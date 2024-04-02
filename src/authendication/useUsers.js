import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUsers() {
  const {
    isLoading,
    data: user,
    error,
    isAuthenticated,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isAuthenticated, isLoading, error, user };
}
