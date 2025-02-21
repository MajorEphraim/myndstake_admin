import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import '../styles/HomeHeaderComp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function HomeHeaderComp(){
    const { username } = useContext(AccountContext)
    return(
        <div className="header">
          <div className="left-container">
            <div className="verification-link">
                <a href="/verifications">
                    <h5 className="link-text">User Verification</h5>
                </a>
            </div>
            <div className="link-container">
                <a href="/payments">
                    <h5 className="link-text">Payments</h5>
                </a>
            </div>
            <div className="link-container">
                <a href="/content">
                    <h5 className="link-text">App Content</h5>
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