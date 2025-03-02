import UpdateContentComp from '../components/UpdateContentComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function LoaderModal(){
 
    return(
        <>
            <div className='modal-content' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h1 style={{color:'#fff', fontSize:'20px'}}>...Loading</h1>
            </div>

            <div className="verify-container"/>
        </>
    )
}

export default LoaderModal
