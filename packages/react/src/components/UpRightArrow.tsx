import React from 'react'

const UpRightArrow = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M0 32c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28z"/><path fill="#FFF" d="M27 25V9H11z"/><path fill="#FFF" d="M7 23.343L19.816 10.53l5.656 5.657L12.657 29z"/></svg>
  )
}

export default UpRightArrow