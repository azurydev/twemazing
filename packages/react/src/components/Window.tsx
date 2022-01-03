import React from 'react'

const Window = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D79E84" d="M35 36H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h34c.55 0 1 .45 1 1v34c0 .55-.45 1-1 1z"/><path fill="#BF6952" d="M1 36h34c.55 0 1-.45 1-1V1c0-.275-.112-.525-.294-.706L.294 35.706C.475 35.888.725 36 1 36z"/><path fill="#8CCAF7" d="M2 2h32v32H2z"/><path opacity=".5" fill="#FFF" d="M2 34V2h32z"/><path fill="#BF6952" d="M17 2h2v32h-2z"/><path fill="#BF6952" d="M2 19v-2h32v2z"/></svg>
  )
}

export default Window