import { useState } from 'react'
import '../styles/ContentPage.css'
import RadionButtonComp from '../components/RadioButtonComp'
import AddContentComp from '../components/AddContentComp'
import TableHeaderComp from '../components/TableHeaderComp';
import TableRowComp from '../components/TableRowComp';

function ContentPage(){

  const genres = [
    "Hollywood Movies", "Soccer", "Rugby", "Amapiano music", 
    "WWE wrestling", "Fruits and Veges", "Politics",
    "Science", "Chemistry", "Anime", "SA sopies" 

  ]
  const content = [
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'FIFA world cup', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"What is the name of an avenger superhero who hold a hammer and is a viking ?", genre:'Hollywood Movies', options:["Hulk", "Iron man", "Thoir", "Vision"], correct:'Thoir'},
    {id:'1', question:"Simphiwe Tshabala was a sole goal scorer when SA was against Mexico?", genre:'FIFA world cup', options:["Yes", "No"], correct:"Yes"},
    {id:'1', question:"Total Avengers movies released by 2024?", genre:'Hollywood Movies', options:[8, 3, 6, 5], correct:5},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
  ]

    const [search, setSearch] = useState('')
    const [genre, setGenre] = useState('All')
    const displayedContent = content
                            .filter(item=>item.question.
                                  toLowerCase()
                                  .includes(search.toLowerCase())
                                  &&  (item.genre === genre || genre === "All"))
                  

    return(
      <div className="content-container">
        <AddContentComp genres={genres}/>
        <div className="all-content">
          <div className='content-upper-container'>
            <div className='total-q-container'>
              <h5 className='total-q-text'>Total questions</h5>
              <div className='content-amount-container'>
                <h5 className='content-amount'>{content.length}</h5>
              </div>
            </div>
            <div className='content-search-filter'>
              <input 
                  className='content-search-bar' 
                  placeholder='Search by question or option....'
                  onChange={e=>setSearch(e.target.value)}
                  value={search}
               />
              <div className='content-filter-container'>
                <h5 className='content-filter-text'>filter by genre</h5>
                <select className='filter-genre-dropdown' onChange={e=>setGenre(e.target.value)}>
                  <option>All</option>
                  {
                    genres.map(genre=><option>{genre}</option>)
                  }
                </select>
              </div>
            </div>
          </div>

          <div className='all-content-table'>
          <TableHeaderComp/>
          <div className='scrolling-content'>
          {
            displayedContent.map(item=>(
              <TableRowComp item={item}/>
            ))
          }
           </div>
          </div>
        </div>
      </div>
    )
}

export default ContentPage