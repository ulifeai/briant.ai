import React from 'react'

type Props = { 
  text : string, 
  classNameContainer: string, 
  classNameText: string 
}

const Title = ({text , classNameContainer, classNameText}:Props) => {
  return (
    <div className={classNameText}>
        <p className={classNameContainer}>
            {text}
        </p>
    </div>
  )
}

export default Title
