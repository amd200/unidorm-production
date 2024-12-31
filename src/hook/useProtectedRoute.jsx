import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/useContext";

const useProtectedRoute = () => {
  const { user, updateUserInLocalStorage } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (user && user.role == "USER") {
      setIsUser(true);
    }
  }, [user, setIsUser]);

  return [isUser];
};

export default useProtectedRoute;
