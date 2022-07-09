import React, { useEffect } from "react";
import { useState } from "react";
import Products from "./Products";

const Mens = () => {
    const [data,setdata] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:8080/menproduct")
        .then((r) => r.json())
        .then((d) =>setdata(d));
    };
    fetchdata()
  }, []);
    
  return (
    <div>
        <Products data = {data} />
    </div>
  )
   
};

export default Mens;
