import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SizeData = {
  size: string;
  enabled: boolean;
};

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  description: string;
  size: {
    data: SizeData[];
  };
  images: string[];
  thumbnail: string;
  original_price: number;
  slug: string;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  selectedSize: string;
  oneQuantityPrice: number;
  quantity: number;
};

export type CartState = {
  cart: CartItemType[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity++;
        item.price = item.oneQuantityPrice * item.quantity;
        console.log("item already exists");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      state.cart = state.cart.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => {
        return p.id !== action.payload.id;
      });
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
