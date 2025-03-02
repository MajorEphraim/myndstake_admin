import logo from '../assets/logo.png'
import '../styles/AuthPage.css'
import { useState, useContext } from 'react'
import { signIn } from '../services/authServices'
import { AuthContext } from '../context/AuthContext'
import { AccountContext } from '../context/AccountContext'
import LoaderModal from '../modals/LoaderModal'

function AuthPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const { setUserId } = useContext(AuthContext)
  const { updateDetails } = useContext(AccountContext)

  const handleSignIn = async()=>{

    if(email === "" || password === ""){
      alert("All fields are required!")
      return
    }

    try {
        setIsVisible(true)
        const {userId,data} = await signIn(email, password)
        setIsVisible(false)
        setUserId(userId)
        updateDetails(data)
    } catch (error) {
        setIsVisible(false)
        alert(error.message)
    }
  }

    return(
      <>
      {
        isVisible ? <LoaderModal/> : null
      }
      <div className='container'>
        <div className='logo-words'>
          <img src={logo} alt='logo' className='logo'/>
          <div className='m-words-container'>
            <h5 className='words'>Manage user verification, payments</h5>
            <h5 className='words'>and app content</h5>
          </div>
        </div>
        <div className='right-container'>
          <div className='words-container'>
            <h5 className='words'>Manage user verification, payments</h5>
            <h5 className='words'>and app content</h5>
          </div>
          <div className='form'>
            <input placeholder='email' className='cred-input' onChange={e=>setEmail(e.target.value)}/>
            <input placeholder='password' className='cred-input' onChange={e=>setPassword(e.target.value)}/>
            <div className='login-btn' onClick={handleSignIn}>
              <h5 className='btn-text'>Sign in</h5>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default AuthPage
