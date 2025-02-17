import IdentificationComp from "./IdentificationComp"
import '../styles/GroupedIdentificationsComp.css'

function GroupedIdentificationComp({arr}){
    return(
        <div className="grouped-identifications">
            {
                arr.map(item=><IdentificationComp 
                                id ={item.id}
                                pic = {item.pic}
                                idPic = {item.idPic}
                                email = {item.email}
                                date = {item.date}
                            />)
            }
            
        </div>
    )
}

export default GroupedIdentificationComp