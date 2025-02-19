import '../styles/VerificationPage.css'
import GroupedIdentificationComp from '../components/GroupedIdentificationsComp'
import pic from '../assets/image.jpeg'
import pic2 from '../assets/download.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import VerificationModal from '../modals/VerificationModal'
import { useState, useContext } from 'react'
import { DocumentationsContext } from '../context/DocumentationsContext'
 

function VerificationPage(){
  const [isVisble, setIsVisible] = useState(false)
  const [openedDetails, setOpenedDetails] = useState(null)
  const { documentations } = useContext(DocumentationsContext)
  
  const groupedData = [
    [{id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
      {id:'2', email:'jeff@gmail.com', date:'04/01/2025', pic,idPic:pic2},
      {id:'3', email:'Thabiso@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
    ],
    [
      {id:'4', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
      {id:'5', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
      {id:'6', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
    ],
    [{id:'7', email:'Sphiwe@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
      {id:'8', email:'jack@gmail.com', date:'04/01/2025', pic,idPic:pic2},
      {id:'9',  email:'Thabo@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
    ],
  ]

  const groupData = ()=>{
  
    let arr = []

    let i = 0
    while (i < documentations.length) {
        let arr2 = documentations.slice(i,i+3)
        arr.push(arr2)
        i = i + 3
    }
   return arr
    
  }

    return(
      <>
        {
          isVisble ? <VerificationModal setIsVisible={setIsVisible} id={openedDetails}/> : null
        }
        <div className="verification-container">
          <div>
              <div className="verification-words-container">
                <div className='amount-circle'>
                  <h6 className='amount'>{documentations.length}</h6>
                </div>
                  <h6 className="verification-words">Outstanding verification</h6>
              </div>
          </div>
          <div className='scrolling-details'>
              {
                groupData().map(arr=><GroupedIdentificationComp 
                                    arr={arr} 
                                    setIsVisible={setIsVisible}
                                    setOpenedDetails={setOpenedDetails}
                                    />)
              }
              
          </div>
        </div>
      </>
    )
}

export default VerificationPage