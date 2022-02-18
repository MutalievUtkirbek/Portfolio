import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContainer from '../containers/AppContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  )
}

export default MyApp
