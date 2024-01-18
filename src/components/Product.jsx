import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/cartSlice';
import {toast} from 'react-hot-toast';
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const Product = ({item}) => {
  const {cart} =useSelector((state)=>state);
  // var itemIndex;
  // const itemIndex=cart.cartItem.findIndex((curr_item)=>curr_item.id===item.id);
  //   console.log("testquantity",cart.cartItem[0])
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  function removeHandler(){
    dispatch(remove(item));
    toast.error("Item remove from Cart");
  }
    function addHandler(){
      dispatch(add(item));

    toast.success("Item Added to Cart");
  }
  
   function addMore(){
    dispatch(add(item));
    // const {cart}=useSelector((state)=>state);
    const itemIndex=cart.cartItem.findIndex((curr_item)=>curr_item.id===item.id);
    console.log("quantity",cart.cartItem[itemIndex].Quantity)
    // cart.cartItem.map((curr_item)=>{
    //   if(curr_item.id===item.id){
    //     console.log("this Quantity",curr_item.Quantity)
    //   }
    // })
    setQuantity((quantity)=>1+cart.cartItem[itemIndex].Quantity);


  }


  
  return(
    <div>
      <p>{`${item.title.substring(0,15)}...`}</p>
      <p>{`${item.description.substring(0,80)}...`}</p>
      <img className="w-[50px]" src={item.image}></img>

      <div>
        <p>
          {item.price}
        </p>
        {/* <button onClick={()=>removeHandler()}>
            RemoveItem
          </button>

          <button onClick={()=>addHandler()}>
            AddItem
          </button> */}
      
         {
          cart.cartItem.some((curr_item)=>(item.id===curr_item.id))?
          (<div className="flex flex-row gap-4 items-center">
          <button onClick={()=>removeHandler()}>
            removeItem
          </button>
          <div className="flex flex-row items-center ">
          <button> - </button>
          <div>{quantity}</div>
          <button onClick={()=>addMore()} > + </button>
          </div>
          </div>
          ):
          (
          <button onClick={()=>addHandler()}>
            addItem
          </button>
          
          )
         }
        
      </div>

    </div>
    
  );
};

export default Product;
