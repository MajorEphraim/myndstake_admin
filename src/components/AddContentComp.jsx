import { useState } from "react"
import RadionButtonComp from "./RadioButtonComp"

function AddContentComp() {
    const [options, setOptions] = useState([
        {name:'Transformers', isSelected:false},
        {name:'Avengers', isSelected:false},
        {name:'Lion King', isSelected:false},
    ])

    const [option, setOption] = useState('')

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

    return (
     <div className="add-content">
        <div className="add-content-actions">
            <h4 className='add-content-text'>Add Content</h4>
            <select className='choose-genre-dropdown'>
            <option>Choose Genre</option>
            </select>
            <input 
                className="question-input"
                placeholder="Type a question..." 
                />
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
                            
                    </div>
                </div>
                    )
                }
            </div>
        </div>
       
        <div className='submit-option-btn'>
            <h5 className='btn-text'>Submit</h5>
        </div>
     </div>
 )
}

export default AddContentComp