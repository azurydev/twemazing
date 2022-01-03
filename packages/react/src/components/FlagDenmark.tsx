import React from 'react'

const FlagDenmark = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C60C30" d="M32 5H15v11h21V9c0-2.209-1.791-4-4-4zM15 31h17c2.209 0 4-1.791 4-4.5V20H15v11zM0 20v6.5C0 29.209 1.791 31 4 31h7V20H0zM11 5H4C1.791 5 0 6.791 0 9v7h11V5z"/><path fill="#EEE" d="M15 5h-4v11H0v4h11v11h4V20h21v-4H15z"/></svg>
  )
}

export default FlagDenmark