import { Button } from '@/components/ui/base/button'
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
      
        <section className='py-20 bg-white overflow-hidden '>
            <div className='px-4 mx-auto w-full '>
              <div className='flex flex-wrap items-center'>

                {/* text box */}
                <div className='p-8 w-full bg-white lg:w-1/2'>

                  <Text
                    as='h2'
                    className='leading-none font-bold text-6xl mb-9 md:text-8xl'
                  >
                    {title}
                  </Text>

                  <Text
                    as='p'
                    className='text-gray-900 leading-relaxed font-medium text-lg mb-10 md:max-w-sm'
                  >
                    {description}
                  </Text>

                  <div className='shadow-2xl rounded-xl mb-11 h-auto max-w-[240px]'>
                    <Button
                    variant="five"
                     children="Learn how to save more"
                     className='text-white font-semibold py-4 px-6 bg-indigo-600 border border-indigo-700 rounded-xl  h-auto'
                     />
                  </div>

                  <div className='flex flex-wrap '>
                    <div className='p-2 w-auto '>
                      <img 
                        src="/images/money-coins.png" 
                        alt="money-coin" 
                        className='w-full h-auto'
                      />
                    </div>

                    <div className='p-2 flex-1 '>
                      <Text
                       as='p'
                       className='text-gray-600 font-medium md:max-w-md'
                      >
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit.
                      </Text>
                    </div>
                  </div>
                </div>

                {/* image box */}

                <div className='p-8 w-full lg:w-1/2'>
                  <img 
                    src="/images/image.svg" 
                    alt="image" 
                    className='w-full h-auto'
                  />
                </div>

              </div>
            </div>
        </section>

    </div>

  )
}

export default FeaturesBlock
