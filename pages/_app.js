// import { Provider } from 'react-redux';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="pageContent">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
