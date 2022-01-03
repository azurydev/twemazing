import React from 'react'

const EyeInSpeechBubble = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M32.769 33.359c-2.739-3.286-3.903-6.569-4.397-8.746-.064-.283-.249-.524-.506-.661s-.56-.154-.83-.05l-7.112 2.749c-.303.117-.53.374-.609.688-.079.315-.019.665.211.896C25.492 34.216 31.945 35 32 35c.354 0 .688-.188.867-.503.208-.362.169-.816-.098-1.138z"/><ellipse fill="#31373D" cx="18" cy="16" rx="18" ry="14"/><circle fill="#31373D" cx="18" cy="16" r="5"/><path fill="#FFF" d="M18 7c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 14c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z"/></svg>
  )
}

export default EyeInSpeechBubble