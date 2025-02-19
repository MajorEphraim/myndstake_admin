import { createContext, useState } from "react";

// context for account details
export const AccountContext = createContext()

//provider for account context
export const AccountProvider = ({children})=>{
    const [username, setUsername] = useState('Christopher')

    return(
        <AccountContext.Provider value={{username, setUsername}}>
            {children}
        </AccountContext.Provider>
    )
}
