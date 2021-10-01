import { useAuth } from "../context/authContext";
import { Route, Navigate } from "react-router";

export const AuthRoute = ({ path, ...props }) => {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate state={{ from: path }} replace to="/login" />
      )}
    </div>
  );
};
