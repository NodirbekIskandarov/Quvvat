// import 'bootstrap/dist/css/bootstrap.css'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

// import { LayoutProvider } from '../layout/context/layoutcontext';
// import Layout from '../layout/layout';

// import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';

// import '../styles/layout/layout.scss';
// import '../styles/demo/Demos.scss';
// import '../styles/styles.scss';

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
// import Layout1 from '@/components/Layout';
import { i18n } from '../next-i18next.config';
// import i18next from 'https://deno.land/x/i18next/index.js'
function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
// }
export default App