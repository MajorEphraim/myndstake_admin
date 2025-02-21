import { useState, useContext } from "react"
import PaymentsTypesComp from "../components/PaymentsTypesComp"
import '../styles/PaymentPage.css'
import BankTransferComp from "../components/BankTransferComp"
import EwalletComp from "../components/EwalletComp"
import CashSendComp from "../components/CashSendComp"
import { PaymentsContext } from "../context/PaymentsContext"

function PaymentPage(){

  const [colNo, setColNo] = useState(1)

  const {payments} = useContext(PaymentsContext)

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

  const bankArr = payments && payments.filter(item=>item.type === 'transfer')
  const ewalletArr = payments && payments.filter(item=>item.type === 'e-wallet')
  const cashSendArr = payments && payments.filter(item=>item.type === 'cash send')

  const renderPaymentType = ()=>{
    if(colNo === 1)
     return <BankTransferComp data={bankArr}/>
     else if(colNo === 2)
    return <EwalletComp data={ewalletArr}/>
    else
    return <CashSendComp data={cashSendArr}/>
  }

    return(
      <div className="payments-container">
        <PaymentsTypesComp 
          totalBank={bankArr.length} 
          totalEwallet={ewalletArr.length}
          totalCashSend={cashSendArr.length}  
          data={data} colNo={colNo} 
          setColNo={setColNo}
        />
       {renderPaymentType()}
      </div>
    )
}

export default PaymentPage