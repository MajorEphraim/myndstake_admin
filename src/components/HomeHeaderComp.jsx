import React from "react";
import '../styles/HomeHeaderComp.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function HomeHeaderComp(){
    return(
        <div className="header">
          <div className="left-container">
            <div className="verification-link">
                <a href="/verifications">
                    <h1 className="link-text">User Verification</h1>
                </a>
            </div>
            <div className="link-container">
                <a href="/payments">
                    <h1 className="link-text">Payments</h1>
                </a>
            </div>
            <div className="link-container">
                <a href="/content">
                    <h1 className="link-text">App Content</h1>
                </a>
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