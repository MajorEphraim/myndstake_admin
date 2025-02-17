import "../styles/PaymentsTypesComp.css"

function PaymentsTypesComp({colNo, setColNo}){
    return(
            <div className="types-container">
                <div className="bank-transfer" style={{backgroundColor: colNo===1 ? '#FE3E12':null}} onClick={()=>setColNo(1)}>
                    <h2 className="payment-type" style={{color: colNo===1 ? '#fff':'#000'}}>Bank Transfer</h2>
                    <div className="count-container" style={{backgroundColor: colNo===1 ? '#E2DFDF':'#FE3E12'}}>
                        <h2 className="payment-count" style={{color: colNo===1 ? '#000':'#fff'}}>4</h2>
                    </div>
                </div>
                <div className="e-wallet" style={{backgroundColor: colNo===2 ? '#FE3E12':null}} onClick={()=>setColNo(2)}>
                    <h2 className="payment-type" style={{color: colNo===2 ? '#fff':'#000'}}>E-Wallet</h2>
                    <div className="count-container" style={{backgroundColor: colNo===2 ? '#E2DFDF':'#FE3E12'}}>
                        <h2 className="payment-count" style={{color: colNo===2 ? '#000':'#fff'}}>6</h2>
                    </div>

                </div>
                <div className="cash-send" style={{backgroundColor: colNo===3 ? '#FE3E12':null}} onClick={()=>setColNo(3)}>
                    <h2 className="payment-type" style={{color: colNo===3 ? '#fff':'#000'}}>Cash Send</h2>
                    <div className="count-container" style={{backgroundColor: colNo===3 ? '#E2DFDF':'#FE3E12'}}>
                        <h2 className="payment-count" style={{color: colNo===3 ? '#000':'#fff'}}>2</h2>
                    </div>
                    
                </div>
            </div>
    )
}

export default PaymentsTypesComp;