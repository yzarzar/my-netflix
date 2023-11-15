import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp.jsx'
import Registration from '../pages/./Registration.jsx'
import {RegForm} from "../pages/RegForm.jsx";

const Path = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/regForm' element={<RegForm/>}/>
            </Routes>
        </>
    )
}

export default Path
