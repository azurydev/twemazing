import React from 'react'

const RegionalIndicatorSymbolLetterU = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M8 9.156c0-1.55 1.167-2.418 2.5-2.418s2.5.868 2.5 2.418v10.821c0 2.853 2.055 4.923 5 4.923 2.822 0 5-2.194 5-4.923V9.156c0-1.55 1.168-2.418 2.5-2.418 1.334 0 2.467.868 2.467 2.418v11.069c0 5.209-4.852 9.147-9.967 9.147-5.178 0-10-3.876-10-9.147V9.156z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterU