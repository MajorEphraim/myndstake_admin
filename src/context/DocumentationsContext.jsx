import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'
import { getDocDetails } from "../services/firestoreServices";

import pic from '../assets/image.jpeg'
import pic2 from '../assets/download.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import image2 from '../assets/image2.jpeg'

// context for documenations
export const DocumentationsContext = createContext()

//Provider for documentations context
export const DocumentationsProvider = ({children})=>{
    const [documentations, setDocumentations] = useState([
                        // {id:'1', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
                        // {id:'2', email:'jeff@gmail.com', date:'04/01/2025', pic,idPic:pic2},
                        // {id:'3', email:'Thabiso@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
                        // {id:'4', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
                        // {id:'5', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
                        // {id:'6', email:'Tom@gmail.com', date:'10/02/2025', pic:image2,idPic:pic2},
                        // {id:'7', email:'tshepo@gmail.com', date:'10/12/2024', pic:image4,idPic:pic2},
                        // {id:'8', email:'jeff@gmail.com', date:'04/01/2025', pic,idPic:pic2},
                        // {id:'9', email:'Thabiso@gmail.com', date:'07/02/2025', pic:image3,idPic:pic2},
              
    ])

    useEffect(()=>{

        const q = query(collection(db, "documentations"), where("status", "==", "Pending"));
        const unsubscribe = onSnapshot(q, async(querySnapshot) => {
        const promises = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                promises.push((async()=>{
                    const details = await getDocDetails(data.userId)
                    return {...data, id:doc.id, email:details.email}
                })());
            });
            try {
                const response = await Promise.all(promises)
                setDocumentations(response)
                
            } catch (error) {
                console.log(error)
            }

        });

        return ()=>{
            unsubscribe()
        }

    },[])


    return(
        <DocumentationsContext.Provider value={{documentations}}>
            {children}
        </DocumentationsContext.Provider>
    )
}

