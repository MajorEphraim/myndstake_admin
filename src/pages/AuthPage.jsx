import logo from '../assets/logo.png'
import '../styles/AuthPage.css'
import { useState, useContext } from 'react'
import { signIn } from '../services/authServices'
import { AuthContext } from '../context/AuthContext'
import { AccountContext } from '../context/AccountContext'

function AuthPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUserId } = useContext(AuthContext)
  const { setDetails } = useContext(AccountContext)

  const handleSignIn = async()=>{

    if(email === "" || password === ""){
      alert("All fields are required!")
      return
    }

    try {
        const {userId,data} = await signIn(email, password)
        setUserId(userId)
        setDetails(data)
    } catch (error) {
        alert(error.message)
    }
  }

    return(
      <div className='container'>
        <img src={logo} alt='logo' className='logo'/>
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
    )
}

export default AuthPage