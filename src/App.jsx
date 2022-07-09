import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Footer from './components/Footer'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Privateroute from './context/Privateroute'
import { Cartcontext } from './context/Cartcontext'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
       <Navbar/>
       
       <Routes>
        <Route path='/' element = {<Home/>} ></Route>
        <Route path='/mens' element = {<Mens/>} ></Route>
        <Route path='/womens' element = {
        <Privateroute>
        <Womens/>
        </Privateroute>
        } ></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
       </Routes>
<Privateroute/>
       <Footer/>
    </div>
  )
}

export default App
