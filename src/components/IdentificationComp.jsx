import '../styles/IdentificationComp.css'

function IdentificationComp({id, email, sentDate, pic, idPic, setIsVisible, setOpenedDetails}){
    const handleOpen =()=>{
        setOpenedDetails(id)
        setIsVisible(true)
    }
    return (
        <div className="identification-container">
            <div className="email-date-container">
                <h6 className="email">{email}</h6>
                <div className='date-container'>
                    <h6 className="date-text">Date sent:</h6>
                    <h6 className="date">{sentDate}</h6>
                </div>
            </div>
            <div className='pics'>
                <img className='selfie' src={pic}/>
                <img className='id-pic' src={idPic}/>
            </div>
            <div className='btn-container'>
                <div className='open-btn' onClick={handleOpen}>
                    <h5 className='btn-text'>Open</h5>
                </div>
            </div>
        </div>
    )
}

export default IdentificationComp