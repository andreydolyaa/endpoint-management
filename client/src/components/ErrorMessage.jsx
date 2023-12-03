import { RiErrorWarningFill } from "react-icons/ri";

const ErrorMessage = ({ error }) => {
  return (
    <div className="centered-min-data">
      <RiErrorWarningFill className="h-6 w-6  text-yellow-500" />
      <p className="mt-3 centered-min-text">{error}</p>
    </div>
  );
};

export default ErrorMessage;
