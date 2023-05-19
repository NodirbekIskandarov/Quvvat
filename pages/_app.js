// import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import '../styles/test.css'
import '../styles/elektromobil.css'
import '../styles/korporativ.css'
import '../styles/avtodiller.css'
import '../styles/maqolalar.css'
import '../styles/video.css'
import '../styles/quvvatBerish.css'
import '../styles/dMajmua.css'
import '../styles/acdc.css'
import '../styles/konnektorlar.css'
import '../styles/moroz.css'
import { appWithTranslation } from 'next-i18next';
// import { i18n } from '../next-i18next.config';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default appWithTranslation(App)