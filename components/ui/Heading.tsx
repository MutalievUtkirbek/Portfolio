import React from 'react'

const Heading: React.FC<{
  name: string
  title: string
  excerpt: string
}> = ({ name, title, excerpt }) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
          <span className="text-primary mb-2 block text-lg font-semibold">
            {name}
          </span>
          <h2
            className="
                  text-dark
                  mb-4
                  text-3xl
                  font-bold
                  sm:text-4xl
                  md:text-[42px]
                "
          >
            {title}
          </h2>
          <p
            className="
                  text-body-color
                  text-lg
                  leading-relaxed
                  sm:text-xl
                  sm:leading-relaxed
                "
          >
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Heading
