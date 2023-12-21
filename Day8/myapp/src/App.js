import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  Users from './Pages/Users'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
const App=() =>{
  return (
    <>
    <Routes>
    <Routes path='/'element={<Users/>}/>
    <Routes path='/Adduser'element={<Adduser/>}/>
    <Routes path='/Edituser'element={<Edituser/>}/>
    </Routes>

    </>
  )
}

export default App