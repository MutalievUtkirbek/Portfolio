import React from 'react'

const Skills = () => {
  return (
    <>
      <div
        className="container  relative flex flex-wrap items-center overflow-hidden pb-20"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))',
        }}
      >
        <div className="mr-auto  w-full px-4 md:w-6/12">
          <div className="relative flex flex-wrap justify-center">
            <div className="my-4 w-full px-4 lg:w-6/12">
              <a href="https://ijakhongir.uz" target="_blank">
                <div className="rounded-lg bg-gradient-to-r from-green-200 via-green-400 to-green-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto h-16 w-16 max-w-full rounded-full bg-white object-cover object-center p-2 shadow-md"
                    src="https://miro.medium.com/max/400/1*JmhL1ebyzd7mhlcacz-b9g.jpeg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    NodeJS
                  </p>
                </div>
              </a>
              <a href="https://ijakhongir.uz" target="_blank">
                <div className=" mt-8 rounded-lg bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    ReactJS
                  </p>
                </div>
              </a>
              <a href="https://ijakhongir.uz" target="_blank">
                <div className="mt-8 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    NextJS
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full px-4 lg:mt-16 lg:w-6/12">
              <a href="https://ijakhongir.uz" target="_blank">
                <div className="rounded-lg bg-yellow-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    JavaScript
                  </p>
                </div>
              </a>
              <a href="https://ijakhongir.uz" target="_blank">
                <div className="mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto h-16 w-16 max-w-full rounded-full bg-white object-cover object-center p-2 shadow-md"
                    src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">AWS</p>
                </div>
              </a>
              <a href="https://ijakhongir.uz" target="_blank">
                <div className="mt-8 rounded-lg bg-emerald-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto h-16 w-16 max-w-full rounded-full bg-white object-cover object-center p-2 shadow-md"
                    src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/6191a3901b4f74718ba3916a_613294646e81b85ff5c7a1ef_MongoDB.svg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    MongoDB
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="ml-auto mr-auto w-full px-12 md:w-4/12 md:px-4">
          <div className="text-blueGray-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-3xl font-semibold leading-normal">
            Tech Stack
          </h3>
          <p className="text-blueGray-600 mt-4 mb-4 text-lg font-light leading-relaxed">
            Here comes the tech stack that I use to build my projects. I use the
            latest technologies to build my projects and keep learning new ones.
            Among them Nextjs, React Nodejs are my favorite ones.
          </p>
          <p className="text-blueGray-600 mt-4 mb-4 text-lg font-light leading-relaxed">
            I also keep an eye on the latest technologies and frameworks to
            improve my skills.
          </p>
        </div>
      </div>
    </>
  )
}

export default Skills
