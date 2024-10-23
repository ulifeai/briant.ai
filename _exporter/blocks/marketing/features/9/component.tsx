import Text from '@/components/ui/base/text'
import { ArrowBigUp, ArrowUp, Mouse } from 'lucide-react'
import React from 'react'




interface Props {

    title: string
    description: string 
    tag: string
}

 
const FeaturesBlock = ({
    tag,
    title,
    description
} : Props) => {
  return (
    
    <div className='box-border'>
      
      <section className='relative py-32 bg-white overflow-hidden'>

        <img 
          src="/images/eclipse.svg" 
          alt="" 
          className='absolute top-0 left-0 w-full '
        />

        <div className='px-4  mx-auto bg-white max-w-[1280px]'>

          <div className='flex flex-wrap items-center m-[-2rem] lg:flex-nowrap '>

            {/* text box */}

            <div className='p-8 w-full bg-white lg:w-1/2'>
              <Text 
                as='h2'
                className='leading-tight font-bold text-6xl mb-6'
              >
                {title}
              </Text>
              <Text 
                as='p'
                className='text-gray-900 leading-relaxed text-lg '
              >
                   {description}
              </Text>
            </div>

            {/* image-box */}

            <div className='p-8 w-full lg:w-1/2'>
              <img 
                src="images/image.svg" 
                alt="image"
                className='align-middle w-full transition ease-in-out duration-1000 ' 
              />
            </div>

          </div>

        </div>

      </section>

    </div>

  )
}

export default FeaturesBlock
