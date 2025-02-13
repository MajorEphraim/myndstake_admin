import logo from '../assets/logo.png'
function AuthPage(){
    return(
      <div>
        <img src={logo} alt='logo'/>
        <div>
          <div>
            <h5>Manage user verification, payments</h5>
            <h5>and app content</h5>
          </div>
          <div>
            <input/>
            <input/>
          </div>
        </div>
      </div>
    )
}

export default AuthPage