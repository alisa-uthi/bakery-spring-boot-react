import Head from 'next/head'

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>

      <div className="auto h-screen w-full p-10">
        <h1 className="mb-2 text-4xl font-bold text-yellow-800">
          About Alisa Bakery
        </h1>
        <h3 className="mb-8 text-xl font-normal">BAKERY IN WONDERLAND</h3>
        <h4 className="mb-3 text-lg font-semibold">
          Bread, Cakes, Pastries, Specialty Cakes, &amp; more!
        </h4>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quisquam, repellat molestias accusantium dignissimos quibusdam
          pariatur sint illo! Consequuntur non amet, vel magni sed labore
          corporis eum tempora corrupti perspiciatis?
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quisquam, repellat molestias accusantium dignissimos quibusdam
          pariatur sint illo! Consequuntur non amet, vel magni sed labore
          corporis eum tempora corrupti perspiciatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quisquam, repellat molestias accusantium dignissimos quibusdam
          pariatur sint illo! Consequuntur non amet, vel magni sed labore
          corporis eum tempora corrupti perspiciatis?
        </p>
      </div>
    </div>
  )
}

export default AboutUs
