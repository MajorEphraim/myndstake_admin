import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for payments
export const PaymentsContext = createContext()

//provider for payments context
export const PaymentsProvider = ({children})=>{
    const [payments, setPayments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{

        const q = query(collection(db, "payments"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push({...doc.data(), id:doc.id});
            });

            setPayments(array)
            setIsLoading(false)
        });

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <PaymentsContext.Provider value={{payments, isLoading}}>
            {children}
        </PaymentsContext.Provider>
    )
}

