
import { ArrowUpRight } from 'lucide-react'

import  Text from '@/components/ui/base/text'
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
      
      <div className='max-w-[28rem] mx-auto lg:max-w-[1280px]'>

        <div className='mb-[4rem] flex flex-wrap lg:flex-nowrap flex-col lg:flex-row lg:justify-between lg:items-center'>

            <div className='mb-[2rem] px-2'>
                <div className='max-w-md block'>
                    <span className='bg-[#fbe7e7] py-2 px-4  text-[#ee4b4b] rounded-full'>
                        {tag}
                    </span>

                    <Text as='h2' className='text-5xl font-bold mt-8 leading-relaxed md:text-7xl'>
                        {title}
                    </Text>
                </div>
            </div>

            <div className='shrink px-3'>
                <div className='max-w-[28rem] box-border'>
                    <Text className='text-lg' as='p'>
                        {description}
                    </Text>
                </div>
            </div>
        </div>

      </div>

      <div className='max-w-[28rem] mx-auto lg:max-w-[1280px]'>

        <div className='mb-12 w-full box-border px-3 flex flex-col sm:flex-row gap-4'>

            <div className='box-border mb-12'>
                <img 
                    src="/images/image.svg" 
                    alt="feature1"
                    className='mb-6 w-full block align-middle box-border'
                 />
                    <Text  className='text-2xl mb-6 box-border font-bold' as='h6'>
                        The heart of what makes we valuable
                    </Text>
                 <a 
                    href=""
                    className='inline-flex items-center rounded-full px-4 py-3 border border-[#EEF0F3] text-red-500'
                >
                   <span>Learn maore</span> 
                   <ArrowUpRight />
                </a>
            </div>

            <div className='box-border mb-12'>
                <img 
                    src="/images/image.svg" 
                    alt="feature1"
                    className='mb-6 w-full block align-middle box-border'
                 />
                    <Text  className='text-2xl mb-6 box-border font-bold' as='h6'>
                        The heart of what makes we valuable
                    </Text>
                 <a 
                    href=""
                    className='inline-flex items-center rounded-full px-4 py-3 border border-[#EEF0F3] text-red-500'
                >
                   <span>Learn maore</span> 
                   <ArrowUpRight />
                </a>
            </div>

            <div className='box-border mb-12'>
                <img 
                    src="/images/image.svg" 
                    alt="feature1"
                    className='mb-6 w-full block align-middle box-border'
                 />
                    <Text  className='text-2xl mb-6 box-border font-bold' as='h6'>
                        The heart of what makes we valuable
                    </Text>
                 <a 
                    href=""
                    className='inline-flex items-center rounded-full px-4 py-3 border border-[#EEF0F3] text-red-500'
                >
                   <span>Learn maore</span> 
                   <ArrowUpRight />
                </a>
            </div>

        </div>
      </div>
    
    </div>
  )
}

export default FeaturesBlock
