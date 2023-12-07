import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // Obtém o userId do cookie, ou usa -1 se não estiver presente
  const [userId, setUserId] = useState(() => {
    const cookieUserId = Cookies.get("userId");
    return cookieUserId ? parseInt(cookieUserId, 10) : -1;
  });

  // Atualiza o cookie sempre que o userId muda
  useEffect(() => {
    Cookies.set("userId", userId.toString(), { expires: 7 }); // Defina a expiração conforme necessário
  }, [userId]);

  const changeUserID = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, changeUserID }}>
      {children}
    </UserContext.Provider>
  );
};
