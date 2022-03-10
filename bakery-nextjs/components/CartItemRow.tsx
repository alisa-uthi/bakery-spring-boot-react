import { useAppDispatch } from '../app/hooks'
import { CartItem } from '../models/cartItem'
import { TrashIcon } from '@heroicons/react/solid'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline'
import {
  increaseQuantity,
  decreaseQuantity,
  adjustQuantity,
  removeItemFromCart,
} from '../slices/cartSlice'

interface CartItemRowProps {
  item: CartItem
}

const CartItemRow = ({ item }: CartItemRowProps) => {
  const dispatch = useAppDispatch()

  const handleIncreaseQuantity = () => {
    dispatch(
      increaseQuantity({
        productId: item.productId,
      })
    )
  }

  const handleDecreaseQuantity = () => {
    dispatch(
      decreaseQuantity({
        productId: item.productId,
      })
    )
  }

  const handleQuantityChange = (e: any) => {
    dispatch(
      adjustQuantity({
        productId: item.productId,
        quantity: e.target.value,
      })
    )
  }

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.productName))
  }

  return (
    <div className="border-b border-gray-300 pt-4 pb-4 first:pt-0 last:border-none last:pb-0  md:flex md:items-center">
      <div className="flex items-start justify-between md:w-1/3 ">
        <div className="flex md:items-center">
          {/* Image */}
          <img
            src={'data:image/png;base64,' + item.productImage}
            alt={item.productName}
            className="mr-3 h-20 w-20 object-cover"
          />

          {/* Detail */}
          <div>
            <h3 className="font-medium">{item.productName}</h3>
            <p className="text-sm">Price: {item.price.toFixed(2)} THB</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between md:mt-0 md:w-2/3">
        {/* Quantity */}
        <div className="items-start justify-center sm:flex">
          <p className="text-sm">
            Quantity:
            <span className="mx-2">
              <input
                type="number"
                name="quantity"
                min={1}
                value={item.quantity}
                onChange={handleQuantityChange}
                className="w-10 appearance-none rounded border border-gray-200 p-1 text-center outline-none sm:w-20"
              />
            </span>
          </p>
          <div className="flex items-center justify-center">
            <div className="mr-2 h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-gray-100">
              <PlusCircleIcon onClick={handleIncreaseQuantity} />
            </div>
            <div className="h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-gray-100">
              <MinusCircleIcon onClick={handleDecreaseQuantity} />
            </div>
          </div>
        </div>

        {/* Prices */}
        <div className="mr-5">
          <p className="text-sm">Total Price: </p>
          <h1 className="text-lg font-semibold">
            {item.totalPrice.toFixed(2)} THB
          </h1>
        </div>

        {/* Remove button */}
        <div className="h-8 w-8 cursor-pointer rounded-full p-1 hover:bg-red-100">
          <TrashIcon className="text-red-500" onClick={handleRemoveItem} />
        </div>
      </div>
    </div>
  )
}

export default CartItemRow
