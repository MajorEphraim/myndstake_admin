import '../styles/VerificationModal.css'
import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DocumentationsContext } from '../context/DocumentationsContext'
import { verifyDocumentation, rejectDocumentation } from '../services/firestoreServices'

function VerificationModal({setIsVisible, id}){
    const [viewed, setViewed] = useState(0)
    const { documentations } = useContext(DocumentationsContext)
    const documentation = documentations.filter(item=>item.id === id)[0]
    const selfie = documentation.pic
    const idPic = documentation.idPic

    const handleVerify = async()=>{
        try {
            await verifyDocumentation(id, documentation.userId)
        } catch (error) {
            alert(error.message)
        }
    }

    const handleReject = async()=>{
        try {
            await rejectDocumentation(id, documentation.userId)
        } catch (error) {
            alert(error.message)
        }
    }
    
    return(
        <>
            <div className='modal-content'>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                    <div className='actual-content'>
                    <div className='all-images'>
                        <div className='images'>
                            <div className='pic-container' style={{border:viewed === 0 ?'#fff solid 4px' : null}}   onClick={()=>setViewed(0)}>
                                <img src={selfie} alt='selfie' height='100%' width='100%'/>
                            </div>

                            <div className='pic-container' style={{border:viewed === 1 ?'#fff solid 4px' : null}} onClick={()=>setViewed(1)}>
                                <img src={idPic} alt='id pic' height='100%' width='100%'/>
                            </div>
                        </div>
                        <div className='viewed-image-container'>
                            <img src={ viewed === 0 ? selfie : idPic} className='viewed-image' />
                        </div>
                    </div>
                    <div className='buttons' onClick={handleVerify}>
                        <div className='verify-btn'>
                            <h6 className='action-btn-text'>Verify</h6>
                        </div>

                        <div className='reject-btn' onClick={handleReject}>
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