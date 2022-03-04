import { NextComponentType } from 'next'
import Link from 'next/link'

const BannerSection: NextComponentType = () => {
  return (
    <div className="border-b border-gray-500 md:mt-4">
      <img
        src="/images/home-banner.jpg"
        alt="Home Banner"
        style={{
          height: '600px',
          width: '100%',
          objectFit: 'cover',
        }}
        className="md:absolute md:z-0"
      />
      <div className="mx-10 mt-5 text-center md:absolute md:z-50 md:w-1/2 md:py-28">
        <p className="md:text-lg md:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          repellat ab ipsam quasi sit tempora adipisci
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-yellow-800 md:mt-10 md:text-5xl md:text-yellow-600">
          Breads, Cakes, Pastries, and much more !!
        </h1>
        <Link href="/">
          <button className="mt-5 bg-yellow-800 py-2 px-5 font-semibold text-white hover:bg-yellow-700 md:mt-10 md:bg-yellow-600 md:hover:bg-yellow-500">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BannerSection
