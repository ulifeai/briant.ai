
import { Text } from '@/components/ui/base/text'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'
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
    <div className='py-12'>

        <section className='relative py-20 overflow-hidden'>

            <img 
                src="/images/star-left.png" 
                alt=""
                className='absolute end-0 top-0 align-middle box-border overflow-clip' 
            />

            <div className='px-4 mx-auto relative '>

                <div className='max-w-7xl mx-auto '>

                    {/* text box */}

                    <div className='flex flex-wrap items-center mb-16 max-w-xl'>

                        <div className='px-4 w-full mb-12 '>

                            <div className=' mb-4'>
                                <span className='text-orange-900 font-semibold text-xs py-1 px-3 bg-orange-50 inline-block '>
                                    FEATURES
                                </span>
                                <Text 
                                    as='h1'
                                    className='text-gray-900 text-5xl font-bold mt-4 lg:text-7xl'
                                >
                                    Delivering Tech Solution
                                </Text>
                            </div>

                            <div className=''>
                                <div className='max-w-sm'>
                                    <Text
                                        as='p'
                                        className='text-gray-500 text-lg '
                                    >
                                        We are a team of 20+ who are passionate about making the world a better place.
                                    </Text>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* image box */}

                    <div className='flex flex-wrap lg:flex-nowrap'>

                        {/* box one */}

                        <div className='px-4 w-full mb-8 '>
                            <div className='relative h-[25rem]'>
                                <img 
                                    src="/7.jpg" 
                                    alt="image" 
                                    className='rounded-3xl object-cover w-full h-full'
                                />
                            </div>
                        </div>

                        {/* box two */}

                        <div className='px-4 w-full flex flex-wrap h-full md:flex-nowrap'>

                            {/* ----------- */}

                            <div className='px-4 w-full mb-8 '>
                                <div className='flex flex-col h-full '>
                                    <a 
                                        href="#"
                                        className='pt-8 pb-5 px-8 bg-green-50 h-full block mb-7 relative rounded-3xl'
                                    > 
                                        <div className='pe-4 flex flex-col justify-between max-w-sm h-full '>
                                            <Text
                                            as='p' 
                                                className='text-gray-900 text-sm mb-10 '
                                            >
                                                We have share our journey and some story
                                            </Text>
                                            <span className='text-gray-900 font-semibold text-3xl '>
                                                Read our blog
                                            </span>
                                        </div>
                                        <img 
                                            src="/images/arrow.svg" 
                                            alt="" 
                                            className='absolute m-5 bottom-0 right-0 '
                                        />
                                    </a>

                                    <a 
                                        href="#"
                                        className='pt-8 pb-5 px-8 bg-red-50 h-full block mb-7 relative rounded-3xl'
                                    >
                                        <div className='pe-4 flex flex-col justify-between max-w-sm h-full '>
                                            <Text
                                            as='p' 
                                                className='text-gray-900 text-sm mb-10 '
                                            >
                                                We have share our journey and some story
                                            </Text>
                                            <span className='text-gray-900 font-semibold text-3xl '>
                                                Read our blog
                                            </span>
                                        </div>
                                        <img 
                                            src="/images/arrow.svg" 
                                            alt="" 
                                            className='absolute m-5 bottom-0 right-0 '
                                        />
                                    </a>
                                </div>
                            </div>


                            {/* ----------- */}

                            <div className='px-4 w-full mb-8 '>
                                <div className='flex flex-col h-full '>
                                    <a 
                                        href="#"
                                        className='pt-8 pb-5 px-8 bg-orange-50 h-full block mb-7 relative rounded-3xl'
                                    >
                                        <div className='pe-4 flex flex-col justify-between max-w-sm h-full '>
                                            <Text
                                            as='p' 
                                                className='text-gray-900 text-sm mb-10 '
                                            >
                                                We have share our journey and some story
                                            </Text>
                                            <span className='text-gray-900 font-semibold text-3xl '>
                                                Read our blog
                                            </span>
                                        </div>
                                        <img 
                                            src="/images/arrow.svg" 
                                            alt="" 
                                            className='absolute m-5 bottom-0 right-0 '
                                        />
                                    </a>
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
