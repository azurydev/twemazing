import React from 'react'

const Placard = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D99E82" d="M20 33.5v-31c0-.828-.672-1.5-1.5-1.5h-2c-.828 0-1.5.672-1.5 1.5v31c0 .828.672 1.5 1.5 1.5h2c.828 0 1.5-.672 1.5-1.5z"/><path fill="#E1E8ED" d="M28 21H7c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h21c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2z"/><path fill="#66757F" d="M17 14h-7c-.552 0-1-.448-1-1s.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1zm8 0h-4c-.553 0-1-.448-1-1s.447-1 1-1h4c.553 0 1 .448 1 1s-.447 1-1 1zm0-5H10c-.552 0-1-.448-1-1s.448-1 1-1h15c.553 0 1 .448 1 1s-.447 1-1 1z"/><path fill="#C1694F" d="M15 21h5v2h-5z"/></svg>
  )
}

export default Placard