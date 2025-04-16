
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from './Pages/Home'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/Auth/NotFound'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/auth/signup' element = {<Signup/>}/>
        <Route path='/auth/login' element = {<Login/>}/>


        <Route path='*' element = {<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
