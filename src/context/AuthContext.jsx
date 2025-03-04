import { createContext, useState } from "react";

// context for auth details
export const AuthContext = createContext()

//provider for content context
export const AuthProvider = ({children})=>{
    const [userId, setUserId] = useState(localStorage.getItem("userId"))

    return(
        <AuthContext.Provider value={{userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    )
}

