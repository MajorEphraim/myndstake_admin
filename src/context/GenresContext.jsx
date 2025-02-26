import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for genres
export const GenresContext = createContext()

//provider for genres context
export const GenresProvider = ({children})=>{
    const [genres, setGenres] = useState([])

    useEffect(()=>{

        const q = query(collection(db, "genres"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push(doc.data().name);
            });

            setGenres(array)
        });

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <GenresContext.Provider value={{genres, setGenres}}>
            {children}
        </GenresContext.Provider>
    )
}

