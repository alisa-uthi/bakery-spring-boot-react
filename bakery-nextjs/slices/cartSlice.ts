import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../models/cartItem'
import { RootState } from '../app/store'

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload]
    },
    removeItemToCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item: CartItem) => item.productName != action.payload
      )
    },
  },
})

// Actions
export const { addItemToCart, removeItemToCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
