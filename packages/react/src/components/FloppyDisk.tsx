import React from 'react'

const FloppyDisk = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M4 36s-4 0-4-4V4s0-4 4-4h26c1 0 2 1 2 1l3 3s1 1 1 2v26s0 4-4 4H4z"/><path fill="#55ACEE" d="M5 19v-1s0-2 2-2h21c2 0 2 2 2 2v1H5z"/><path fill="#E1E8ED" d="M5 32.021V19h25v13s0 2-2 2H7c-2 0-2-1.979-2-1.979zM10 3s0-1 1-1h18c1.048 0 1 1 1 1v10s0 1-1 1H11s-1 0-1-1V3zm12 10h5V3h-5v10z"/></svg>
  )
}

export default FloppyDisk