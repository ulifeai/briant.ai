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
      
        <section className='pt-28 pb-36 bg-white overflow-hidden relative'>

            <div className='px-4 mx-auto '>

                {/* text box */}
                <div className='flex flex-wrap items-end mb-20 '>

                    {/* title */}

                    <div className='p-8 w-full md:w-1/2'>
                        <Text 
                            as='h2'
                            className='leading-tight font-bold text-5xl'
                        >
                           {description}
                        </Text>
                    </div>

                    {/* descrption */}

                    <div className='p-8 w-full md:w-1/2'>
                        <Text
                            as='p'
                            className='text-gray-900 leading-relaxed text-lg '
                        >
                             {description}
                        </Text>
                    </div>
                </div>

                {/* features box */}

                <div className='flex flex-wrap '>

                    <div className='p-3 md:w-1/3'>
                        <a 
                            href="#"
                            className='flex justify-center h-full '
                        >
                            <div className='rounded-3xl overflow-hidden h-full relative '>
                                <img 
                                    src="/images/image.svg" 
                                    alt="image"
                                    className='rounded-3xl object-cover ' 
                                />
                                <div className='pb-10 px-11 w-full absolute left-0 bottom-0'>
                                    <div className='py-4 px-8 bg-[#fff] rounded-xl '>
                                        <Text
                                            as='h3'
                                            className=''
                                        >
                                            A complete toolkit for your business
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className='p-3 md:w-1/3'>
                        <a 
                            href="#"
                            className='flex justify-center h-full '
                        >
                            <div className='rounded-3xl overflow-hidden h-full relative '>
                                <img 
                                    src="/images/image.svg" 
                                    alt="image"
                                    className='rounded-3xl object-cover ' 
                                />
                                <div className='pb-10 px-11 w-full absolute left-0 bottom-0'>
                                    <div className='py-4 px-8 bg-[#fff] rounded-xl '>
                                        <Text
                                            as='h3'
                                            className=''
                                        >
                                            A complete toolkit for your business
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className='p-3 md:w-1/3'>
                        <a 
                            href="#"
                            className='flex justify-center h-full '
                        >
                            <div className='rounded-3xl overflow-hidden h-full relative '>
                                <img 
                                    src="/images/image.svg" 
                                    alt="image"
                                    className='rounded-3xl object-cover ' 
                                />
                                <div className='pb-10 px-11 w-full absolute left-0 bottom-0'>
                                    <div className='py-4 px-8 bg-[#fff] rounded-xl '>
                                        <Text
                                            as='h3'
                                            className=''
                                        >
                                            A complete toolkit for your business
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>

        </section>

    </div>

  )
}

export default FeaturesBlock
