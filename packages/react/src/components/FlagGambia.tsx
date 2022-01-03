import React from 'react'

const FlagGambia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CC162B" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><path fill="#3C762C" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z"/><path fill="#EEE" d="M0 21h36v2H0zm0-8h36v2H0z"/><path fill="#0D218A" d="M0 15h36v6H0z"/></svg>
  )
}

export default FlagGambia