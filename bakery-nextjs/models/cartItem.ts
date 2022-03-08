export interface CartItem {
  productId: string
  productName: string
  productImage: string
  quantity: number
  price: number
  totalPrice: number
}

export interface CartItemAdjustQuantity {
  productId: string
  quantity?: number
}
