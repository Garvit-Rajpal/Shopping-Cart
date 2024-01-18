import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-hot-toast';
import {remove} from '../redux/Slices/cartSlice';
import { useEffect } from "react";
const CartItem = ({item}) => {
  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch();
  function removeHandler(){
    dispatch(remove(item));
    toast.error("Item remove from Cart");
  }
  // useEffect(() => {
  //   const itemIndex=cart.cartItem.findIndex((curr_item)=>curr_item.id===item.id);
  //   console.log("cartquantity",cart.cartItem[itemIndex].Quantity)
  
    
  // });
  
  return (
  <div>
    
     <img  src={item.image} width={50}></img>
     <p>{item.title}</p>
     <p>{`${item.description.substring(0,80)}...`}</p>
     <div>
      <p>{item.price}</p>
      <p>{item.Quantity}</p>

      <FcDeleteDatabase onClick={()=>removeHandler()}/>
     </div>

  </div>);
};

export default CartItem;
