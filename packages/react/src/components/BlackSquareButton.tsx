import React from 'react'

const BlackSquareButton = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#E6E7E8" d="M30 28c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V8c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v20z"/></svg>
  )
}

export default BlackSquareButton