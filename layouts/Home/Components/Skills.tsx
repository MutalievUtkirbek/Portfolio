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
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="rounded-lg bg-red-600 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Svelte
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-lightBlue-500 mt-8 rounded-lg p-8 text-center shadow-lg">
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
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-blueGray-700 mt-8 rounded-lg p-8 text-center shadow-lg">
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
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                target="_blank"
              >
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
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="mt-8 rounded-lg bg-red-700 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Angular
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="mt-8 rounded-lg bg-emerald-500 p-8 text-center shadow-lg">
                  <img
                    alt="..."
                    className="mx-auto w-16 max-w-full rounded-full bg-white p-2 shadow-md"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Vue.js
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
      {/* </div> */}
    </>
  )
}

export default Skills
