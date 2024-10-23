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
                className='absolute end-0 top-0 align-middle box-border overflow-clip' 
            />

            <div className='px-3'>

                <div className='mx-auto max-w-[32rem] box-border lg:max-w-[1280px]'>

                    <div className='mb-24 items-center box-border mx-3 lg:flex lg:flex-row-reverse'>

                        <div className='mb-12 box-border lg:w-1/2'>

                            <div className=''>

                                <Text className='mb-8 font-bold text-5xl lg:text-6xl' as='h2'>
                                    {title}
                                </Text>

                                <Text className='text-lg font-normal text-[#768b8d] mb-20' as='p'>
                                    {description}
                                </Text>

                                <Text className='text-lg font-semibold '>
                                    Our platform offers the modern enterprise full control of how date can
                                    be access and used with industry leading software solutions for identity,
                                    activation, and date collaboration
                                </Text>

                                <div className='rounded-xl bg-white p-4 mt-10  shadow-sm'>
                                <div className='flex items-center gap-4'>
                                    <img 
                                        src="/images/image.svg" 
                                        alt=""
                                        className='w-[40px] align-middle overflow-clip rounded-full' 
                                    />
                                    <div className='ms-2 flex flex-col'>
                                        <span className='font-semibold text-base'>Jovanca Nirmala</span>
                                        <span className='text-[#768b8d] text-xm '>CTO at Saturn</span>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>

                        <div className='border-box lg:w-1/2'>

                            <img 
                                src="/images/image.svg" 
                                alt="feature 4"
                                className='w-full block align-middle lg:me-40 lg:w-[28rem]' 
                            />

                        </div>
                    </div>


                </div>

            </div>
      </section>
    </div>

  )
}

export default FeaturesBlock
