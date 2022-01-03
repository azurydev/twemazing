import React from 'react'

const WomanFrowningLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z"/><path fill="#9268CA" d="M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z"/><path fill="#F7DECE" d="M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z"/><path fill="#F7DECE" d="M9 5v12c0 4.971 4.029 9 9 9s9-4.029 9-9V5H9z"/><path fill="#292F33" d="M27 4H9v1H8v6c6 0 6-6 6-6s2 7 14 7V5l-1-1z"/><path fill="#7450A8" d="M9 32h1v4H9zm17 0h1v4h-1z"/><path fill="#662113" d="M14 17c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/><path fill="#C1694F" d="M19 20.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#DF1F32" d="M15 24s1.001-2 3-2 3 2 3 2h-6z"/></svg>
  )
}

export default WomanFrowningLightSkinTone