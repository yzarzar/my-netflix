import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUpForm from '../pages/SignUpForm.jsx'
import Registration from '../pages/./Registration.jsx'
import {RegForm} from "../pages/RegForm.jsx";
import HomeNav from "../navbars/HomeNav.jsx";
import {HomeNavRouteGate} from "../navbars/HomeNavRouteGate.jsx";
import {NavbarRouteGate} from "../navbars/NavbarRouteGate.jsx";
import Navbar from "../navbars/Navbar.jsx";
import {SignUp} from "../pages/SignUp.jsx";
import {PlanForm} from "../pages/PlanForm.jsx";

const Path = () => {

    return (
        <>
           <HomeNavRouteGate>
               <div className='absolute z-10'>
                   <HomeNav/>
               </div>
           </HomeNavRouteGate>
            <NavbarRouteGate>
                <div>
                    <Navbar/>
                </div>
            </NavbarRouteGate>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/signUp/registration' element={<Registration/>}/>
                <Route path='/signUpForm' element={<SignUpForm/>}/>
                <Route path='/signUp/regForm' element={<RegForm/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUp/planForm' element={<PlanForm/>}/>
            </Routes>
        </>
    )
}

export default Path
