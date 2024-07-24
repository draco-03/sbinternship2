import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  let appName="React"

  return (
    <>
      <h1>Welcome to {appName} Project</h1>
      <br></br>
      <Navbar/>
      <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/add' element={<Add person={{"name":"Aishwarya","adm":"AR102","dept":"Maths","sem":3}}/>}></Route>
      </Routes>
    </>
  )
}

export default App
