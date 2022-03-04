import Header from './Header'
import Navbar from './Navbar'
import useWindowSize from '../utils/windowSize'
import Footer from './Footer'

const Layout = (props: any) => {
  const size = useWindowSize()

  return (
    <div>
      <div className="relative top-0 left-0 right-0">
        <Header />
        {size.width >= 768 ? <Navbar /> : null}
      </div>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
