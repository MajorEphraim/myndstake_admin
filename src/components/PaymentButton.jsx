import '../styles/PaymentButton.css'
function PaymentButton({name, color}){
    return(
        <div className="payment-btn" style={{backgroundColor:color}}>
            <h6 className="payment-btn-text" >{name}</h6>
        </div>
    )
}

export default PaymentButton