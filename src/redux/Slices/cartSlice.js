import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
  itemQuantity: 0,
};

export const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(existingIndex);
      if (existingIndex >= 0) {
        console.log("beforeQuantity",state.cartItem[existingIndex].Quantity)
        state.cartItem[existingIndex] = {
            ...state.cartItem[existingIndex],
            Quantity: state.cartItem[existingIndex].Quantity + 1,}
        console.log("current Quantity",state.cartItem[existingIndex].Quantity)

        return state;
      } else {
        const tempProduct = { ...action.payload, Quantity: 1 };
        // console.log(tempProduct);
        state.cartItem.push(tempProduct);
        // const itemIndex_final=state.cartItem.findIndex((item)=>item.id===action.payload.id)
        // console.log(itemIndex_final)
        // console.log(state.cartItem[0]);
      }

      //   console.log(action.payload)
    },
    remove: (state, action) => {
    //   return state.cartItem.filter((item) => item.id !== action.payload.id);
    state.cartItem.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItem.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItem = nextCartItems;

        //   toast.error("Product removed from cart", {
        //     position: "bottom-left",
        //   });
        }
        return state;
    })
  
},
},});

export const { add, remove } = Cart.actions;
export default Cart.reducer;
