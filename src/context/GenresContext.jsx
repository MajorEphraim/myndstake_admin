import { createContext, useState } from "react";

// context for genres
export const GenresContext = createContext()

//provider for genres context
export const GenresProvider = ({children})=>{
    const [genres, setGenres] = useState([
            "Hollywood Movies", "Soccer", "Rugby", "Amapiano music", 
            "WWE wrestling", "Fruits and Veges", "Politics",
            "Science", "Chemistry", "Anime", "SA sopies" 
    ])

    return(
        <GenresContext.Provider value={{genres, setGenres}}>
            {children}
        </GenresContext.Provider>
    )
}

