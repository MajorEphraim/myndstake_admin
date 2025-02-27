import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import AuthHeaderComp from '../components/AuthHeaderComp'
import HomeHeaderComp from '../components/HomeHeaderComp'

//Pages
import AuthPage from '../pages/AuthPage'
import ContentPage from '../pages/ContentPage'
import PaymentPage from '../pages/PaymentPage'
import VerificationPage from '../pages/VerificationPage'

import DrawerComp from '../components/DrawerComp'

function RouterComp(){
    const { userId } = useContext(AuthContext)

    //check if authenticated to switch between headers
    function renderHeader () {
        if(userId == null)
            return <AuthHeaderComp/>
        else
            return <HomeHeaderComp/>
    }

     //check if authenticated to switch between headers
     function renderDrawer () {
        return <DrawerComp/>
    }


    return(
        <Router>
            <div>
            {renderHeader()}
            {renderDrawer()}
              <Routes>
                <Route path="/" element={userId == null ? <AuthPage/>:<VerificationPage/>} />
                <Route path="/payments" element={userId == null ? <AuthPage/>:<PaymentPage/>} />
                <Route path="/content" element={userId == null ? <AuthPage/>:<ContentPage/>} />
                <Route path="/verifications" element={userId == null ? <AuthPage/>:<VerificationPage/>} />
              </Routes>

            </div>
        </Router>

    )
}

export default RouterComp