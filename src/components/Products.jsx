import React from 'react'

const Products = ({data}) => {
    console.log(data);
  return (
    <div style={{
      display : 'grid',
      gridTemplateColumns :  "repeat(4,1fr)"
    }} >
  {data.map((data)=>(
   
    <div style={{

    //  grid-template-columns: repeat(4,1fr);
    //  gridTemplateColumns : "1fr 1fr",
    // gridTemplateColumns: repeat ("1fr 100px")
    }} >
    
    <div><img src={data.img} alt="" width={"200px"} height = {"auto"} /></div>
    <div><h1> {data.name} </h1></div>
    <div><h3> {data.price} </h3></div>
    <div><button>Add to cart</button></div>
    </div>
   
  ))}
 </div>

  )
}

export default Products