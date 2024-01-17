import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SizeData = {
  size: string;
  enabled: boolean;
};

type CartItem = {
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
  cart: CartItem[];
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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
