import React, { useState } from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'

const Products = ({data}) => {
const {handleclick} = useContext(Cartcontext)

  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns :  "repeat(4,1fr)"
    }}>
  {data.map((data1)=>(
   
    <div >
    
    <div><img src={data1.img} alt="" width={"200px"} height = {"auto"} /></div>
    <div><h1> {data1.name} </h1></div>
    <div><h3> {data1.price} </h3></div>
    <div><button  onClick={()=>handleclick(data1)}>Add to cart</button></div>
    </div>
   
  ))}
 </div>

  )
}

export default Products