import { useAppSelector } from '../app/hooks'
import { CartItem } from '../models/cartItem'
import { selectCartItems } from '../slices/cartSlice'
import CartItemRow from './CartItemRow'

const CartItemList = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div className="mt-5 rounded border-2 border-gray-200 p-3">
      {cartItems.length ? (
        cartItems.map((item: CartItem, index: number) => (
          <CartItemRow key={index} item={item} />
        ))
      ) : (
        <h1 className="text-center">Cart is empty.</h1>
      )}
    </div>
  )
}

export default CartItemList
