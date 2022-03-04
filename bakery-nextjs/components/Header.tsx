import { NextPage } from 'next/types'
import { ShoppingCartIcon } from '@heroicons/react/solid'

const Header: NextPage = () => {
  return (
    <div className="mt-6 md:flex">
      <h1
        className="flex w-full justify-center border-b border-gray-300 py-3 text-4xl font-bold text-red-800
			md:ml-20 md:flex-grow md:border-none"
      >
        Alisa Bakery
      </h1>

      <div className="justify-end md:mr-10 md:flex">
        <h3 className="flex w-full cursor-pointer justify-center whitespace-nowrap border-b border-gray-300 py-3 text-2xl font-semibold hover:text-red-800 md:mr-10 md:border-none">
          (780) 489-4142
        </h3>
        <div className="flex w-full justify-center border-b border-gray-300 py-3 shadow-md md:w-fit md:items-center md:whitespace-nowrap md:border-none md:shadow-none">
          <ShoppingCartIcon className="h-7 w-7" />
          <div className="h-4 w-4 rounded-full bg-red-400"></div>
        </div>
      </div>

      <div className="invisible absolute top-36 flex w-full border-b border-gray-300 md:visible"></div>
    </div>
  )
}

export default Header
