import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Cartcontext'
import styles from './navbar.module.css'

const Navbar = () => {
  const {cart} =useContext(Cartcontext)
  return (
    <div className= {styles.navbar_conatiner}>
       <div  className={styles.navbar_link} >
        <Link to= "/" >Home</Link>
        <Link to= "/mens" >Mens</Link>
        <Link to= "/womens" >Womens</Link>
        <Link to = "/login">Login</Link>
        <Link to= "/cart">Cart <span>{cart.length}</span></Link>
        
        </div>
    </div>
  )
}

export default Navbar