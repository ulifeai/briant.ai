import React from 'react'

type Props = { text : string, className : string }


const Paragraph = ( { text, className }:Props) => {
  return (
    <div className={className}>
        <p className='text-base'>
            {text}
        </p>
    </div>
  )
}

export default Paragraph
