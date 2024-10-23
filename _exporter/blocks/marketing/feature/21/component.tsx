import { Button } from '@/components/ui/base/button'
import { Text } from '@/components/ui/base/text'
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
      
        <section className='pt-32 pb-36 bg-indigo-600 overflow-hidden '>

            <div className='px-4 mx-auto'>

                {/* text box */}

                <div className='max-w-[672px]'>

                    <Text 
                        as='h2'
                        className='text-white leading-none text-5xl mb-9 font-bold '
                    >
                        {title}
                    </Text>

                    <Text
                        as='p'
                        className='text-opacity-70 text-white mb-36 '
                    >
                       {description}
                    </Text>

                </div>

                {/* features box */}

                <div className='flex flex-wrap '>

                    <div className='p-3  md:w-1/2'>
                        <div className='p-7 bg-white border border-gray-900 rounded-3xl '>
                            <div className='flex flex-wrap '>
                                <div className='p-4 w-auto '>
                                    <Mouse className='align-middle'/>
                                </div>
                                <div className='flex-1 p-4 '>
                                    <Text
                                        as='h3'
                                        className='font-semibold text-lg mb-3'
                                    >
                                        Unlimited resources
                                    </Text>
                                    <Text
                                        as='p'
                                        className='text-gray-600 font-medium '
                                    >
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                        Velit officia consequat duis enim velit mollit. Exercit ation veniam consequat.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 md:w-1/2'>
                        <div className='p-7 bg-white border border-gray-900 rounded-3xl '>
                            <div className='flex flex-wrap '>
                                <div className='p-4 w-auto '>
                                    <Mouse className='align-middle'/>
                                </div>
                                <div className='flex-1 p-4 '>
                                    <Text
                                        as='h3'
                                        className='font-semibold text-lg mb-3'
                                    >
                                        Unlimited resources
                                    </Text>
                                    <Text
                                        as='p'
                                        className='text-gray-600 font-medium '
                                    >
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                        Velit officia consequat duis enim velit mollit. Exercit ation veniam consequat.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    </div>

  )
}

export default FeaturesBlock
