import Button from './Button'
import Image from 'next/image'

const BannerSection = () => {
  return (
    <div className="relative border-b border-gray-300 pb-10 md:pb-0">
      <Image
        src="/images/home-banner.jpg"
        layout="fill"
        objectFit="cover"
        className="mt-0 pt-0"
        loading="eager"
        alt="Home Banner"
      />
      <div className="relative w-3/5 p-10 text-center md:z-10 md:py-28">
        <p className="text-white md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          repellat ab ipsam quasi sit tempora adipisci
        </p>
        <h1 className="my-4 text-4xl font-extrabold text-white md:mt-10 md:mb-6 md:text-5xl">
          Breads, Cakes, Pastries, and much more !!
        </h1>
        <Button to="/collections/bread" title="SHOP NOW" />
      </div>
    </div>
  )
}

export default BannerSection
