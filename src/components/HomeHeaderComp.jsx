import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import '../styles/HomeHeaderComp.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function HomeHeaderComp(){
    const { username } = useContext(AccountContext)
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
            <h1 className="admin-name">{username}</h1>
                <div className="logout-icon">
                    <FontAwesomeIcon icon={faRightFromBracket} color="#FE3E12"/>
                </div>
          </div>

        </div>
    )
}

export default HomeHeaderComp