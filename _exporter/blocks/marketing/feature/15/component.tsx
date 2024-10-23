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

                    <div className='mb-24 items-center box-border mx-3 lg:flex lg:flex-row'>

                        <div className='mb-12 box-border lg:w-1/2 leading-relaxed'>

                            <div className='max-w-md'>

                                <Text className='mb-8 font-bold text-5xl lg:text-6xl' as='h2'>
                                    {title}
                                </Text>


                                <Text className='text-2xl font-semibold text-[#768b8d] mb-10'>
                                    {description}
                                </Text>

                                <div className='shadow-xl pe-6 ps-5 py-5 bg-white rounded-3xl inline-block lg:inline-flex'>

                                    <div className='me-6'>
                                        <div className='flex -space-x-6'>
                                            <img 
                                                src="/7.jpg" 
                                                alt=""
                                                className='inline-block w-16 rounded-full border-4 border-white transition duration-300 hover:translate-y-2 ' 
                                            />
                                                                                        <img 
                                                src="/7.jpg" 
                                                alt=""
                                                className='inline-block w-16 rounded-full border-4 border-white transition duration-300 hover:translate-y-2 ' 
                                            />
                                                                                        <img 
                                                src="/7.jpg" 
                                                alt=""
                                                className='inline-block w-16 rounded-full border-4 border-white transition duration-300 hover:translate-y-2 ' 
                                            />
                                        </div>
                                    </div>


                                    <div className='ms-2 flex flex-col'>
                                        <span className='font-semibold text-2xl '>1.289</span>
                                        <span className='text-[#768b8d] text-xm '>Our Remote Team</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Image box */}

                        <div className='border-box lg:w-1/2'>

                            <div className='w-full h-full relative'>

                                <img 
                                    src="/7.jpg" 
                                    alt="feature 4"
                                    className='w-full block align-middle lg:ms-40 lg:w-[28rem] rounded-3xl' 
                                />

                                <div className='p-4 absolute left-0 bottom-0 lg:left-40'>
                                    <div className='p-5 bg-white rounded-lg inline-block '>
                                        <span className='font-semibold text-2xl block mb-5 '>
                                            $60,0000
                                        </span>
                                        <span className='text-grey-500 text-xs block mb-2'>
                                            Transaction per month
                                        </span>

                                        <div className='bg-green-100 p-1 rounded-md items-center inline-flex '>
                                            <ArrowUp color='green'/>
                                            <span className='text-green-900 ms-1 font-semibold text-xs'>
                                                2.5%
                                            </span>
                                        </div>
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
