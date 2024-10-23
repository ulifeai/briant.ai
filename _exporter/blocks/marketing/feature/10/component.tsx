import { Text } from '@/components/ui/base/text'
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
    <div>

        <section className='relative pb-40 pt-12 box-border overflow-hidden '>

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

            <div className='relative max-w-[480px] lg:max-w-[1280px]  mx-auto'>

                <div className=' box-border'>
                    
                    <div className='flex flex-col-reverse items-center lg:flex-row lg:justify-between'>


                        {/* features block */}

                        <div className='relative w-full box-border px-3 '>
                            {/*  image */}
                            <img 
                                src="/2.jpg" 
                                alt="" 
                                className='max-w-md mx-auto block align-middle rounded-xl '
                            />
                        

                            {/* feature */}

                            <div className='rounded-xl bg-white ps-6 pe-20 py-6 absolute end-0 bottom-0 shadow-md'>

                                <div className='mb-6 flex items-center box-border bg-white'>
                                    <div className='w-[50px] h-[50px] bg-[#e6fdf5] rounded-full bg-pink flex items-center justify-center'>
                                        <Mouse />
                                    </div>
                                    <div className='ms-4 box-border bg-white flex flex-col'>
                                        <span className='font-semibold text-sm bg-white'>Sign Up for Free</span>
                                        <span className='text-[#768b8d] text-xm '>
                                            We are not tolerant about taste
                                        </span>
                                    </div>
                                </div>

                                <div className='mb-6 flex items-center box-border bg-white'>
                                    <div className='w-[50px] h-[50px] bg-[#ffb3b3] rounded-full bg-pink flex items-center justify-center'>
                                        <Mouse />
                                    </div>
                                    <div className='ms-4 box-border bg-white flex flex-col'>
                                        <span className='font-semibold text-sm bg-white'>Sign Up for Free</span>
                                        <span className='text-[#768b8d] text-xm '>
                                            We are not tolerant about taste
                                        </span>
                                    </div>
                                </div>

                                <div className='mb-6 flex items-center box-border bg-white'>
                                    <div className='w-[50px] h-[50px] bg-[#c6eeff] rounded-full bg-pink flex items-center justify-center'>
                                        <Mouse />
                                    </div>
                                    <div className='ms-4 box-border bg-white flex flex-col'>
                                        <span className='font-semibold text-sm bg-white'>Sign Up for Free</span>
                                        <span className='text-[#768b8d] text-xm '>
                                            We are not tolerant about taste
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* profile*/}

                            <div className='rounded-xl bg-white p-4 mt-10 absolute start-0 top-0 shadow-sm'>
                                <div className='flex items-center gap-4'>
                                    <img 
                                        src="/7.jpg" 
                                        alt=""
                                        className='w-[40px] align-middle overflow-clip rounded-full' 
                                    />
                                    <div className='ms-2 flex flex-col'>
                                        <span className='font-semibold text-xm ' >Received $450.00</span>
                                        <span className='text-[#768b8d] text-xm '>From Angelilce Neisa!</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Text block */}

                        <div className='mb-12 w-full px-3 lg:w-1/2'>

                            <div className='max-w-xl box-border lg:w-full'>

                                <span className='bg-[#fbe7e7] text-red-500 rounded-full py-2 px-4'>
                                    {tag}
                                </span>

                                <h2 className='block text-5xl font-bold text-black mt-8  lg:text-6xl mb-6'>
                                    {title}
                                </h2>

                                <Text className=' mb-8 font-semibold' as='h6'>
                                    {description}
                                </Text>

                                <Text className='text-lg  text-[#768b8d]' as='p'>
                                    Payment with us is easy and straight forward, you can pay in dollars, 
                                    euros and bitcoin or ether tokens.We accept 
                                    all major currencies and cryptocurrencies
                                </Text>
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
