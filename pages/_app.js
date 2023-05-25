// import 'bootstrap/dist/css/bootstrap.css'
// import Layout from '@/components/Layout'
import '@/styles/globals.css'

import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

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
// import Layouta from '../layout/layout';
// import { i18n } from '../next-i18next.config';

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
} else {
    return (
        <LayoutProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </LayoutProvider>
    );
}
}
export default appWithTranslation(App)