import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartItemAdjustQuantity } from '../models/cartItem'
import { RootState } from '../app/store'

export interface CartState {
  items: CartItem[]
  pickupDate?: string | null
}

const initialState: CartState = {
  items: [],
  pickupDate: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      let adjustedItem = state.items.find(
        (item: CartItem) => item.productId == action.payload.productId
      )

      // If there is existing item in the cart, add more quantity and total price
      if (adjustedItem) {
        adjustedItem = {
          ...adjustedItem,
          quantity: adjustedItem.quantity + action.payload.quantity,
          totalPrice: adjustedItem.totalPrice + action.payload.totalPrice,
        }

        state.items = state.items.map((item: CartItem) => {
          if (item.productId == adjustedItem?.productId) {
            return adjustedItem
          }
          return item
        })
      } else {
        state.items = [...state.items, action.payload]
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
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
            totalPrice: (item.quantity + 1) * item.price,
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
              totalPrice: (item.quantity - 1) * item.price,
            }
          } else {
            return {
              ...item,
              quantity: 1,
              totalPrice: item.price,
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
            totalPrice: action.payload.quantity! * item.price,
          }
        }
        return item
      })
    },
    changePickupDate: (state, action: PayloadAction<Date>) => {
      state.pickupDate = action.payload.toString()
    },
  },
})

// Actions
export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  adjustQuantity,
  changePickupDate,
} = cartSlice.actions

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items
export const selectPickupDate = (state: RootState) => state.cart.pickupDate

export default cartSlice.reducer
