import { useState, useContext } from "react"
import RadionButtonComp from "./RadioButtonComp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import { GenresContext } from "../context/GenresContext";
import { ContentContext } from "../context/ContentContext";
import { updateContent } from '../services/firestoreServices'

function UpdateContentComp({id, setIsVisible}) {
    const [option, setOption] = useState('')
    const { genres } = useContext(GenresContext)
    const { content } = useContext(ContentContext)
    
    const openedContent = content.filter(item=>item.id === id)[0]
    const [question, setQuestion] = useState(openedContent.question ?openedContent.question:{})
    const [genre, setGenre] = useState(openedContent.genre)
    const [options, setOptions] = useState(openedContent.options.map(name=>({name,isSelected:name === openedContent.correct})))
    
    //check if option is empty or it exists before adding it
    const addOption =()=>{
        if(!options.map(item=>item.name).includes(option) && option.length>0)
        setOptions(prev=>[...prev,{name:option, isSelected:false}])
        setOption('')
    }

    //remove the option clicked
    const removeOption =(opt)=>{
        setOptions(prev=>prev.filter(item=>item.name !== opt))
    }

    //select an option if the one clicked otherwise deselect
    const selectOption =(name)=>{

        const arr = []
            options.forEach((item) => {
                if(item.name !== name)
                    arr.push({...item, isSelected:false})
                else 
                    arr.push({...item, isSelected:true})
            });

        setOptions(arr)

    }

    const handleUpdate = async()=>{

        const isSelectedArr = options.filter(option=> option.isSelected)
        if(genre === null || genre === "Choose Genre"){
            alert("Choose genre")
            return
        }

        if(question === ""){
            alert("Enter a question")
            return
        }

        if(options.length < 2){
            alert("Enter atleast 2 options")
            return
        }

        if(isSelectedArr.length == 0){
            alert("Select the correct option")
            return
        }

        try {
            await updateContent({question, 
                                 genre, 
                                 options: options.map(option=>option.name),
                                 correct:isSelectedArr[0].name},id)
                                 
            setIsVisible(false)


        } catch (error) {
            alert(error.message)
        }
    }


    return (
     <div className="add-content">
        <div className="add-content-actions">
            <h4 className='add-content-text'>Update Content</h4>
            <select 
            className='choose-genre-dropdown' 
            onChange={e=>setGenre(e.target.value)}
            value={genre}
            >
            <option>Choose Genre</option>
            {
                genres.map(genre=><option>{genre}</option>)
            }
            </select>
            <textarea
            rows="4" 
            cols="50" 
            className="question-input"
            placeholder="Type a question..." 
            onChange={e=>setQuestion(e.target.value)}
            value={question}
            >
            </textarea> 
                
    
            <div>
            <h4 className="options-text">Options</h4>
            <div className="all-options-container">
                {
                    options.map((item,index)=>(
                        <div className="option-content-container">
                            <div className="radio-option-choice" onClick={()=>selectOption(item.name)}>
                                <RadionButtonComp isSelected={item.isSelected} isBig={true}/>
                                <h5 className="added-option">{item.name}</h5>
                            </div>
                            <div className="remove-option-btn" onClick={()=>removeOption(item.name)}>
                                <FontAwesomeIcon icon={faXmark} color="#fff"/>
                            </div>
                        </div>

                    ))
                }
            </div>
                {
                    options.length>3?null:(
                <div className="option-input-container">
                      <input className="option-input" 
                             placeholder="Type the option ..."
                             onChange={e=>setOption(e.target.value)}
                             value={option}
                    />          
                    <div className="add-option-btn" onClick={addOption}>
                        <FontAwesomeIcon icon={faPlus}  color="#fff"/>
                    </div>
                </div>
                    )
                }
            </div>
        </div>
       
        <div className='submit-option-btn' onClick={handleUpdate}>
            <h5 className='btn-text'>Update</h5>
        </div>
     </div>
 )
}

export default UpdateContentComp