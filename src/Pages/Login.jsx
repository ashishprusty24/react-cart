import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'

const Login = () => {
    const {auth,toogleauth} = useContext(Cartcontext)
  return (
    <div>
   <button onClick={toogleauth} >{auth?"logout" :"login" }</button>
    </div>
  )
}

export default Login