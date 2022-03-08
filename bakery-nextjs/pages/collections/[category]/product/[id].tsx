import Head from 'next/head'
import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next/types'
import React, { useState } from 'react'

import ProductCard from '../../../../components/ProductCard'
import { Product } from '../../../../models/product'
import { BASE_API_URL } from '../../../../utils/constant'
import { addItemToCart } from '../../../../slices/cartSlice'
import { useAppDispatch } from '../../../../app/hooks'
import { useRouter } from 'next/router'

interface ProductDetailPageProps {
  product: Product
  suggestedProducts: Product[]
}

const ProductDetailPage = ({
  product,
  suggestedProducts,
}: ProductDetailPageProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    } else {
      setQuantity(1)
    }
  }

  const handleAddItem = () => {
    const addedItem = {
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      quantity: quantity,
      price: product.price,
      totalPrice: product.price * quantity,
    }

    dispatch(addItemToCart(addedItem))
    setQuantity(1)
    router.push('/cart')
  }

  return (
    <div>
      <Head>
        <title>{product.name} | Alisa Bakery</title>
      </Head>

      {/* Product Detail */}
      <div className="mx-auto w-full max-w-6xl p-8 md:flex md:items-start md:justify-evenly md:space-x-5">
        <div className="relative mx-auto h-96 w-96 shadow-lg md:mx-0">
          <Image
            src={'data:image/png;base64,' + product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        </div>

        <div className="pt-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-wide text-yellow-800">
            {product.name}
          </h1>
          <h3 className="pt-4 text-lg font-medium tracking-wider">
            PRICE: {product.price.toFixed(2)} THB
          </h3>

          <div className="mt-5 flex items-center justify-evenly border-y-[1px]">
            <div className="flex items-center justify-center p-3 md:p-6">
              <h3 className="mr-5 text-lg tracking-wider">
                QUANTITY: {quantity}
              </h3>
              <button
                className="btn mr-3 px-3"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
              <button className="btn px-3" onClick={handleDecreaseQuantity}>
                -
              </button>
            </div>

            <div className="border-l border-gray-200 p-3 md:p-6">
              <button className="btn" onClick={handleAddItem}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6" />

      {/* Suggest */}
      <div className="mx-auto w-full max-w-6xl space-y-4 p-10 text-center">
        <h1 className="text-2xl font-semibold text-yellow-800">
          We Also Suggest
        </h1>
        <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          {suggestedProducts.map((item: Product) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productResponse = await fetch(`${BASE_API_URL}/api/v1/products`)
  let products: [] = await productResponse.json()

  const paths = products.map((product: Product) => ({
    params: { id: product.id, category: product.category },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id, category } = context.params!

  // Get individual product detail
  const productResponse = await fetch(`${BASE_API_URL}/api/v1/products/${id}`)
  const product: Product = await productResponse.json()

  // Get suggested products
  const response = await fetch(
    `${BASE_API_URL}/api/v1/products?category=${category}`
  )
  let suggestedProducts: Product[] = await response.json()
  suggestedProducts = suggestedProducts
    .filter((prod: Product) => prod.id !== id)
    .slice(0, 3)

  return {
    props: {
      product,
      suggestedProducts,
    },
  }
}

export default ProductDetailPage
function useDispatch() {
  throw new Error('Function not implemented.')
}
