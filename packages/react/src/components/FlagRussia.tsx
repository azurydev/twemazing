import React from 'react'

const FlagRussia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CE2028" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-4h36v4z"/><path fill="#22408C" d="M0 13h36v10H0z"/><path fill="#EEE" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default FlagRussia