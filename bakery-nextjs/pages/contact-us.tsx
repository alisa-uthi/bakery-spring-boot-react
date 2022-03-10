import Head from 'next/head'
import ContactCard from '../components/ContactCard'
import { LocationMarkerIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import ContactUsForm from '../components/ContactUsForm'

const ContactUsPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      <div className="mx-auto w-full max-w-6xl p-10">
        <h1 className="mb-2 text-4xl font-bold text-yellow-800">
          Contact Alisa Bakery
        </h1>
        <h3 className="mb-8 text-xl font-normal">BAKERY IN WONDERLAND</h3>

        <div className="w-full sm:flex sm:flex-wrap sm:items-center sm:justify-around">
          <ContactCard
            Icon={<LocationMarkerIcon />}
            title="ADDRESS"
            detail="221B Baker Street, London"
          />
          <ContactCard
            Icon={<LocationMarkerIcon />}
            title="ADDRESS"
            detail="221B Baker Street, London"
          />
          <ContactCard
            Icon={<LocationMarkerIcon />}
            title="ADDRESS"
            detail="221B Baker Street, London"
          />
          <ContactCard
            Icon={<LocationMarkerIcon />}
            title="ADDRESS"
            detail="221B Baker Street, London"
          />
        </div>

        <div className="mt-16 mb-4 w-full md:grid md:grid-cols-2 md:space-x-6">
          <div className=" text-center">
            <Image
              src="/images/london-map.png"
              width={500}
              height={450}
              className="object-contain md:object-cover"
              alt="Alisa Bakery's Location"
            />
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
