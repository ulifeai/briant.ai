import React from 'react'

type Props = { 
  text : string, 
  classNameContainer : string,
  classNameParagraphe : string 
}


const Paragraph = ({text , classNameContainer, classNameParagraphe}:Props ) => {
  return (
    <div className={classNameContainer}>
        <p className={classNameParagraphe}>
            {text}
        </p>
    </div>
  )
}

export default Paragraph
