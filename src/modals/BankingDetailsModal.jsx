import BankingDetailsComp from '../components/BankingDetailsComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function BankingDetailsModal({setIsVisible, id}){
 
    return(
        <>
            <div className='modal-content' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                    <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                <BankingDetailsComp id={id} setIsVisible={setIsVisible}/>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default BankingDetailsModal