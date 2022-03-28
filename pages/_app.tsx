// Styles
import '../styles/index.css';
import 'animate.css';

// Modules
import type { AppProps } from 'next/app';

// Components
import GeneralState from '../contexts/GeneralContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeneralState>
      <Component {...pageProps} />
    </GeneralState>
  )
}

export default MyApp
