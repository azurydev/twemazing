import React from 'react'

const RegionalIndicatorSymbolLetterJ = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M23.102 22.799c0 5.209-3.318 6.573-6.139 6.573-2.14 0-5.705-.837-5.705-3.534 0-.838.713-1.892 1.736-1.892 1.24 0 2.325 1.147 3.721 1.147 1.736 0 1.736-1.613 1.736-2.605V9.156c0-1.55.993-2.418 2.325-2.418 1.334 0 2.326.868 2.326 2.418v13.643z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterJ