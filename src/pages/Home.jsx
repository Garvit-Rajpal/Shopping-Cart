import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import {products} from '../data'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] =useState(false);
  const [items,setItems]=useState([]);

  async function fetchProducts(){
    setLoading(true);

    try{
      const data=await fetch(API_URL);
      const output=await data.json();
      // console.log(output);
      setItems(output);
      // console.log("here",items[0]);
    }
    catch{
      console.log("error aagya in data fetching");
    }

    setLoading(false);

  }
  useEffect(()=>{
    fetchProducts()
},[]);

  return (
    <div>
       {
        loading?(<Spinner/>):
        (
        items.map((item)=>{
         return <Product key={item.id} item={item}></Product>
        })
        )
       }
    </div>

  );
};

export default Home;
