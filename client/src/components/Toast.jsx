import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Toast() {
  const [show, setShow] = useState(false);
  const message = useSelector((state) => state.toast.message);

  useEffect(() => {
    let timeout = null;
    if (message) {
      setShow(true);
      timeout = setTimeout(() => setShow(false), 8000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  return show && <div className="toast">{message}</div>;
}

export default Toast;
