import { createContext, useState } from "react";

// context for account details
export const AccountContext = createContext()

//provider for account context
export const AccountProvider = ({children})=>{
    const [details, setDetails] = useState({
        username:'',
        email:''
    })

    const updateDetails = (data)=>{
        setDetails(data)
    }

    return(
        <AccountContext.Provider value={{details, updateDetails}}>
            {children}
        </AccountContext.Provider>
    )
}

