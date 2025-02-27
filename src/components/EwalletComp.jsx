import PaymentButton from "./PaymentButton"
import '../styles/EwalletComp.css'
import { makePayment } from '../services/firestoreServices'

function EwalletComp({data}){
    return (
        <div className="payments-table">
        <div className="headings-row">
            <div className="heading-no">
              <h6 className="heading-text">#</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Cell Number</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Amount</h6>
            </div>
            <div className="empty-heading">
              
            </div>
        </div>

        {
          data.map((item, index)=>(
            <div className="payment-row">
                <div className="info-container-no">
                  <h6 className="payment-info">{index+1}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.cellNo}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.amount}</h6>
                </div>
                {
                  item.status === "Outstanding" ? (
                    <div className="ewallet-btn-container" onClick={()=>makePayment(item.id)}>
                      <PaymentButton name='Done' color='#470477'/>
                    </div>

                  ):(
                      <div className="ewallet-btn-container">
                      <PaymentButton name='Paid' color='#FE3E12'/>
                    </div>
                  )
                }
            </div>
          ))
        }
    </div>
    )
}

export default EwalletComp