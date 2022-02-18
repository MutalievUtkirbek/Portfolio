import React from 'react'
import Link from 'next/link'
import IconButton from '../IconButton'
import HomeIcon from '../../assets/Icons/HomeIcon'
import MenuIcon from '../../assets/Icons/MenuIcon'
import XIcon from '../../assets/Icons/XIcon'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav
        className="container mx-auto px-6 py-4 md:px-12"
        x-data="{ open: false }"
      >
        <div className="items-center justify-between md:flex">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-white">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </a>
            </Link>

            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={handleToggle}
              >
                <IconButton>{open ? <XIcon /> : <MenuIcon />}</IconButton>
              </button>
            </div>
          </div>

          <div className="hidden items-center md:flex">
            {Object.entries({
              about: 'About me',
              blogs: 'Blogs',
              contact: 'Contact me',
            }).map(([key, value]) => (
              <Link href={`/${key}`} key={key}>
                <a className="mx-3 cursor-pointer text-sm uppercase text-white hover:text-indigo-600">
                  {value}
                </a>
              </Link>
            ))}
          </div>
        </div>

        {open && (
          <div className="z-40 mt-4 flex w-full flex-col overflow-hidden rounded bg-indigo-600 py-2 md:hidden">
            {Object.entries({
              about: 'About me',
              blogs: 'Blogs',
              contact: 'Contact me',
            }).map(([key, value]) => (
              <Link href={`/${key}`} key={key}>
                <a className="block px-4 py-2 uppercase text-white hover:bg-indigo-700">
                  {value}
                </a>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
