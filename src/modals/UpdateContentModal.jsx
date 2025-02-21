import UpdateContentComp from '../components/UpdateContentComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function UpdateContentModal({setIsVisible, id}){
 
    return(
        <>
            <div className='modal-content' style={{display:'flex', justifyItems:'center', alignItems:'center'}}>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                    <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                <UpdateContentComp id={id}/>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default UpdateContentModal