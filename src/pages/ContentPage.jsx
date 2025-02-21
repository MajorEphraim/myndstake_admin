import { useState, useContext } from 'react'
import '../styles/ContentPage.css'
import AddContentComp from '../components/AddContentComp'
import TableHeaderComp from '../components/TableHeaderComp';
import TableRowComp from '../components/TableRowComp';
import { ContentContext } from '../context/ContentContext';
import { GenresContext } from '../context/GenresContext';
import UpdateContentModal from '../modals/UpdateContentModal';

function ContentPage(){

  const { content } = useContext(ContentContext)
  const { genres } = useContext(GenresContext)

  const [id, setId] = useState(null)
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')
  const [isVisible, setIsVisible] = useState(true)
  const displayedContent = content
                            .filter(item=>item.question.
                                  toLowerCase()
                                  .includes(search.toLowerCase())
                                  &&  (item.genre === genre || genre === "All"))
                  

    return(
      <>
        {
          isVisible ? <UpdateContentModal setIsVisible={setIsVisible} id={id}/>:null
        }
        <div className="content-container">
          <AddContentComp/>
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
                <TableRowComp item={item} setIsVisible={setIsVisible} setId={setId}/>
              ))
            }
            </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default ContentPage