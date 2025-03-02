import {useEffect, createContext, useState } from "react";
import { db, onSnapshot, collection, where, query} from '../configs/configs'

// context for app content
export const ContentContext = createContext()

//provider for content context
export const ContentProvider = ({children})=>{
    const [content, setContent] = useState([
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},
        {question:"who is the best at Karate among those?", genre:"Hollywood Movies", options:["Jet Li", "Jason Statham", "John Cena", "Tom Cruise"], correct:"Jet Li"},

    ])

    useEffect(()=>{

        const q = query(collection(db, "content"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const array = [];
            querySnapshot.forEach(async(doc) => {
                array.push({...doc.data(), id:doc.id});
            });

            //setContent(array)
        });

        return ()=>{
            unsubscribe()
        }

    },[])

    return(
        <ContentContext.Provider value={{content}}>
            {children}
        </ContentContext.Provider>
    )
}

