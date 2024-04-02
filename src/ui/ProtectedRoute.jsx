/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUsers } from "../features/authendication/useUsers";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;
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
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //if so render app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
