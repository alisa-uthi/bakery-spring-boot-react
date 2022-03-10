import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Router from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'

// Progress Bar
const progress = new ProgressBar({
  size: 3,
  color: '#a16207',
  className: 'z-50',
  delay: 80,
})
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

// Redux Persist
let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
