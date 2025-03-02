import { createContext, useState } from "react";

// context for account details
export const AccountContext = createContext()

//provider for account context
export const AccountProvider = ({children})=>{
    const [details, setDetails] = useState({
        username:'',
        email:''
    })

    const updateDetails = ()=>{
        localStorage.removeItem('admin details')
        localStorage.removeItem('userId')
        setDetails({username:'',email:''})
    }

    return(
        <AccountContext.Provider value={{details, updateDetails}}>
            {children}
        </AccountContext.Provider>
    )
}

