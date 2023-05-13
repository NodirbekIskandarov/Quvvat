// import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '../styles/test.css'
import '../styles/elektromobil.css'



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
