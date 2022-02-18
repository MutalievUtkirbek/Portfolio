import Head from 'next/head'
import React from 'react'
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
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default AppContainer
