import { Link } from "react-router-dom";

const ErrorHandler = () => {
  return (
    <div>
      <h1>404 PAGE NOT FOUND</h1>
      <Link to="/">GO BACK HOME</Link>
    </div>
  );
};

export default ErrorHandler;
