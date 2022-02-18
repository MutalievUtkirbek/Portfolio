import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/ui/Navbar'
import Header from '../../layouts/Home/Components/Header'

const ContactPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contaxt Jakhongir | Portfolio</title>
        <meta
          name="description"
          content="Jakhongir Abdukhamidov Portfolio Contact Page"
        />
      </Head>
      <div>
        <Header />
      </div>
    </React.Fragment>
  )
}

export default ContactPage
