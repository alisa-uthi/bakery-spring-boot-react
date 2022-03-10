import Link from 'next/link'
import { useAppSelector } from '../app/hooks'
import { CartItem } from '../models/cartItem'
import { selectCartItems } from '../slices/cartSlice'
import OrderItem from './OrderItem'

const OrderSummary = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div className="mt-8 w-full border border-gray-200 px-3 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-yellow-800">Order Summary</h1>
        <Link href="/cart">
          <p className="cursor-pointer text-sm underline hover:text-yellow-800">
            Edit Cart
          </p>
        </Link>
      </div>

      <div className="border-b border-gray-300 pb-3">
        {cartItems.map((item: CartItem) => (
          <OrderItem key={item.productId} item={item} />
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm">Item Subtotal</p>
          <p>
            {cartItems
              .reduce(
                (prevValue: number, item: CartItem) =>
                  prevValue + item.totalPrice,
                0
              )
              .toFixed(2)}{' '}
            THB
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-semibold">Total</p>
          <p className="font-semibold">
            {cartItems
              .reduce(
                (prevValue: number, item: CartItem) =>
                  prevValue + item.totalPrice,
                0
              )
              .toFixed(2)}{' '}
            THB
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
