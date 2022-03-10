import Head from 'next/head'
import BillingAddressForm from '../../components/BillingAddressForm'
import CustomerInformationForm from '../../components/CustomerInformationForm'
import OrderSummary from '../../components/OrderSummary'
import PaymentMethod from '../../components/PaymentMethod'

const CheckoutPage = () => {
  const handleCheckout = () => {
    alert('This service is not available yet.')
  }

  return (
    <div>
      <Head>
        <title>Checkout | Alisa Bakery</title>
      </Head>

      <div className="mx-auto min-h-screen w-full max-w-7xl p-10">
        <h1 className="text-2xl font-bold text-yellow-800">Checkout</h1>
        <div className="w-full lg:flex lg:items-start lg:justify-between lg:space-x-8">
          <div className="lg:w-3/5">
            <CustomerInformationForm />
            <hr className="mt-5" />
            <BillingAddressForm />
          </div>

          <div className="lg:w-2/5">
            <OrderSummary />
            <PaymentMethod />
            <button className="btn mt-10 w-full" onClick={handleCheckout}>
              COUNTINUE
            </button>
            <p className="mt-2 text-xs text-red-400">
              *This service is not available yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
