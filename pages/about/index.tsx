import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/ui/Navbar'
import Header from '../../layouts/Home/Components/Header'

const ABoutPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About Jakhongir | Portfolio</title>
        <meta
          name="description"
          content="Jakhongir Abdukhamidov Portfolio About Page"
        />
      </Head>
      <div>
        <Header />
      </div>
    </React.Fragment>
  )
}

export default ABoutPage
