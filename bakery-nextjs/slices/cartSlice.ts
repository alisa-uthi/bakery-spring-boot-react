import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartItemAdjustQuantity } from '../models/cartItem'
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
    increaseQuantity: (
      state,
      action: PayloadAction<CartItemAdjustQuantity>
    ) => {
      state.items = state.items.map((item: CartItem) => {
        if (item.productId == action.payload.productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<CartItemAdjustQuantity>
    ) => {
      state.items = state.items.map((item: CartItem) => {
        if (item.productId == action.payload.productId) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          } else {
            return {
              ...item,
              quantity: 1,
            }
          }
        }
        return item
      })
    },
    adjustQuantity: (state, action: PayloadAction<CartItemAdjustQuantity>) => {
      state.items = state.items.map((item: CartItem) => {
        if (item.productId == action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity!,
          }
        }
        return item
      })
    },
  },
})

// Actions
export const {
  addItemToCart,
  removeItemToCart,
  increaseQuantity,
  decreaseQuantity,
  adjustQuantity,
} = cartSlice.actions

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
