import Link from 'next/link'
import React from 'react'
import EmailGradientIcon from '../../assets/Icons/EmailGradientIcon'
import GithubIcon from '../../assets/Icons/GithubGradientIcon'
import LinkedinGradientIcon from '../../assets/Icons/LinkedinGradientIcon'
import PhoneGradientIcon from '../../assets/Icons/PhoneGradientIcon'
import TelegramGradientIcon from '../../assets/Icons/TelegramGradientIcon'

const Footer: React.FC = () => {
  const siteLinks = React.useMemo(
    () => ({
      about: 'About me',
      blogs: 'Blogs',
      contact: 'Contact me',
    }),
    []
  )

  return (
    <>
      <footer className=" bg-white pt-8 pb-6">
        <div
          className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 h-20 w-full overflow-hidden"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-blueGray-600 mt-0 mb-2 text-lg">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <a
                  href="https://github.com/jakhongir-abdukhamidov"
                  className="align-center focus:[shadow-lg mr-2 inline-block h-10 w-10 items-center justify-center rounded-full outline-none focus:outline-none"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/jakhongir-abdukhamidov/"
                  className="align-center mr-2 inline-block h-10 w-10 items-center justify-center rounded-full outline-none focus:shadow-lg focus:outline-none"
                >
                  <LinkedinGradientIcon />
                </a>
                <a
                  href="https://t.me/jakhongir_abdukhamidov"
                  className="align-center mr-2 inline-block h-10 w-10 items-center justify-center rounded-full outline-none focus:shadow-lg focus:outline-none"
                >
                  <TelegramGradientIcon />
                </a>
                <a
                  href="mailto:jakhongirabdukhamidov@gmail.com"
                  className="align-center mr-2 inline-block h-10 w-10 items-center justify-center rounded-full outline-none focus:shadow-lg focus:outline-none"
                >
                  <EmailGradientIcon />
                </a>
                <a
                  href="tel:+998337870774"
                  className="align-center mr-2 inline-block h-10 w-10 items-center justify-center rounded-full outline-none focus:shadow-lg focus:outline-none"
                >
                  <PhoneGradientIcon />
                </a>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    {Object.entries(siteLinks).map(([key, value]) => (
                      <li key={key} className="mb-2">
                        <Link href={`/${key}`}>
                          <a className="block text-sm font-semibold text-blue-600 hover:text-blue-800">
                            {value}
                          </a>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        href="https://github.com/jakhongir-abdukhamidov"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="text-blueGray-500 mb-2 block text-sm font-semibold uppercase">
                    Projects
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        href="https://xbook.ijakhongir.uz"
                      >
                        Xbook
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        href="https://humo-logistics"
                      >
                        Humo-Logistics
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        href="https://stanfordschool.uz"
                      >
                        StanfordSchool
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                        href="https://tespen.uz"
                      >
                        Tespen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-blueGray-300 my-6" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="text-blueGray-500 py-1 text-sm font-semibold">
                Copyright © {new Date().getFullYear()} Portfolio by{' '}
                <a
                  href="https://ijakhongir.uz"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Jakhongir Abdukhamidov
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
