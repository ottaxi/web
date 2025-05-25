import { Navigate, Outlet, useLocation } from "react-router";
import userStore from "../store/user";
import { useEffect, useState } from "react";
import { getMe } from "../api/queries";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const user = userStore(({ user }) => user);
  const location = useLocation();

  const getUser = async () => {
    await getMe();
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  if (!user) {
    if (loading) return null;
    return <Navigate to="/login" replace state={{ redirect: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
