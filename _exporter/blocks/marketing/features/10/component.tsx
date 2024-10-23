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
      
        <section className='py-20 bg-white overflow-hidden '>
            <div className='px-4 mx-auto w-full '>
                <div className='flex flex-wrap m-[-2rem] items-center '>

                    <div className='p-8 w-full '>
                        <div className=' sm:flex'>

                            <div className='flex flex-wrap items-center p-4'>

                                {/* image */}

                                <div className='p-3 '>
                                    <div className='bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img 
                                            src="/images/chat.svg" 
                                            alt=""
                                            className='' 
                                        />
                                    </div>
                                </div>

                                {/* text */}

                                <div className=' p-3 flex-1 '>
                                    <Text 
                                        as='h3'
                                        className='font-semibold text-xl ' 
                                    >
                                        {title}
                                    </Text>
                                </div>
                            </div>


                            <div className='flex flex-wrap items-center p-4'>

                                {/* image */}

                                <div className='p-3 '>
                                    <div className='bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img 
                                            src="/images/layers.svg" 
                                            alt=""
                                            className='' 
                                        />
                                    </div>
                                </div>

                                {/* text */}

                                <div className=' p-3 flex-1 '>
                                    <Text 
                                        as='h3'
                                        className='font-semibold text-xl ' 
                                    >
                                        {description}
                                    </Text>
                                </div>
                            </div>


                            <div className='flex flex-wrap items-center p-4'>

                                {/* image */}

                                <div className='p-3 '>
                                    <div className='bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center'>
                                        <img 
                                            src="/images/replace.svg" 
                                            alt=""
                                            className='' 
                                        />
                                    </div>
                                </div>

                                {/* text */}

                                <div className=' p-3 flex-1 '>
                                    <Text 
                                        as='h3'
                                        className='font-semibold text-xl ' 
                                    >
                                        Unlimited support from the expert members
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
