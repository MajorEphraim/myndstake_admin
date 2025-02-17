import { useState } from "react"
import PaymentsTypesComp from "../components/PaymentsTypesComp"
import '../styles/PaymentPage.css'
import BankTransferComp from "../components/BankTransferComp"
import EwalletComp from "../components/EwalletComp"
import CashSendComp from "../components/CashSendComp"

function PaymentPage(){

  const [colNo, setColNo] = useState(1)

  const data = [
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
  ]

  const renderPaymentType = ()=>{
    if(colNo === 1)
     return <BankTransferComp data={data && data.filter(item=>item.type === 'transfer')}/>
     else if(colNo === 2)
    return <EwalletComp data={data && data.filter(item=>item.type === 'e-wallet')}/>
    else
    return <CashSendComp data={data && data.filter(item=>item.type === 'cash send')}/>
  }

    return(
      <div className="payments-container">
        <PaymentsTypesComp colNo={colNo} setColNo={setColNo}/>
       {renderPaymentType()}
      </div>
    )
}

export default PaymentPage