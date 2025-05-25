import { Link } from "react-router";
import userStore from "../store/user";

const DashboardPage = () => {
  const user = userStore().user!;
  return (
    <main>
      <div>
        <Link to="/">Home</Link>
        <a href={`${import.meta.env.VITE_SERVER_URL}/auth/logout`}>Logout</a>
      </div>
      <div>Hello {user.firstName}</div>
    </main>
  );
};

export default DashboardPage;
