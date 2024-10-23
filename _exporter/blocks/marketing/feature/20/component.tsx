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
      
        <section className='pt-28 pb-40 bg-white overflow-hidden  '>

            <div className='px-4 mx-auto w-full'>

                <Text
                    as='h2'
                    className='leading-none font-bold text-6xl mb-20 '
                >
                    {title}
                </Text>

                <div className='flex flex-wrap bg-white'>

                    {/* Image box */}

                    <div className='p-8 w-full  md:w-1/2'>

                        <a 
                            href="#"
                            className='rounded-3xl overflow-hidden '
                        >
                            <img 
                                src="/7.jpg" 
                                alt="image"
                                className='rounded-3xl' 
                            />
                        </a>

                    </div>

                    {/* text box */}

                    <div className='p-8 w-full md:w-1/2'>

                        <div>

                            <div className='pb-32 border-b mb-11 '>
                                <Text
                                    as='h3'
                                    className='font-semibold text-lg'
                                >
                                    {description}
                                </Text>
                            </div>

                            <div className='flex flex-wrap '>

                                <div className='p-8 w-auto '>
                                    <Text
                                        as='h3'
                                        className='text-indigo-600 text-lg mb-4 font-semibold'
                                    >
                                        Ultimated Meeting
                                    </Text>
                                    <Text
                                        as='p'
                                        className='text-gray-900 font-medium '
                                    >
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </Text>
                                </div>

                                <div className='p-8 w-auto '>
                                    <Text
                                        as='h3'
                                        className='text-indigo-600 text-lg mb-4 font-semibold'
                                    >
                                        Ultimated Meeting
                                    </Text>
                                    <Text
                                        as='p'
                                        className='text-gray-900 font-medium '
                                    >
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
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
