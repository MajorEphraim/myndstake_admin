import PaymentButton from "./PaymentButton"

function BankTransferComp({data}){
    return (
        <div className="payments-table">
        <div className="headings-row">
            <div className="heading">
              <h6 className="heading-text">#</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Acc Holder Name</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Acc Number</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Bank Name</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Branch Code</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Amount</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text"></h6>
            </div>
        </div>

        {
          data.map((item, index)=>(
            <div className="payment-row">
                <div className="info-container">
                  <h6 className="payment-info">{index+1}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.holderName}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.accNo}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.bankName}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.branchCode}</h6>
                </div>
                <div className="info-container">
                  <h6 className="payment-info">{item.amount}</h6>
                </div>
                <div className="payment-btn-container">
                  <PaymentButton name='Done' color='#470477' />
                </div>
            </div>
          ))
        }
    </div>
    )
}

export default BankTransferComp