import '../styles/ContentPage.css'
function ContentPage(){
  const data = [{id:'1', question:"Who is the starring of The Transporter movie?", genre:'Movies'}]
    return(
      <div className="content-container">
        <div className="add-content">
            <h4>Add Content</h4>
            <div>
              <h4></h4>
            </div>
            <textarea></textarea>
        </div>

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
            <div className="heading">
              <h6 className="heading-text">Question</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Genre</h6>
            </div>
            <div className="heading">
              <h6 className="heading-text">Options</h6>
            </div>
            <div className="heading">
            </div>
          </div>
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
    )
}

export default ContentPage