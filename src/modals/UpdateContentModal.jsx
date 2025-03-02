import UpdateContentComp from '../components/UpdateContentComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function UpdateContentModal({setIsVisible, id, setIsSending}){
 
    return(
        <>
            <div className='modal-content' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                    <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                <UpdateContentComp id={id} setIsVisible={setIsVisible} setIsSending={setIsSending}/>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default UpdateContentModal