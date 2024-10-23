import Text from '@/components/ui/base/text'
import { Mouse } from 'lucide-react'
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
      
      <section className='relative py-12 overflow-hidden block'>

            <img 
                src="/images/star-left.png" 
                alt=""
                className='absolute start-0 left-0 bottom-0 box-border overflow-clip' 
            />

            <img 
                src="/images/blue-light-right.png" 
                alt=""
                className='absolute end-0 top-0 align-middle box-border overflow-clip ' 
            />

            <div className='px-3'>

                <div className='mx-auto max-w-[32rem] box-border lg:max-w-[1280px]'>

                    <div className='mb-24 items-center box-border mx-3 lg:flex'>

                        <div className='mb-12 box-border lg:w-1/2'>

                            <div className=''>

                                <Text className='mb-8 font-bold text-6xl md:text-7xl' as='h1'>
                                    {title}
                                </Text>

                                <Text className='text-[1.95em] font-semibold text-gray-500 leading-normal' as='p'>
                                    {description}
                                </Text>
                            </div>

                        </div>

                        <div className='border-box lg:w-1/2'>

                            <img 
                                src="/images/image.svg" 
                                alt="feature 4"
                                className='w-full block align-middle lg:ms-40 lg:w-[28rem] rounded-3xl' 
                            />

                        </div>
                    </div>

                    <div>

                        <div className='pb-12 mb-12 relative box-border lg:flex lg:justify-between'>

                            <div className='absolute h-full border-e end-0 top-0 hidden'></div>
                            <div className='absolute h-full border-e end-0 top-0 hidden'></div>

                            <div className='relative p-12 flex flex-col gap-4'>
                                <div className='w-[60px] h-[60px] rounded-full bg-[#e6fdf5] flex items-center justify-center mx-auto'>
                                    <Mouse width={24} height={24} className='align-middle' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold text-2xl text-center'>Simple & Uniuqe</span>
                                    <span className='text-sm text-[#768b8d] text-center'>Created by our talended designer</span>
                                </div>
                            </div>

                            <div className='relative p-12 flex flex-col gap-4'>
                                <div className='w-[60px] h-[60px] rounded-full bg-[#ffb3b3] flex items-center justify-center mx-auto'>
                                    <Mouse width={24} height={24} className='align-middle' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold text-2xl text-center'>Well Documented</span>
                                    <span className='text-sm text-[#768b8d] text-center'>The best layer organization</span>
                                </div>
                            </div>

                            <div className='relative p-12 flex flex-col gap-4'>
                                <div className='w-[60px] h-[60px] rounded-full bg-[#c6eeff] flex items-center justify-center mx-auto'>
                                    <Mouse width={24} height={24} className='align-middle' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='font-semibold text-2xl text-center'>World Class UI Design</span>
                                    <span className='text-sm text-[#768b8d] text-center'>We are not tolerant about taste</span>
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
