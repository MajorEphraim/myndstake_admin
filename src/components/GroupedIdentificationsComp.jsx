import IdentificationComp from "./IdentificationComp"
import '../styles/GroupedIdentificationsComp.css'

function GroupedIdentificationComp({arr, setIsVisible,setOpenedDetails}){
    return(
        <div className="grouped-identifications">
            {
                arr.map(item=><IdentificationComp 
                                id ={item.id}
                                pic = {item.pic}
                                idPic = {item.idPic}
                                email = {item.email}
                                sentDate = {item.sentDate}
                                setIsVisible={setIsVisible}
                                setOpenedDetails={setOpenedDetails}
                            />)
            }
            
        </div>
    )
}

export default GroupedIdentificationComp