import React from 'react'

const ExplodingHead = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCB4C" d="M35 18.619c0-3.794-3.075-6.869-6.869-6.869-.979 0-2.752.578-2.752.578l-13.126 1.384s-2.717-1.581-4.383-1.581C4.075 12.131 1 15.206 1 19c0 .237.012.471.035.702C1.406 28.763 8.849 36 18 36c9.389 0 17-7.611 17-17 0-.052-.009-.101-.012-.153.003-.076.012-.151.012-.228z"/><path fill="#F19020" d="M30.126 13.751c-.941-.244-1.009.386-2.202.246-1.168-.137.429-.739-.195-1.092-.21-.119-.511-.144-.882-.098-1.052.129-16.954.544-17.547.83-.527.254-.839.548-1.318.101-.603-.562-1.466-.238-1.716-.051-.322.242-.389.722.234 1.277.621.42 1.673.859 3.465 1.159.197.033.365.046.522.052 1.227.041 1.397-1.67 3.13-1.716 1.136-.03 11.153 1.07 11.978.958.101-.014.207-.024.329-.024 1.563 0 1.926 1.45 3.589.316.705-.573 1.811-1.648.613-1.958z"/><path fill="#F36C24" d="M5.938 9.115c1.523 1.527 2.604 3.145 3.362 4.523.566 1.029.956 1.929 1.187 2.538 1.227.041 1.397-.67 3.13-.716 1.136-.03 1.783.769 2.623 1.229 1.502.822 2.569-.73 3.719-.73.85 0 2.219 1.207 3.176.764 1.387-.643 1.635-1.191 2.46-1.304.322-.791.741-1.696 1.252-2.609.74-1.324 1.678-2.665 2.841-3.693H5.938z"/><path fill="#CE5C1F" d="M29.306 9.435c1.281-1.263-23.039.016-22.341.788.988 1.094 2.2 3.153 2.2 3.153s4.757 2.405 8.351-.626c2.5 1.5 6 .969 7.562-1.609 0 0 1.217.453 2.451.531 0 0 .953-1.425 1.777-2.237z"/><ellipse fill="#65471B" cx="18" cy="28.638" rx="4.332" ry="4.95"/><path fill="#65471B" d="M14 20.606c0 1.473-.896 2.667-2 2.667-1.105 0-2-1.194-2-2.667 0-1.473.895-2.667 2-2.667 1.104 0 2 1.194 2 2.667zm12-.001c0 1.473-.895 2.667-2 2.667s-2-1.194-2-2.667c0-1.472.896-2.667 2-2.667 1.105.001 2 1.195 2 2.667z"/><path fill="#CCD6DD" d="M31.125 3.725c-.24 0-.467.045-.686.109-.688-.845-1.723-1.396-2.898-1.396-.087 0-.169.02-.255.026-.734-.827-1.794-1.359-2.987-1.359-1.505 0-2.8.839-3.486 2.066-.346-.798-1.139-1.357-2.064-1.357-.718 0-1.349.342-1.761.865C16.48 1.209 15.1.147 13.458.147c-1.323 0-2.48.689-3.148 1.723-.184-.029-.368-.058-.56-.058-1.432 0-2.661.812-3.293 1.992-.203-.038-.41-.063-.624-.063-1.864 0-3.375 1.511-3.375 3.375s1.511 3.375 3.375 3.375c.588 0 1.135-.159 1.614-.425.376.282.838.456 1.345.456.145 0 .285-.016.422-.043.855 1.379 2.367 2.303 4.109 2.303 1.709 0 3.206-.885 4.073-2.217.72.882 1.802 1.457 3.029 1.457 1.815 0 3.327-1.238 3.776-2.911.034.001.065.01.099.01.283 0 .559-.031.826-.087.654.556 1.491.904 2.417.904 1.174 0 2.21-.551 2.897-1.396.219.064.446.109.686.109 1.36 0 2.463-1.103 2.463-2.463s-1.104-2.463-2.464-2.463z"/><circle fill="#E1E8ED" cx="27.795" cy="5.767" r="2.121"/><path fill="#E1E8ED" d="M19.876 5.903c0-1.193-.967-2.161-2.16-2.161-.368 0-.71.101-1.013.263-.251-.601-.844-1.024-1.537-1.024-.567 0-1.067.285-1.368.718-.67-.623-1.561-1.013-2.548-1.013-1.755 0-3.216 1.21-3.625 2.838-.365-.367-.87-.595-1.429-.595-1.111 0-2.012.901-2.012 2.012s.901 2.012 2.012 2.012c.703 0 1.319-.361 1.679-.907.517 1.081 1.529 1.873 2.749 2.079.39.67 1.107 1.125 1.938 1.125 1.074 0 1.969-.754 2.193-1.76.324.18.691.292 1.087.292 1.07 0 1.962-.749 2.19-1.75 1.042-.155 1.844-1.044 1.844-2.129z"/></svg>
  )
}

export default ExplodingHead