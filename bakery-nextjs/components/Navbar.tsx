import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-4xl">
      <ul className="mx-4 mt-5 flex items-center justify-between">
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            HOME
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            ABOUT US
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            BREAD
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            CAKES
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            PASTRIES
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            COOKIES
          </li>
        </Link>
        <Link href="/">
          <li className="text-md cursor-pointer font-semibold tracking-wider text-gray-500 hover:font-bold hover:text-yellow-700">
            CONTACT US
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
