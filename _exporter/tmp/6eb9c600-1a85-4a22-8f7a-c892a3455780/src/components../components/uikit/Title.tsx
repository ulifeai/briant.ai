import React from 'react'

type Props = { text : string, className : string }

const Title = ({text , className}:Props) => {
  return (
    <div className={className}>
        <p className=' text-4xl sm:text-5xl font-bold '>
            {text}
        </p>
    </div>
  )
}

export default Title
