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
          totalBank={bankArr.filter(item=>item.status === "Outstanding").length} 
          totalEwallet={ewalletArr.filter(item=>item.status === "Outstanding").length}
          totalCashSend={cashSendArr.filter(item=>item.status === "Outstanding").length}  
          data={payments} colNo={colNo} 
          setColNo={setColNo}
        />
       {renderPaymentType()}
      </div>
    )
}

export default PaymentPage