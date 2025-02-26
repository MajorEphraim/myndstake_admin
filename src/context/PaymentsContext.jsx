import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for payments
export const PaymentsContext = createContext()

//provider for payments context
export const PaymentsProvider = ({children})=>{
    const [payments, setPayments] = useState([])

    useEffect(()=>{

        const q = query(collection(db, "payments"), where("status", "==", "Outstanding"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push({...doc.data(), id:doc.id});
            });

            setPayments(array)
        });

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <PaymentsContext.Provider value={{payments}}>
            {children}
        </PaymentsContext.Provider>
    )
}

