import { useState } from 'react'
import '../styles/ContentPage.css'
import RadionButtonComp from '../components/RadioButtonComp'
import AddContentComp from '../components/AddContentComp'

function ContentPage(){

  const genres = [
    "Hollywood Movies", "Soccer", "Rugby", "Amapiano music", 
    "WWE wrestling", "Fruits and Veges", "Politics",
    "Science", "Chemistry", "Anime", "SA sopies" 

  ]
  const content = [
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Hollywood Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
    {id:'1', question:"What is the name of an avenger superhero who hold a hammer and is a viking ?", genre:'Hollywood Movies', options:["Hulk", "Iron man", "Thoir", "Vision"], correct:'Thoir'},
    {id:'1', question:"How many goals did SA score during 2010 FIFA World Cup??", genre:'Soccer', options:[3, 2, 4, 1], correct:1},
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
    const [genre, setGenre] = useState('')
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
          <div className="headings-row">
            <div className="question-heading">
              <h6 className="heading-text">Question</h6>
            </div>
            <div className="genre-heading">
              <h6 className="heading-text">Genre</h6>
            </div>
            <div className="options-heading">
              <h6 className="heading-text">Options</h6>
            </div>
            <div className="actions-empty-heading">
            </div>
          </div>
          <div className='scrolling-content'>
          {
            displayedContent.map(item=>(
              <div className="content-headings-row">
                <div className="question-container">
                  <h6 className="content-question">{item.question}</h6>
                </div>
                <div className="genre-container">
                  <div className='genre-text-container'>
                    <h6 className="content-genre">{item.genre}</h6>
                  </div>
                </div>
                <div className="content-options">

                  <div className='paired-options'>
                  {
                    item.options.filter((i,index)=>index < 2).map(option=>(
                        <div className='option-container'>
                          <RadionButtonComp isSelected={option ==item.correct} isBig={false}/>
                          <h5 className='option-text'>{option}</h5>
                        </div>
                    )) 
                  }
                </div>

                <div className='paired-options'>
                  {
                    item.options.filter((i,index)=>index > 1).map(option=>(
                        <div className='option-container'>
                          <RadionButtonComp isSelected={option ==item.correct} isBig={false}/>
                          <h5 className='option-text'>{option}</h5>
                        </div>
                    )) 
                  }
                </div>  
                </div>
                <div className="content-actions">
                  <div className='content-update-btn'>

                  </div>

                  <div className='content-delete-btn'>

                  </div>
                </div>
              </div>

            ))
          }
           </div>
          </div>
        </div>
      </div>
    )
}

export default ContentPage