import Head from 'next/head'
import React from 'react'
import Script from 'next/script'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'

const AppContainer: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jakhongir | Portfolio</title>
        <meta name="description" content="Jakhongir Abdukhamidov Portfolio " />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Jakhongir Abdukhamidov" />
      </Head>
      <div>
        <div>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4K1CWWRDXD"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4K1CWWRDXD');
          `}
          </Script>
        </div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default AppContainer
