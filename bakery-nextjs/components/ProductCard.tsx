import { Product } from '../models/product'
import Image from 'next/image'
import Button from './Button'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="mx-auto mb-16 w-60 md:mb-10">
      <div className="relative mx-auto h-60 w-60 shadow-lg">
        <Image
          src={'data:image/png;base64,' + product.image}
          layout="fill"
          objectFit="cover"
          alt={product.name}
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1 className="whitespace-normal pt-3 text-lg font-normal tracking-widest">
          {product.name.toUpperCase()}
        </h1>
        <Button to={'/'} title="VIEW DETAILS" />
      </div>
    </div>
  )
}

export default ProductCard
