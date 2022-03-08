import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-gray-800 text-gray-300">
      <div className="mx-auto flex max-w-4xl items-start justify-around py-5 md:justify-between md:px-10">
        <div className="md:flex">
          <div className="">
            <h1 className="mb-2 font-bold">Location</h1>
            <p className="text-sm">221B Baker Street, London</p>
          </div>
          <div className="mt-8 md:mt-0 md:ml-20">
            <h3 className="mb-2 font-bold">Explore</h3>
            <Link href="/">
              <p className="cursor-pointer text-sm">Home</p>
            </Link>
            <Link href="/product/bread">
              <p className="cursor-pointer text-sm">Shop</p>
            </Link>
            <Link href="/about-us">
              <p className="cursor-pointer text-sm">About Us</p>
            </Link>
            <Link href="/contact-us">
              <p className="cursor-pointer text-sm">Contact Us</p>
            </Link>
          </div>
        </div>

        <Button to="/contact-us" title="JOIN OUR MAILING LIST" />
      </div>

      <div className="border-t border-gray-500 py-3 text-center text-sm ">
        Copyright © 2022 - Alisa Bakery
      </div>
    </footer>
  )
}

export default Footer
