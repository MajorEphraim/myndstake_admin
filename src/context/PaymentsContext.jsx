import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for payments
export const PaymentsContext = createContext()

//provider for payments context
export const PaymentsProvider = ({children})=>{
    const [payments, setPayments] = useState([
        {type:'e-wallet', cellNo:'0123456789', amount:450, status:'Paid'},
        {type:'cash send', cellNo:'0123456789', amount:450, status:'Outstanding'},
    ])

    useEffect(()=>{

        const q = query(collection(db, "payments"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push({...doc.data(), id:doc.id});
            });

            //setPayments(array)
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

