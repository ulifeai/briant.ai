import { Text } from '@/components/ui/base/text'
import { Timer } from 'lucide-react'
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
      
      <section className='py-12 relative overflow-hidden '>

        <div className='max-w-[480px] px-3 mx-auto lg:max-w-[1280px]'>

            {/* text container */}

            <div className='max-w-5xl text-center mb-20 mx-auto box-border'>

                <Text className='mb-8 text-5xl lg:text-7xl font-bold text-center' as='h2'>
                    {title}
                </Text>

                <Text className='text-lg  text-[#768b8d] mb-4 max-w-sm mx-auto' as='p'>
                    {description}
                </Text>

            </div>


            {/* features block */}

            <div className='rounded-lg bg-[#fbe7e7] py-24 px-10 box-border lg:px-10 lg:py-24'>

                <div className='flex box-border flex-col-reverse lg:flex-row lg:justify-between'>

                    <div className='lg:w-1/2 px-3'>

                        <div className='pb-12 mb-12 flex items-center border-b'>
                            <div className='w-[60px] h-[60px] rounded-full bg-pink flex items-center justify-center bg-[#fff9e9]'>
                                <Timer />
                            </div>
                            <div className='ms-4 box-border flex flex-col'>
                            <span className='font-semibold text-xl'>Simple & Unique</span>
                                <span className='text-[#768b8d] text-base '>
                                    Created by our talented designer
                                </span>
                            </div>
                        </div>

                        <div className='pb-12 mb-12 flex items-center border-b'>
                            <div className='w-[60px] h-[60px] rounded-full bg-pink flex items-center justify-center bg-[#a8f2d7]'>
                                <Timer />
                            </div>
                            <div className='ms-4 box-border flex flex-col'>
                            <span className='font-semibold text-xl'>Layered & Well Documented</span>
                                <span className='text-[#768b8d] text-base '>
                                    The best layer organisation
                                </span>
                            </div>
                        </div>

                        <div className='pb-12 mb-12 flex items-center border-b'>
                            <div className='w-[60px] h-[60px] rounded-full bg-pink flex items-center justify-center bg-[#c6eeff]'>
                                <Timer />
                            </div>
                            <div className='ms-4 box-border flex flex-col'>
                            <span className='font-semibold text-xl'>World Class UI Design</span>
                                <span className='text-[#768b8d] text-base '>
                                    We are not tolerant about taste
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Plan */}

                    <div className='lg:w-1/2 mb-20 order-1 px-3 flex flex-col justify-center'>

                        <div className='max-w-md '>

                            <h4 className='mb-5 text-4xl font-bold'>
                                Start custom & build! 
                            </h4>

                            <p className='mb-20 *:'>
                                Nunc et tellus non erat accumsan
                                aliquam eget non mi. Integer 
                                fringilla pellentesque finibus.
                            </p>

                        </div>

                        <div className='flex flex-col gap-5 lg:flex-row lg:items-center justify-around'>

                            <div className='block'>
                                <span className='font-bold text-4xl'>Only $50</span>
                                <p className='text-xl font-semibold text-gray-400'>for Silver package</p>
                            </div>

                            <a 
                                href=""
                                className='rounded-full bg-red-500 hover:bg-red-200 text-center align-middle cursor-pointer px-7 py-4 text-white text-lg font-semibold'
                            >
                                See our plans
                            </a>

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
