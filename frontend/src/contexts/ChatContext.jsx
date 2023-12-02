import { createContext, useState } from "react";

export const ChatContext = createContext()

export const ChatContextProvider = ({ children }) => {
    const [chatId, setChatId] = useState(0)

    const changeChat = (id) => {
        setChatId(id)
    }

    return (
        <ChatContext.Provider value={{ chatId, changeChat }}>
            {children}
        </ChatContext.Provider>
    )
}