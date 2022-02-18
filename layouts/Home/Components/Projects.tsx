import React from 'react'
import Clouds from '../Icons/Clouds'

const Projects: React.FC = () => {
  return (
    <div
      className="h-full min-h-screen overflow-hidden bg-indigo-900"
      style={{
        clipPath: 'polygon(0 0, 100% 5vw, 100% 100%, 0 100%);',
      }}
    >
      <div className="container flex h-full w-full items-center justify-center pt-32">
        <div className="grid h-auto w-full grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="h-80 w-full cursor-pointer px-4">
            <h5 className="pb-4 text-center text-xl font-semibold text-red-400">
              XBooK
            </h5>
            <a href="https://xbook.ijakhongir.uz">
              <div className="relative flex h-80 w-full flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4">
                {/* <img
                        alt="..."
                        className="h-auto max-w-full rounded-lg border-none align-middle"
                        src="https://source.unsplash.com/random"
                      /> */}
              </div>
            </a>
          </div>

          <div className="my-12 h-80 w-full cursor-pointer px-4 lg:my-0">
            <h5 className="pb-4 text-center text-xl font-semibold text-red-400">
              StanfordSchool
            </h5>
            <a href="https://stanfordschool.uz">
              <div className="relative mb-6 flex h-80 w-full flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4">
                {/* <img
                        alt="..."
                        className="h-auto max-w-full rounded-lg border-none align-middle"
                        src="https://source.unsplash.com/random"
                      /> */}
              </div>
            </a>
          </div>

          <div className="h-full w-full cursor-pointer px-4">
            <h5 className="pb-4 text-center text-xl font-semibold text-red-400">
              Humo-Logistics
            </h5>
            <a href="https://humo-logistics.uz">
              <div className="relative mb-6 flex h-80 w-full flex-col break-words rounded-lg bg-white shadow-lg transition-all duration-150 ease-linear hover:-mt-4">
                {/* <img
                        alt="..."
                        className="h-auto max-w-full rounded-lg border-none align-middle"
                        src="https://source.unsplash.com/random"
                      /> */}
              </div>
            </a>
          </div>
        </div>
      </div>
      <Clouds />
    </div>
  )
}

export default Projects
