import '../styles/VerificationModal.css'
import pic from '../assets/image.jpeg'
import pic2 from '../assets/download.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image2 from '../assets/image2.jpeg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function VerificationModal({setIsVisible, id}){
    const [viewed, setViewed] = useState(0)

      const data = [
        {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
              {id:'2', email:'jeff@gmail.com', date:'04/01/2025', pic,idPic:pic2},
              {id:'4', email:'Thabiso@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
              {id:'3', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
              {id:'5', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
              {id:'6', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
       
        {id:'7', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
              {id:'8', email:'jeff@gmail.com', date:'04/01/2025', pic,idPic:pic2},
              {id:'9',  email:'Thabiso@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
    
      ]
    return(
        <>
            <div className='modal-content'>
                <div className='close-btn' onClick={()=>setIsVisible(false)}>
                <FontAwesomeIcon icon={faXmark} size='4x'  color="#fff"/>
                </div>
                    <div>
                    <div className='images'>
                        <div className='pic-container' style={{border:viewed === 0 ?'#fff solid 4px' : null}}   onClick={()=>setViewed(0)}>
                            <img src={data.filter(item=>item.id === id)[0].pic} alt='selfie' height='100%' width='100%'/>
                        </div>

                        <div className='pic-container' style={{border:viewed === 1 ?'#fff solid 4px' : null}} onClick={()=>setViewed(1)}>
                            <img src={data.filter(item=>item.id === id)[0].idPic} alt='id pic' height='100%' width='100%'/>
                        </div>
                    </div>
                    <div className='viewed-image-container'>
                        <img src={ viewed === 0 ? data.filter(item=>item.id === id)[0].pic : data.filter(item=>item.id === id)[0].idPic} className='viewed-image' />
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