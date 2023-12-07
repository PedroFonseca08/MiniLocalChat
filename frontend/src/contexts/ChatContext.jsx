import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";


export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
    const [chatId, setChatId] = useState(-1)
    const { userId } = useContext(UserContext);

    useEffect(() => {
        console.log(userId);
        fetch("http://localhost:8080/conversa/proximoId/" + userId)
          .then((res) => res.json())
          .then((json) => {
            setChatId(json);
          });
      }, [userId]);

    const changeChat = (id) => {
        setChatId(id)
    }

    return (
        <ChatContext.Provider value={{ chatId, changeChat }}>
            {children}
        </ChatContext.Provider>
    )
}