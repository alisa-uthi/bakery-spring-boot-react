import Button from './Button'

const HomeContactSection = () => {
  return (
    <div className="flex items-center justify-start">
      <img
        src="/images/pastry-banner.jpg"
        alt="Contact Alisa Bakery"
        style={{
          height: '400px',
          width: '100%',
          objectFit: 'cover',
          transform: 'scaleX(-1)',
        }}
        className="relative z-0"
      />
      <div className="absolute z-30 p-10 text-center text-white md:text-black">
        <h1 className="text-3xl font-semibold ">Contact Alisa Bakery</h1>
        <h3 className="my-3 font-medium">
          Your Bread, Cake, and Pastry Bakery in Wonderland
        </h3>
        <Button to="/collections/bread" title="WHOLESALE PRICING AVAILABLE" />
        <h3 className="mt-6 text-lg font-medium">Business Hours:</h3>
        <h2 className="mt-2 mb-5 text-xl font-medium">
          Mon To Fri: 9 AM to 5 PM | Sat &amp; Sun: Closed
        </h2>
        <Button to="/contact-us" title="GET IN TOUCH" />
      </div>
    </div>
  )
}

export default HomeContactSection
