import { ShoppingCartIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useAppSelector } from '../app/hooks'
import { selectCartItems } from '../slices/cartSlice'

const Header = () => {
  const cartItems = useAppSelector(selectCartItems)

  return (
    <div className="bg-white pt-2 md:flex">
      <Link href="/">
        <h1 className="flex w-full cursor-pointer justify-center border-b border-gray-300 py-3 text-4xl font-bold text-yellow-800 md:ml-20 md:flex-grow md:border-none">
          Alisa Bakery
        </h1>
      </Link>

      <div className="justify-end md:mr-10 md:flex">
        <h3 className="flex w-full justify-center whitespace-nowrap border-b border-gray-300 py-3 text-2xl font-semibold hover:text-yellow-800 md:mr-10 md:border-none">
          (234) 999-9999
        </h3>
        <div className="relative flex w-full cursor-pointer justify-center border-b border-gray-300 py-3 px-1 shadow-md md:w-fit md:items-center md:whitespace-nowrap md:border-none md:shadow-none">
          <ShoppingCartIcon className="h-7 w-7" />
          <div className="absolute top-2 right-0 h-4 w-5 rounded-full bg-orange-300 pb-5 text-center text-sm">
            {cartItems.length > 9 ? '9+' : cartItems.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
