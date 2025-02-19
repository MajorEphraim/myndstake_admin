import { createContext, useState } from "react";

// context for payments
export const PaymentsContext = createContext()

//provider for payments context
export const PaymentsProvider = ({children})=>{
    const [payments, setPayments] = useState([
        {id:'1', accNo:'0123456789', bankName:'Capitec', branchCode:12345, amount:500, type:'transfer'},
        {id:'2', accNo:'0123456789', bankName:'Capitec', branchCode:12345, amount:500, type:'transfer'},
        {id:'3', accNo:'0123456789', bankName:'Capitec', branchCode:12345, amount:500, type:'transfer'},
        {id:'4', accNo:'0123456789', bankName:'Capitec', branchCode:12345, amount:500, type:'transfer'},
        {id:'5', accNo:'0123456789', bankName:'Capitec', branchCode:12345, amount:500, type:'transfer'},
        {id:'1', cellNo:'0123456789',  amount:500, type:'e-wallet'},
        {id:'2', cellNo:'0123456789',  amount:500, type:'e-wallet'},
        {id:'3', cellNo:'0123456789',  amount:500, type:'e-wallet'},
        {id:'4', cellNo:'0123456789',  amount:500, type:'cash send'},
        {id:'5', cellNo:'0123456789',  amount:500, type:'cash send'},
    ])

    return(
        <PaymentsContext.Provider value={{payments}}>
            {children}
        </PaymentsContext.Provider>
    )
}

