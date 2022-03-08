import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectCartItems } from '../slices/cartSlice'
import { CartItem } from '../models/cartItem'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CartItemRow from '../components/CartItemRow'

const CartPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div>
      <Head>
        <title>My Cart | Alisa Bakery</title>
      </Head>

      <div className="mx-auto w-full max-w-6xl p-10">
        <h1 className="text-2xl font-bold text-yellow-800">My Cart</h1>

        <div className="mt-10">
          <h2 className="mb-3 text-lg font-medium tracking-wider text-yellow-800">
            SELECT THE DATE TO PICKUP YOUR ORDER
          </h2>
          <DatePicker
            className="w-60 rounded border border-gray-300 px-2 py-1 focus:outline-none"
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div className="mt-5 rounded border-2 border-gray-200 p-3">
          {cartItems.map((item: CartItem, index: number) => (
            <CartItemRow key={index} item={item} />
          ))}
        </div>

        <div></div>

        <div></div>
      </div>
    </div>
  )
}

export default CartPage
