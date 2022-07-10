import React, { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext';

const Cart = () => {
  const {cart,handleclick,handleqty,handledelete} = useContext(Cartcontext)
  const price = (cart)=>{
  // return cart.reduce((acc,c)=>acc + c.data.price,0)
  return cart.reduce((acc, c) => acc + c.price * c.qty,0);
  }

 
  return (
    <div style={{
      textAlign:"left"
    }} >

<table style={{
  width : "100%",
  margin : "auto"

}} >
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th>qty</th>
  </tr>
  {cart.map((data)=>(
  <tr>
    <td><img src= {data.img}></img></td>
    <td>{data.name}</td>
    <td>{data.price}</td>
    <td><button disabled = {data.qty===1} onClick={()=>handleqty(data.id,-1)} >-</button>
    
    {data.qty}
     <button   onClick={()=>handleqty(data.id,+1)}>+</button>
    </td>
    <td><button onClick={()=>handledelete(data.id)} >Delete</button></td>
  </tr>
    ))}

</table>

<div>
  <h1>subtotal : {price(cart)} </h1>
</div>
    </div>
  )
}

export default Cart