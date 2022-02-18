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
      <main className="-mt-20 bg-gray-800 py-24 lg:py-0">
        <section className="relative block bg-gray-800 pb-20">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Software Engineer
                </h2>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-400">
                  I live and breath software development. I have a passion for
                  building software that improves the lives of people. I like to
                  work with people, and I am always open to new ideas and
                  challenges.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-800 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-400">
                  I have a wide range of experience in the field of software
                  development. I have worked with a wide range of clients and
                  have a strong track record of delivering high quality
                  software.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-800 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Improvement
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                  I am a team player and I am always looking for ways to improve
                  my skills. I am always open to new challenges and
                  opportunities.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-800 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Knowledge
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                  I constantly update my knowledge base to stay up to date with
                  the latest technologies. I am always willing to learn new
                  things and I am always willing to share my knowledge with
                  others.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative my-12 block bg-gray-800 py-24 lg:my-0 lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-200 shadow-lg">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with me?
                    </h4>
                    <p className="mt-1 mb-4 leading-relaxed text-gray-500">
                      Complete this form and I will get back to you as soon as
                      possible.
                    </p>
                    <div className="relative mb-3 mt-8 w-full">
                      <label
                        className="mb-2 block text-xs font-bold uppercase text-gray-600"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="mb-2 block text-xs font-bold uppercase text-gray-600"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="mb-2 block text-xs font-bold uppercase text-gray-600"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow focus:outline-none focus:ring"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="mr-1 mb-1 rounded bg-gray-800 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-gray-600"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default ABoutPage
