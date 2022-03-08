import { useAppDispatch } from '../app/hooks'
import { CartItem } from '../models/cartItem'
import {
  increaseQuantity,
  decreaseQuantity,
  adjustQuantity,
  removeItemToCart,
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

  return (
    <div className="flex items-start justify-between border-b border-gray-300 pt-4 pb-4 first:pt-0 last:border-none last:pb-0">
      <div className="flex">
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

      {/* Quantity */}
      <div className="items-start justify-center sm:flex">
        <p className="text-sm">
          Quantity:
          <span className="mx-2">
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-10 appearance-none rounded border border-gray-200 p-1 text-center outline-none sm:w-20"
            />
          </span>
        </p>
        <div
          className="flex justify-center
        "
        >
          <p
            className="mr-5  cursor-pointer text-2xl font-medium"
            onClick={handleIncreaseQuantity}
          >
            +
          </p>
          <p
            className=" cursor-pointer text-2xl font-medium"
            onClick={handleDecreaseQuantity}
          >
            -
          </p>
        </div>
      </div>

      {/* Prices */}
      <div></div>
    </div>
  )
}

export default CartItemRow
