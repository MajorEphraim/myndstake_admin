import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for app content
export const ContentContext = createContext()

//provider for content context
export const ContentProvider = ({children})=>{
    const [content, setContent] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{

        const q = query(collection(db, "content"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push({...doc.data(), id:doc.id});
            });

            setContent(array)
            setIsLoading(false)
        });

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <ContentContext.Provider value={{content, isLoading}}>
            {children}
        </ContentContext.Provider>
    )
}

