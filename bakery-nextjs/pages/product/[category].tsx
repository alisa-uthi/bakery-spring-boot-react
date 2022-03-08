import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ProductCard from '../../components/ProductCard'
import { Product } from '../../models/product'
import { BASE_API_URL } from '../../utils/constant'

interface ProductListProps {
  products: []
}

const ProductList = ({ products }: ProductListProps) => {
  const router = useRouter()
  const { category } = router.query

  return (
    <div>
      <Head>
        <title>
          {category!.toLocaleString().toUpperCase() || 'Products'} | Alisa
          Bakery
        </title>
      </Head>

      <div className="relative h-64">
        <Image
          src={`/images/${category}-banner.jpg`}
          layout="fill"
          objectFit="cover"
          loading="eager"
          alt={`${category} banner`}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl p-10 text-center">
        <h1 className="pb-10 text-center text-3xl font-bold text-yellow-800">
          {category!.toLocaleString().toUpperCase()}
        </h1>

        <div className="mx-auto md:flex md:max-w-4xl md:flex-wrap md:items-center md:justify-around">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${BASE_API_URL}/api/v1/products/categories`)
  let categories: [] = await response.json()

  const paths = categories.map((category: string) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params!.category || 'bread'

  const response = await fetch(
    `${BASE_API_URL}/api/v1/products?category=${category}`
  )
  const products: [] = await response.json()

  return {
    props: {
      products,
    },
  }
}

export default ProductList
