import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(1)

    const changeUserID = (id) => {
        setUserId(id)
    }

    return (
        <UserContext.Provider value={{ userId, changeUserID }}>
            {children}
        </UserContext.Provider>
    )
}