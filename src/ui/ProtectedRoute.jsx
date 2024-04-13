/* eslint-disable react/prop-types */
import { useUsers } from "../features/authendication/useUsers";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //Load the authendicated user
  const { isAuthenticated, isLoading } = useUsers();

  //if there is no user then redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isLoading, isAuthenticated, navigate],
  );

  //while loading show a spinner
  if (!isAuthenticated && !isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-[#111827]">
        <Spinner />
      </div>
    );
  //if so render app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
