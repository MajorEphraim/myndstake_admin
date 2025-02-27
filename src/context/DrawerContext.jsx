import { createContext, useState } from "react";

// context for auth details
export const DrawerContext = createContext()

//provider for content context
export const DrawerProvider = ({children})=>{
    const [animation, setAnimation] = useState("")
    
    const closeDrawer =()=>{
        setAnimation("close-drawer")
    }

    const openDrawer =()=>{
        setAnimation("open-drawer")
    }

    return(
        <DrawerContext.Provider value={{animation, closeDrawer, openDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}