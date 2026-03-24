import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add_Employee from './pages/Add_Employee'
import View_Employee from './pages/View_Employee'
import Header from './components/Header'
import Signup from './pages/Signup'
import AddTask from './pages/AddTask'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

const App = () => {

  const { isLogin } = useSelector(state => state.users);

  if(!isLogin) return <Login/>
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-employee' element={<Add_Employee/>} />
        <Route path='/view-employee' element={<View_Employee/>} />
        <Route path='/add-task' element={<AddTask/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
