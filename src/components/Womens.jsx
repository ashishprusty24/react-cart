import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Products from "./Products";

const Womens = () => {
  const [data,setdata] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      fetch("http://localhost:8080/womenproduct")
        .then((r) => r.json())
        .then((d) => setdata(d));
    };
    fetchdata()
  }, []);
  return <div>
    <Products data = {data} />
  </div>;
};

export default Womens;
