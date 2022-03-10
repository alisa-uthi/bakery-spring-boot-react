import Link from 'next/link'
import ViewProductCart from './ViewProductCart'

const ServiceSection = () => {
  return (
    <div>
      <div className="mx-10 mt-10 pb-10 text-center ">
        <h1 className="text-3xl font-semibold text-yellow-800">Alisa Bakery</h1>
        <h3 className="mt-2 font-medium">WHOLESALE BAKERY IN WONDERLAND</h3>
        <br />
        <h4 className="mb-2 font-medium">
          Bread, Cakes, Pastries, Specialty Cakes, and more!
        </h4>
        <p className="mb-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          distinctio nemo recusandae laudantium quis fuga asperiores
        </p>
        <p className="text-sm">
          <span className="font-bold text-yellow-800">
            <Link href="/">VISIT ALISA BAKERY</Link>
          </span>{' '}
          in Wonderland
        </p>
      </div>
      <div className="md:mx-auto md:flex md:max-w-4xl md:items-center md:justify-between">
        <ViewProductCart
          imageSrc="/images/bread-banner.jpg"
          title="BREAD"
          linkTo="/collections/bread"
        />
        <ViewProductCart
          imageSrc="/images/cake-banner.jpg"
          title="CAKES"
          linkTo="/collections/cake"
        />
        <ViewProductCart
          imageSrc="/images/pastry-banner.jpg"
          title="PASTRIES"
          linkTo="/collections/pastry"
        />
      </div>
    </div>
  )
}

export default ServiceSection
