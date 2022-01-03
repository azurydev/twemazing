import React from 'react'

const FlagIraq = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#141414" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z"/><path fill="#EEE" d="M0 13h36v10H0z"/><path fill="#DD2E44" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><g fill="#007A3C"><path d="M11.227 18.06v1.229h5.651v-.737c0-.328-.369-.308-.369-.062v.552h-4.423v-.86l3.102-3.102.471.501-2.815 2.846h2.928s.133-.86.931-.86l.912.635v2.314h-8.23s-.205 1.085-1.454.941c0 0 .86-.573.86-1.249 0-.675-.552-1.208-.552-1.208l.778-.491s.082.42.164.542c.083.122.389.235.389.235h1.044l-.014-.546-.151-.065.778-.615zm8.302 1.002l-.166.227h-.487c.002-1.151.006-3.418-.001-3.441-.01-.031.215-.194.215-.194l-.982-.542v5.406h1.843l-.422-1.456zm5.458-3.09v3.317h-.491V16.34l-.615.615v2.335h-.491v-1.966l-.613.615v.006l-.134.127.134.052v.457c-.586-.301-1.229.155-1.229.71v1.228h4.053V15.36l-.614.612zm-2.564 3.317h-.036c-.246 0-.215-.328.123-.328.188 0 .248.101.267.191v.137h-.354zm1.315-4.208c0 .152-.051.277-.113.277-.062 0-.112-.124-.112-.277 0-.153.051-.276.112-.276.063 0 .113.123.113.276zm-1.034.747s.184.175.523.123c.338-.051.45-.358.45-.358s.194.317.409.266c.216-.051.41-.389.41-.389s.01.542-.308.593c-.317.051-.45-.174-.45-.174s-.164.246-.471.266c-.307.022-.563-.327-.563-.327zm4.944 3.205l-.265.256h-.43v-3.491l.255-.113-.992-.573v5.406h1.852z"/><path d="M10.716 21.132c0 .146-.119.266-.267.266-.146 0-.266-.119-.266-.266 0-.147.12-.267.266-.267.148 0 .267.119.267.267z"/></g></svg>
  )
}

export default FlagIraq