import '../styles/globals.css'
import Header from '../components/Header'
import ContentStyles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
