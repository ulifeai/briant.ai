import Image from 'next/image'
import React from 'react'

type Props = {
  src : string
}

const Logo = ( { src }:Props) => {
  return (
    <div className="item sm:px-4 sm:py-3 hidden sm:block">
      <Image src={src} width={32} height={32} alt=""/>
    </div>
  )
}

export default Logo
