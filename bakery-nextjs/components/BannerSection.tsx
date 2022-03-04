import Button from './Button'

const BannerSection = () => {
  return (
    <div className=" border-b border-gray-300 pb-10 md:mt-4 md:pb-0">
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
      <div className="mx-10 mt-5 text-center md:relative md:z-10 md:w-1/2 md:py-28">
        <p className="md:text-lg md:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          repellat ab ipsam quasi sit tempora adipisci
        </p>
        <h1 className="my-4 text-4xl font-extrabold text-yellow-800 md:mt-10 md:mb-6 md:text-5xl md:text-yellow-700">
          Breads, Cakes, Pastries, and much more !!
        </h1>
        <Button to="/" title="SHOP NOW" />
      </div>
    </div>
  )
}

export default BannerSection
