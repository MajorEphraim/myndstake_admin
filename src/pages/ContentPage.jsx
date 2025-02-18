import '../styles/ContentPage.css'
import RadionButtonComp from '../components/RadioButtonComp'
import AddContentComp from '../components/AddContentComp'

function ContentPage(){
  const data = [
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
    {id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies', options:["Jason Statham", "Tom Cruise", "Steven Segal", "Jet Li"], correct:'Jason Statham'},
  ]

    return(
      <div className="content-container">
        <AddContentComp/>
        <div className="all-content">
          <div className='content-upper-container'>
            <div className='total-q-container'>
              <h5 className='total-q-text'>Total questions</h5>
              <div className='content-amount-container'>
                <h5 className='content-amount'>500</h5>
              </div>
            </div>
            <div className='content-search-filter'>
              <input className='content-search-bar' placeholder='Search by question or option....'/>
              <div className='content-filter-container'>
                <h5 className='content-filter-text'>filter by genre</h5>
                <select className='filter-genre-dropdown'>
                  <option>all</option>
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
            data.map(item=>(
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