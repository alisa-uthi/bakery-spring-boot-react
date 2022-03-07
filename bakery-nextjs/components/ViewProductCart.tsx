import useWindowSize from '../utils/windowSize'
import Button from './Button'

interface ViewProductCartProps {
  imageSrc: string
  title: string
  linkTo: string
}

const ViewProductCart = ({ imageSrc, title, linkTo }: ViewProductCartProps) => {
  const size = useWindowSize()

  return (
    <div className="max-wi-lg mb-16 cursor-pointer text-center md:first:ml-10 md:last:mr-10">
      <img
        src={imageSrc}
        style={{
          height: size.width >= 768 ? '150px' : '200px',
          width: size.width >= 768 ? '100%' : '90%',
          objectFit: 'cover',
          margin: 'auto',
        }}
        alt={title}
      />
      <h1 className="mt-2 text-lg font-medium tracking-widest">{title}</h1>
      <br />
      <Button to={linkTo} title="VIEW PRODUCTS" />
    </div>
  )
}

export default ViewProductCart
