import Link from 'next/link'
import React from 'react'
import Navbar from '../../../components/ui/Navbar'

import Clouds from '../Icons/Clouds'
import Rocket from '../Icons/Rocket'

const Header = () => {
  return (
    <div
      className="relative z-10 overflow-hidden bg-indigo-900"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="container relative z-10 mx-auto flex items-center px-6 py-24 md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <span className="font-mitr uppercase text-indigo-500">Who am I?</span>

          <h1 className="font-roboto-slab mt-4 text-4xl leading-tight text-red-400 sm:text-6xl">
            Jakhongir <br /> Abdukhamidov
          </h1>

          <div className="max-w-md">
            <p className="font-source-sans-pro mt-6 text-lg text-indigo-500">
              I am a software engineer based in the Uzbekistan. I have a passion
              for building software that improves the lives of people. I am
              currently working at{' '}
              <a
                className="font-source-sans-pro text-indigo-500"
                href="https://www.epam.com"
              >
                EPAM
              </a>{' '}
              as a software engineer.
            </p>
          </div>

          <Link href="/contact">
            <a className="font-mitr mt-10 block rounded-full bg-indigo-500 py-2 px-4 text-sm uppercase text-white hover:bg-indigo-400">
              Contact me
            </a>
          </Link>
        </div>
        <Rocket />
      </div>
      <Clouds />
    </div>
  )
}

export default Header
