import '../styles/VerificationModal.css'
import pic from '../assets/image.jpeg'
import pic2 from '../assets/download.jpeg'

function VerificationModal(){
    return(
        <>
            <div className='modal-content'>
                <div className='close-btn'>
                    <h1 className='close-btn-text'>X</h1>
                </div>
                    <div>
                    <div className='images'>
                        <div className='pic-container'>
                            <img src={pic} alt='selfie' height='100%' width='100%'/>
                        </div>

                        <div className='pic-container'>
                            <img src={pic2} alt='id pic' height='100%' width='100%'/>
                        </div>
                    </div>
                    <div className='viewed-image-container'>
                        <img src={pic} className='viewed-image' />
                    </div>
                    <div className='buttons'>
                        <div className='verify-btn'>
                            <h6 className='action-btn-text'>Verify</h6>
                        </div>

                        <div className='reject-btn'>
                            <h6 className='action-btn-text'>Reject</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default VerificationModal