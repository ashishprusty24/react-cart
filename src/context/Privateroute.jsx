import { useContext } from "react"
import { Cartcontext } from "./Cartcontext"
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";
const Privateroute = ({children})=>{
    const {auth} = useContext(Cartcontext)
    console.log(1,auth);
     if(!auth){
        return  <Navigate to= "/login" ></Navigate>
     }
    return (
  children
    )
}

export default Privateroute