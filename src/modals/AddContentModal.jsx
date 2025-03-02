import MobileAddContentComp from '../components/MobileAddContentComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function AddContentModal({setIsVisible, setIsSending}){
 
    return(
        <>
            <div className='modal-content' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                    <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                <MobileAddContentComp setIsSending={setIsSending}/>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default AddContentModal