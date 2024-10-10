import Image from 'next/image'
import React from 'react'

type Props = {
  src : string
}

const Logoitem = ( { src }:Props) => {
  return (
    <div className="item flex sm:px-4 sm:py-3 ">
      <Image src={src} width={140} height={56} alt=""/>
    </div>
  )
}

export default Logoitem
