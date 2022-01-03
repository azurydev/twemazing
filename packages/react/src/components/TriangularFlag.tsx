import React from 'react'

const TriangularFlag = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M13 34s0 2-2 2-2-2-2-2V2s0-2 2-2 2 2 2 2v32z"/><path fill="#DD2E44" d="M11 4c0-2.2 1.636-3.25 3.636-2.333l16.727 7.667c2 .917 2 2.417 0 3.333l-16.727 7.667C12.636 21.25 11 20.2 11 18V4z"/></svg>
  )
}

export default TriangularFlag