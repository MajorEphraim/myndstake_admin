import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'
import { getDocDetails } from "../services/firestoreServices";

// context for documenations
export const DocumentationsContext = createContext()

//Provider for documentations context
export const DocumentationsProvider = ({children})=>{
    const [documentations, setDocumentations] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
                setIsLoading(false)
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
        <DocumentationsContext.Provider value={{documentations, isLoading}}>
            {children}
        </DocumentationsContext.Provider>
    )
}

