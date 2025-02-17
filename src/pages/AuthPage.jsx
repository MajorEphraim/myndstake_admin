import logo from '../assets/logo.png'
import '../styles/AuthPage.css'

function AuthPage(){
    return(
      <div className='container'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='right-container'>
          <div className='words-container'>
            <h5 className='words'>Manage user verification, payments</h5>
            <h5 className='words'>and app content</h5>
          </div>
          <div className='form'>
            <input placeholder='email' className='cred-input'/>
            <input placeholder='password' className='cred-input'/>
            <div className='login-btn'>
              <h5 className='btn-text'>Sign in</h5>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AuthPage