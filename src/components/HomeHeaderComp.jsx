import React from "react";
import '../styles/HomeHeaderComp.css'

function HomeHeaderComp(){
    return(
        <div className="header">
          <div className="left-container">
            <div className="verification-link">
                <h1 className="link-text">User Verification</h1>
            </div>
            <div className="link-container">
                <h1 className="link-text">Payments</h1>
            </div>
            <div className="link-container">
                <h1 className="link-text">App Content</h1>
            </div>
          </div>

          <div className="account-container">
            <h1 className="admin-name">Chris</h1>
                <div className="logout-icon">

                </div>
          </div>

        </div>
    )
}

export default HomeHeaderComp