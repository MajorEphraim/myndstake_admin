import { createContext, useState } from "react";

// context for app content
export const ContentContext = createContext()

//provider for content context
export const ContentProvider = ({children})=>{
    const [content, setContent] = useState([
        {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'2', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'FIFA world cup', options:[3, 2, 4, 1], correct:1},
        {id:'3', question:"What is the name of an avenger superhero who hold a hammer and is a viking ?", genre:'Hollywood Movies', options:["Hulk", "Iron man", "Thoir", "Vision"], correct:'Thoir'},
        {id:'4', question:"Simphiwe Tshabala was a sole goal scorer when SA was against Mexico?", genre:'FIFA world cup', options:["Yes", "No"], correct:"Yes"},
        {id:'5', question:"Total Avengers movies released by 2024?", genre:'Hollywood Movies', options:[8, 3, 6, 5], correct:5},
        {id:'6', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
        {id:'7', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'8', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
        {id:'9', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'10', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
        {id:'11', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'12', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
        {id:'13', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'14', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
        {id:'15', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
        {id:'16', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    ])

    return(
        <ContentContext.Provider value={{content}}>
            {children}
        </ContentContext.Provider>
    )
}

