import RadionButtonComp from "./RadioButtonComp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeContent } from '../services/firestoreServices'

function TableRowComp({item, setIsVisible, setId}) {

    const handleClick = ()=>{
      setId(item.id)
      setIsVisible(true);
    }
    return(
        <div className="content-headings-row">
        <div className="question-container">
          <h6 className="content-question">{item.question}</h6>
        </div>
        <div className="genre-container">
          <div className='genre-text-container'>
            <h6 className="content-genre">{item.genre}</h6>
          </div>
        </div>
        <div className="content-options">

          <div className='paired-options'>
          {
            item.options.filter((i,index)=>index < 2).map(option=>(
                <div className='option-container'>
                  <RadionButtonComp isSelected={option ==item.correct} isBig={false}/>
                  <h5 className='option-text'>{option}</h5>
                </div>
            )) 
          }
        </div>

        <div className='paired-options'>
          {
            item.options.filter((i,index)=>index > 1).map(option=>(
                <div className='option-container'>
                  <RadionButtonComp isSelected={option ==item.correct} isBig={false}/>
                  <h5 className='option-text'>{option}</h5>
                </div>
            )) 
          }
        </div>  
        </div>
        <div className="content-actions">
            <div className='content-update-btn' onClick={handleClick}>
              <FontAwesomeIcon icon={faFilePen}  color='#fff'/>
            </div>

            <div className='content-delete-btn' onClick={()=>removeContent(item.id)}>
              <FontAwesomeIcon icon={faTrash} color='#fff'/>
            </div>
        </div>
      </div>
    )
}

export default TableRowComp