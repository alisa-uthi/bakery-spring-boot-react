import Button from './Button'

const HomeAboutSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-10 text-center md:mx-auto md:flex md:max-w-5xl md:items-center md:justify-center">
        <h1 className="text-3xl font-semibold text-yellow-800 md:mr-5 md:w-2/5">
          About Alisa Bakery
        </h1>
        <div className="md:w-3/5 md:border-l md:border-gray-300 md:px-10">
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            nobis quis totam repellendus quidem dolorem cum rem praesentium
            reiciendis ullam officia itaque asperiores suscipit. Optio dolorem
            repellat autem soluta eos!
          </p>
          <Button to="/" title="READ MORE" />
        </div>
      </div>
    </div>
  )
}

export default HomeAboutSection
