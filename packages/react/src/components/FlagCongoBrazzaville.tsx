import React from 'react'

const FlagCongoBrazzaville = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#009543" d="M4 5C1.791 5 0 6.791 0 9v18c0 1.104.448 2.104 1.172 2.828L26 5H4z"/><path fill="#FBDE4A" d="M32 5h-6L1.172 29.828C1.896 30.552 2.896 31 4 31h6L34.828 6.172C34.104 5.448 33.104 5 32 5z"/><path fill="#DC241F" d="M10 31h22c2.209 0 4-1.791 4-4V9c0-1.104-.448-2.104-1.172-2.828L10 31z"/></svg>
  )
}

export default FlagCongoBrazzaville