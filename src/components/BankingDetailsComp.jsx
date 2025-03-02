import '../styles/BankingDetailsComp.css'
import React,{ useContext } from "react"
import { PaymentsContext } from '../context/PaymentsContext'
import { makePayment } from '../services/firestoreServices'

function BankingDetailsComp({id, setIsVisible}) {
    
    const { payments } = useContext(PaymentsContext)

    const {holderName, accNo, branchCode, amount, bankName} = payments.filter(item=>item.id === id)[0]
    
    const arr = [
        {name:"Account Holder Name", value:holderName},
        {name:"Account Number", value:accNo},
        {name:"Bank Name", value:bankName},
        {name:"Branch Code", value:branchCode},
        {name:"Amount", value:amount},
    ]
    
    const handleDone = async()=>{
        try {
            await makePayment(id)
            setIsVisible(false)
        } catch (error) {
            alert(error.message)
        }
    }
    
    return (
        <div className="banking-details-container">
            <div className='banking-details-upper-container'>
                <h1 className="banking-details-text">Banking details</h1>
                <div>
                    {
                        arr.map(item=>(
                            <div className='details-container'>
                                <h6 className='details-name'>{item.name}</h6>
                                <h4 className='details-value'>{item.value}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='open-btn' onClick={handleDone}>
                <h5 className='btn-text'>Done</h5>
            </div>
        </div>
    )    
}

export default BankingDetailsComp