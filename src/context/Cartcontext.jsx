import { useState } from "react";
import { createContext } from "react";

export const Cartcontext = createContext()

export const Cartcontextprovider = ({children})=>{
    const [auth,setauth] = useState(false)
    const toogleauth = ()=>{
        if(!auth){
            setauth(true)
        }else{
            setauth(false)
        }
    }
 return <Cartcontext.Provider value={{auth,toogleauth}} > {children} </Cartcontext.Provider>
}