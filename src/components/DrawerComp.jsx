import '../styles/DrawerComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { DrawerContext } from '../context/DrawerContext';

function DrawerComp() {

    const {animation, closeDrawer} = useContext(DrawerContext)



    return(
        <div className="drawer-content" style={{animation:'forwards 1s '+animation}}>
            <div className='drawer-close-container' onClick={closeDrawer}>
                <FontAwesomeIcon icon={faXmark} color="#fff" size='3x'/>
            </div>
            <div className='drawer-links'>
            <div className="drawer-verification-link">
                <a href="/verifications">
                    <h5 className="drawer-link-text">User Verification</h5>
                </a>
            </div>
            <div className="drawer-link-container">
                <a href="/payments">
                    <h5 className="drawer-link-text">Payments</h5>
                </a>
            </div>
            <div className="drawer-link-container">
                <a href="/content">
                    <h5 className="drawer-link-text">App Content</h5>
                </a>
            </div>
            </div>
        </div>
    )
}

export default DrawerComp