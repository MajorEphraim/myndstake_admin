import React from "react";
import '../styles/AuthHeaderComp.css'

function AuthHeaderComp(){
    return(
        <div className="header">
           <div className="auth-left-container">
                <h1 className="app-name">MyndStake</h1>
                <h1 className="com-name">By StepTech</h1>
           </div>
           <h1 className="admin-text">Admins only</h1>
        </div>
    )
}

export default AuthHeaderComp