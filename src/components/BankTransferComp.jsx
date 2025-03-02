import PaymentButton from "./PaymentButton"
import { makePayment } from '../services/firestoreServices'
import { useState } from "react";

function BankTransferComp({data, setIsVisible, setId}){
    return (
        <div className="payments-table">
        <div className="headings-row">
            <div className="heading">
              <h6 className="heading-text">#</h6>
            </div>
            <div className="heading-2">
              <h6 className="heading-text">Acc Holder Name</h6>
            </div>
            <div className="heading-3">
              <h6 className="heading-text">Acc Number</h6>
            </div>
            <div className="heading-4">
              <h6 className="heading-text">Bank Name</h6>
            </div>
            <div className="heading-5">
              <h6 className="heading-text">Branch Code</h6>
            </div>
            <div className="heading-6">
              <h6 className="heading-text">Amount</h6>
            </div>
            <div className="heading-7">
              <h6 className="heading-text"></h6>
            </div>
        </div>
 
        {
          data.map((item, index)=>(
            <div className="payment-row">
                <div className="info-container">
                  <h6 className="payment-info">{index+1}</h6>
                </div>
                <div className="info-container-2">
                  <h6 className="payment-info">{item.holderName}</h6>
                </div>
                <div className="info-container-3">
                  <h6 className="payment-info">{item.accNo}</h6>
                </div>
                <div className="info-container-4">
                  <h6 className="payment-info">{item.bankName}</h6>
                </div>
                <div className="info-container-5">
                  <h6 className="payment-info">{item.branchCode}</h6>
                </div>
                <div className="info-container-6">
                  <h6 className="payment-info">{item.amount}</h6>
                </div>

                {
                  item.status === "Outstanding" ? (
                    <>
                    <div className="m-payment-btn-container" onClick={()=>{setId(item.id);setIsVisible(true) }}>
                      <PaymentButton name='Open' color='#470477'/>
                    </div>

                    <div className="payment-btn-container" onClick={()=>makePayment(item.id)}>
                      <PaymentButton name='Done' color='#470477'/>
                    </div>
                    </>

                  ):(
                    <>
                      <div className="m-payment-btn-container">
                        <PaymentButton name='Paid' color='#FE3E12'/>
                      </div>
                      <div className="payment-btn-container">
                        <PaymentButton name='Paid' color='#FE3E12'/>
                      </div>
                    </>
                  )
                }


            </div>
          ))
        }
    </div>
    )
}

export default BankTransferComp