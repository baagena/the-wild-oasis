import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //  1) geting isAuthenticated user data
  const { isAuthenticated, isLoading } = useUser();
  //  2) if there is no user authorised redirect to /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading]);
  // 3) if isLoading return Spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );
  // 4) if the user authorised render the layoutAPP
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
