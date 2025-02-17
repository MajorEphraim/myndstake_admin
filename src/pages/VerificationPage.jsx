import '../styles/VerificationPage.css'
import GroupedIdentificationComp from '../components/GroupedIdentificationsComp'
import pic from '../assets/image.jpeg'
import pic2 from '../assets/download.jpeg'
import VerificationModal from '../modals/VerificationModal'
 

function VerificationPage(){
  const groupedData = [
    [{id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
    ],
    [{id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
    ],
    [{id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
      {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic,idPic:pic2},
    ],
  ]
    return(
      <>
        <VerificationModal/>
        <div className="verification-container">
          <div>
              <div className="verification-words-container">
                <div className='amount-circle'>
                  <h6 className='amount'>200</h6>
                </div>
                  <h6 className="verification-words">Outstanding verification</h6>
              </div>
          </div>
          <div>
              {
                groupedData.map(arr=><GroupedIdentificationComp arr={arr}/>)
              }
              
          </div>
        </div>
      </>
    )
}

export default VerificationPage