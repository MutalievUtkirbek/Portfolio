import React from 'react'

const IconButton: React.FC<{
  className?: string
  stroke?: string
  fill?: string
}> = ({
  className = 'w-6 h-6',
  stroke = 'currentColor',
  fill = 'none',
  children,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
    >
      {children}
    </svg>
  )
}

export default IconButton
