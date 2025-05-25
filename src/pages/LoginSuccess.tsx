import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api/queries";
import { Navigate } from "react-router";

const LoginSuccessPage = () => {
  const { isLoading, error } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
  });
  if (isLoading) return <div>...</div>;
  if (error) return <Navigate to="/login" />;
  return <Navigate to="/dashboard" />;
};

export default LoginSuccessPage;
