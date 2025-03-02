import '../styles/DrawerComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DrawerContext } from '../context/DrawerContext';
import { useNavigate } from 'react-router-dom';

function DrawerComp() {

    const {animation, closeDrawer} = useContext(DrawerContext)

    const navigate = useNavigate()

    const handleClick = (path)=>{
        navigate(path)
        closeDrawer()
    }
    return(
        <div className="drawer-content" style={{animation:'forwards 1s '+animation}}>
            <div className='drawer-close-container' onClick={closeDrawer}>
                <FontAwesomeIcon icon={faXmark} color="#fff" size='3x'/>
            </div>
            <div className='drawer-links'>
            <div className="drawer-verification-link" onClick={()=>handleClick('/verifications')}>
                
                    <h5 className="drawer-link-text">User Verification</h5>
                
            </div>
            <div className="drawer-link-container" onClick={()=>handleClick('/payments')}>
            
                    <h5 className="drawer-link-text">Payments</h5>
                
            </div>
            <div className="drawer-link-container" onClick={()=>handleClick('/content')}>
            
                    <h5 className="drawer-link-text">App Content</h5>
                
            </div>
            </div>
        </div>
    )
}

export default DrawerComp