import Head from 'next/head'

import SubtotalSection from '../components/SubtotalSection'
import CartItemList from '../components/CartItemList'
import PickupDateSection from '../components/PickupDateSection'
import Button from '../components/Button'

const CartPage = () => {
  return (
    <div>
      <Head>
        <title>My Cart | Alisa Bakery</title>
      </Head>

      <div className="mx-auto h-screen w-full max-w-6xl p-10">
        <h1 className="text-2xl font-bold text-yellow-800">My Cart</h1>
        <PickupDateSection />
        <CartItemList />
        <SubtotalSection />

        {/* Checkout and return to shop section */}
        <div className="mt-8 flex w-full items-center justify-between">
          <div className="w-1/2 text-left">
            <Button to={'/collections/bread'} title="RETURN TO SHOP" />
          </div>
          <div className="w-1/2 text-right">
            <Button to={'/'} title="CHECKOUT" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
