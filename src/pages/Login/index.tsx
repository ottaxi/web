import { Link } from "react-router";
import GoogleBtn from "./GoogleBtn";
import "./login.css";

const LoginPage = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center pt-10 dark:bg-neutral-800">
      <div className="h-xl border-0 sm:border-1 shadow-none sm:shadow-sm border-neutral-400 dark:border-neutral-950 dark:bg-neutral-950 dark:text-neutral-200 rounded-md p-6 flex flex-col items-center gap-8">
        <img
          src="data:image/png;base64,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"
          className="h-16 w-16"
        />
        <h1 className="text-2xl text-center font-semibold">
          Welcome to [application_name]
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Click below to login or register your account
        </p>
        <div className="flex flex-col items-center gap-4">
          <GoogleBtn />
          <Link
            to="/"
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            Go back
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
