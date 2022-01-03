import React from 'react'

const Keycap = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M32 0H4C1.791 0 0 1.791 0 4v28c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4z"/><path fill="#FFF" d="M19 7h-2c-.552 0-1 .448-1 1v20c0 .553.448 1 1 1h2c.553 0 1-.447 1-1V8c0-.552-.447-1-1-1z"/><path fill="#FFF" d="M26.617 11.09l1.105 1.667c.305.46.179 1.081-.281 1.386L10.769 25.191c-.461.305-1.081.179-1.386-.281l-1.105-1.667c-.305-.461-.18-1.081.281-1.386L25.231 10.81c.461-.306 1.081-.18 1.386.28z"/><path fill="#FFF" d="M9.383 11.09l-1.105 1.667c-.305.46-.179 1.081.281 1.386L25.231 25.19c.461.305 1.081.179 1.386-.281l1.105-1.667c.305-.461.18-1.081-.281-1.386L10.769 10.809c-.461-.305-1.081-.179-1.386.281z"/></svg>
  )
}

export default Keycap