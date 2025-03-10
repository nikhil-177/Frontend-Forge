import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-3xl md:text-4xl"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
