import React, {createContext, useState} from "react";
import { data } from "../data/data";

const UserContext = createContext()

export const ContextProvider = ({children}) => {
    const [userList, setUserList] = useState(data)

    const value = {
        userList,
        setUserList
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}


export default UserContext