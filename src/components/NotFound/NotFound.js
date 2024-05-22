import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <Link to="/" className="mt-4 text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
