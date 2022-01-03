import React from 'react'

const FlagNiger = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M0 13h36v10H0z"/><path fill="#E05206" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><circle fill="#E05206" cx="18" cy="18" r="4"/><path fill="#0DB02B" d="M32 31H4c-2.209 0-4-1.791-4-4v-4h36v4c0 2.209-1.791 4-4 4z"/></svg>
  )
}

export default FlagNiger