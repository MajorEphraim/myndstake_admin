import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthHeaderComp from '../components/AuthHeaderComp'
import HomeHeaderComp from '../components/HomeHeaderComp'

//Pages
import AuthPage from '../pages/AuthPage'
import ContentPage from '../pages/ContentPage'
import PaymentPage from '../pages/PaymentPage'
import VerificationPage from '../pages/VerificationPage'

function RouterComp(){
    const a = false
    //check if authenticated to switch between headers
    function renderHeader () {
        if(a == true)
            return <AuthHeaderComp/>
        else
            return <HomeHeaderComp/>
    }

    return(
        <Router>
            <div>
            {renderHeader()}
              <Routes>
                <Route path="/" element={ a ==true ? <AuthPage/>:<VerificationPage/>} />
                <Route path="/payments" element={<PaymentPage/>} />
                <Route path="/content" element={<ContentPage/>} />
                <Route path="/verifications" element={<VerificationPage/>} />
              </Routes>

            </div>
        </Router>

    )
}

export default RouterComp