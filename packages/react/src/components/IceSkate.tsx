import React from 'react'

const IceSkate = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M26 33c2 2-11 2-9 0 3 0 3-3 3-3h3s0 3 3 3zm-14 0c2 2-11 2-9 0 3 0 3-3 3-3h3s0 3 3 3z"/><path fill="#99AAB5" d="M30 36H2c-1.104 0-2.104-3-1-3h28c3 0 3-3 4-4 5 3 2 7-3 7z"/><path fill="#E6E7E8" d="M1 28c0-9 2-14 2-21 0-2.279 13-2 13 0s-1.5 10 5 13c6.268 2.893 15 2 15 8H1z"/><path fill="#E6E7E8" d="M36 28c-24 0-19.001-1-25-1H1v1c0 1.104.896 2 2 2h8c2.333 0 .398-2.041 3-1 5 2 20 1 20 1 1.104 0 2-.896 2-2z"/><path fill="#DD2E44" d="M16.312 20.75c-.25 0-.5-.093-.694-.28-.398-.383-.409-1.017-.025-1.414l1.688-1.75c.384-.396 1.017-.408 1.414-.025.398.383.409 1.016.025 1.414l-1.688 1.75c-.196.202-.458.305-.72.305zM19.999 23c-.15 0-.303-.034-.446-.105-.494-.247-.694-.848-.447-1.342l1-2c.248-.494.848-.692 1.342-.447.494.247.694.848.447 1.342l-1 2c-.176.35-.529.552-.896.552zm4.002 1c-.047 0-.095-.003-.143-.01-.547-.079-.927-.585-.849-1.132l.209-1.458c.079-.547.587-.923 1.132-.849.547.079.927.585.849 1.132l-.209 1.458c-.072.5-.5.859-.989.859z"/></svg>
  )
}

export default IceSkate