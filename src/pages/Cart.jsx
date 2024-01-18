import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect,useState } from "react";
const Cart = () => {
    const {cart}= useSelector((state)=>state);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
      setTotal(cart.cartItem.reduce((acc,curr)=>acc+(curr.price*curr.Quantity),0))
    },0)
  return (
    <div>
      {
          cart.cartItem.length>0?
          (<div className="flex">
            <div>
            {
              cart.cartItem.map((item)=>{
                return <CartItem item={item} key={item.id}></CartItem>
              })
            }
            </div>
            <div>
              <div>
                <p>YOUR CART</p>
                <p>Summary</p>
                <p>Total items <span>{cart.cartItem.length}</span></p>
                


              </div>
              <div>
                <p>Total Price : <span>{total}</span></p>
              </div>
              
            </div>
          </div>):
          (<div>
            <p>No Items in Cart</p>
            <NavLink to="/">
              <button>
                Shop Now
              </button>
            </NavLink>
          </div>
          )
      }
    </div>
  );
};

export default Cart;
