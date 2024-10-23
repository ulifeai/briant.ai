import Text from '@/components/ui/base/text'
import { Mouse } from 'lucide-react'
import Image from 'next/image'
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

        <section className='py-20 relative overflow-hidden '>

            <div className='px-4 mx-auto w-full '>

                {/* text box */}
                <div className='text-center max-w-3xl mx-auto'>

                    <span className='bg-[#fbe7e7] py-2 px-4  text-[#ee4b4b] rounded-full'>
                        {tag}
                    </span>

                    <Text 
                        className='text-gray-900 font-bold text-5xl mb-24 text-center mt-4 '
                        as='h1'
                    >
                        {title}
                    </Text>
                </div>

                {/* features boxes */}

                <div className='max-w-7xl mx-auto '>

                    <div className='flex flex-wrap items-center mx-4 lg:flex-nowrap lg:items-center justify-center'>

                        {/* fisrt feature box*/}

                        <div className='px-4 w-full mb-16'>

                            <div className='max-w-sm mx-auto '>
                                <div className='pb-12 border-b border-gray-100 flex items-center mb-12 '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#abd0ea] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl text-center'>Simple & Uniuqe</span>
                                        <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                    </div>
                                </div>

                                <div className='pb-12 border-b border-gray-100 flex items-center mb-12 '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#fbe7e7] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl r'>Layered & well Documentation</span>
                                        <span className='text-sm text-[#768b8d] '>Created by our talended designer</span>
                                    </div>
                                </div>

                                <div className='pb-12 border-b border-gray-100 flex items-center  '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#c4c5d0] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl text-center'>World Class UI Design</span>
                                        <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* image box */}

                        <div className='px-4 w-full mb-16 mx-auto '>

                            <img 
                                src="/images/image.svg" 
                                alt="" 
                                className='h-80 mx-auto align-middle'
                            />

                        </div>

                        {/* second feature box*/}

                        <div className='px-4 w-full mb-16'>

                            <div className='max-w-sm mx-auto '>
                                <div className='pb-12 border-b border-gray-100 flex items-center mb-12 '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#ffb3b3] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl text-center'>Mobile Friendly</span>
                                        <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                    </div>
                                </div>

                                <div className='pb-12 border-b border-gray-100 flex items-center mb-12 '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#ffe9b0] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl text-center'>Complete Style Guide</span>
                                        <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                    </div>
                                </div>

                                <div className='pb-12 border-b border-gray-100 flex items-center mb-12 '>
                                    <div className='w-[60px] h-[60px] rounded-full bg-[#a8f2d7] flex items-center justify-center me-6'>
                                        <Mouse width={24} height={24} className='align-middle' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='font-semibold text-2xl text-center'>Unlimited Support</span>
                                        <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                    </div>
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
