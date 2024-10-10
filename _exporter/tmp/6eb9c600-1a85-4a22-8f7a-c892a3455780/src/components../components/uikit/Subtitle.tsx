import React from 'react'

type Props = { text : string, className : string }

const Subtitle = ({text , className}:Props) => {
  return (
    <div className={className}>
        <p className=' text-md font-semibold'>
            {text}
        </p>
    </div>
  )
}

export default Subtitle
