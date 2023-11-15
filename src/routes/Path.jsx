import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CreateAcc from '../pages/CreateAcc'

const Path = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signin1' element={<SignIn/>}/>
        <Route path='/CreateAcc' element={<CreateAcc/>}/>
        <Route path='/signinFromCreateAcc' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default Path
