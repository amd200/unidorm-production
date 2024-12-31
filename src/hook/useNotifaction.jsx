// useNotifaction.js
import { toast } from "react-toastify";

// Custom Hook for notifications
const notify = (msg, type) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "warning":
      toast.warning(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    default:
      toast(msg);
      break;
  }
};

export default notify;
