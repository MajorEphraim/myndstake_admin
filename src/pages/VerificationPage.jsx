import '../styles/VerificationPage.css'
import GroupedIdentificationComp from '../components/GroupedIdentificationsComp'
import VerificationModal from '../modals/VerificationModal'
import { useState, useContext } from 'react'
import { DocumentationsContext } from '../context/DocumentationsContext'
 

function VerificationPage(){
  const [isVisble, setIsVisible] = useState(false)
  const [openedDetails, setOpenedDetails] = useState(null)
  const { documentations } = useContext(DocumentationsContext)
  
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
                  <h6 className="verification-words">Outstanding verifications</h6>
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