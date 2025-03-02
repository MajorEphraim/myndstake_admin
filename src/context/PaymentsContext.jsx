import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for payments
export const PaymentsContext = createContext()

//provider for payments context
export const PaymentsProvider = ({children})=>{
    const [payments, setPayments] = useState([
        {id:"1",type:'e-wallet', cellNo:'0123456789', amount:450, status:'Paid'},
        {id:"2",type:'cash send', cellNo:'0123456789', amount:450, status:'Outstanding'},
        {id:"3", type:'transfer', bankName:"Capitec bank", holderName:'Peter Smith', 
            accNo:'0123456789', branchCode:"12345" ,amount:450, status:'Outstanding'},
            {id:"4", type:'transfer', bankName:"FNB", holderName:'John Cruger', 
                accNo:'0123456789', branchCode:"12345" ,amount:450, status:'Outstanding'},
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

