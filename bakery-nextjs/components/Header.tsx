import { ShoppingCartIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div className="mt-6 md:flex">
      <h1
        className="flex w-full justify-center border-b border-gray-300 py-3 text-4xl font-bold text-yellow-800
			md:ml-20 md:flex-grow md:border-none"
      >
        -------- Alisa Bakery --------
      </h1>

      <div className="justify-end md:mr-10 md:flex">
        <h3 className="flex w-full cursor-pointer justify-center whitespace-nowrap border-b border-gray-300 py-3 text-2xl font-semibold hover:text-yellow-800 md:mr-10 md:border-none">
          (234) 999-9999
        </h3>
        <div className="flex w-full justify-center border-b border-gray-300 py-3 shadow-md md:w-fit md:items-center md:whitespace-nowrap md:border-none md:shadow-none">
          <ShoppingCartIcon className="h-7 w-7" />
          <div className="h-4 w-4 rounded-full bg-orange-300"></div>
        </div>
      </div>
    </div>
  )
}

export default Header
