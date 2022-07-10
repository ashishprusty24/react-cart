import { useState } from "react";
import { createContext } from "react";

export const Cartcontext = createContext()

export const Cartcontextprovider = ({children})=>{
    const [auth,setauth] = useState(true)
    const [cart,setcart] = useState([])
   
     const handleclick = (data)=>{
       setcart([
         ...cart,
         
           data
         
       ])
   
     }
console.log(cart);
     const handleqty = (id,value)=>{
       const updatedata = cart.map((data)=>
       data.id ===id ? 
        {
            ...data,
            qty : data.qty+value
        }:

       data
          
       )
       setcart(updatedata)
     }

     const handledelete = (id)=>{
     
        const updatedata = cart.filter((item) => item.id !== id);
        
        setcart(updatedata)
     }

    //  const handledelete = (id) => {
    //     const updatedData = todos.filter((item) => item.id !== id);
    //     settodos(updatedData);
    //   };
    const toogleauth = ()=>{
        if(!auth){
            setauth(true)
        }else{
            setauth(false)
        }
    }
 return <Cartcontext.Provider value={{auth,toogleauth,handleclick,cart,handleqty,handledelete}} > {children} </Cartcontext.Provider>
}