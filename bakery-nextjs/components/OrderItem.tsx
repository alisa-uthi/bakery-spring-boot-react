import { CartItem } from '../models/cartItem'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/solid'
import { useAppDispatch } from '../app/hooks'
import { removeItemFromCart } from '../slices/cartSlice'

interface OrderItemProps {
  item: CartItem
}

const OrderItem = ({ item }: OrderItemProps) => {
  const dispatch = useAppDispatch()

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.productName))
  }

  return (
    <div className="flex w-full items-center justify-between border-b border-gray-200 pt-3 last:border-none">
      <div className="relative h-12 w-12">
        <Image
          src={'data:image/png;base64,' + item.productImage}
          layout="fill"
        />
      </div>

      <div className="w-2/4">
        <h4 className="text-sm">
          {item.productName} x {item.quantity}
        </h4>
      </div>

      <div className="w-1/4">
        <h4 className="text-sm">{item.totalPrice.toFixed(2)} THB</h4>
      </div>

      <div className="h-4 w-4">
        <TrashIcon
          className="cursor-pointer text-red-500"
          onClick={handleRemoveItem}
        />
      </div>
    </div>
  )
}

export default OrderItem
