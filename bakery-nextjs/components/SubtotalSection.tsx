import { useAppSelector } from '../app/hooks'
import { CartItem } from '../models/cartItem'
import { selectCartItems } from '../slices/cartSlice'

const SubtotalSection = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div className="mt-3 flex items-center justify-between rounded border-2 border-gray-200 p-3">
      <h3>Subtotal</h3>
      <h1 className="text-lg font-bold text-yellow-800">
        {cartItems
          .reduce((prevValue, item: CartItem) => prevValue + item.totalPrice, 0)
          .toFixed(2)}{' '}
        THB
      </h1>
    </div>
  )
}

export default SubtotalSection
