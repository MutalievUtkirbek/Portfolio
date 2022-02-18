import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../layouts/Home/Components/Header'
import Skills from '../layouts/Home/Components/Skills'
import Projects from '../layouts/Home/Components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jakhongir | Portfolio</title>
        <meta
          name="description"
          content="Jakhongir Abdukhamidov Portfolio Home Page"
        />
      </Head>
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
      <Header />
      <main className="bg-white">
        <section className="min-h-screen">
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section className="relative bg-white pb-16 pt-32">
          <div className="container mx-auto my-8 bg-white">
            <div className="relative z-10 -mt-64 flex flex-wrap justify-center rounded-lg bg-white py-16 px-12 shadow-xl">
              <div className="w-full text-center lg:w-8/12">
                <p className="text-center text-4xl">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="text-3xl font-semibold">
                  Do you like the projects?
                </h3>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-blue-500">
                  Cause if you do, you can invest in the projects and get
                  rewards.
                </p>
                <div className="mt-10 flex flex-col sm:block">
                  <a
                    href="https://tespen.uz/invest"
                    target="_blank"
                    className="get-started mr-1 mb-2 rounded bg-gray-800 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-500"
                  >
                    Get started
                  </a>
                  <a
                    href="https://t.me/jakhongir_abdukhamidov"
                    target="_blank"
                    className="active:bg-blueGray-600 mr-1 mb-1 rounded bg-blue-700 px-6 py-4 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none sm:ml-1"
                  >
                    <span>Chat with me</span>
                  </a>
                </div>
                <div className="mt-16 text-center"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
