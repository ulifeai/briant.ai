import { Button } from '@/components/ui/base/button'
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
      
        <section className='pt-28 pb-36 bg-white overflow-hidden relative'>

            <div className='flex flex-wrap '>

                {/* Image box */}
                
                <div className='p-8 w-full  md:w-1/2'>
                    <img 
                        src="/7.jpg" 
                        alt="image"
                        className='w-full h-auto' 
                    />
                </div>

                {/* features box */}

                <div className='p-8 md:w-1/2'>
                    <div className=''>
                        <div className='flex flex-wrap'>

                            <div className='p-4 w-auto '>
                                <div className='flex flex-wrap'>
                                    <div className='p-2'>
                                        <Mouse />
                                    </div>
                                    <div className='p-2 flex-1'>
                                        <Text 
                                            as='h3'
                                            className='text-lg '
                                        >
                                            Unlimited Team Members
                                        </Text>
                                    </div>
                                    <div className='p-2 w-full'>
                                        <div className='pb-8 border-b '>
                                            <Text
                                                as='p'
                                                className='text-gray-900 leading-relaxed font-medium '
                                            >
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='p-4 w-auto '>
                                <div className='flex flex-wrap'>
                                    <div className='p-2'>
                                        <Mouse />
                                    </div>
                                    <div className='p-2 flex-1'>
                                        <Text 
                                            as='h3'
                                            className='text-lg '
                                        >
                                           {title}
                                        </Text>
                                    </div>
                                    <div className='p-2 w-full'>
                                        <div className='pb-8 border-b '>
                                            <Text
                                                as='p'
                                                className='text-gray-900 leading-relaxed font-medium '
                                            >
                                               {description}
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='p-4 w-auto '>
                                <div className='flex flex-wrap'>
                                    <div className='p-2'>
                                        <Mouse />
                                    </div>
                                    <div className='p-2 flex-1'>
                                        <Text 
                                            as='h3'
                                            className='text-lg '
                                        >
                                            Unlimited Team Members
                                        </Text>
                                    </div>
                                    <div className='p-2 w-full'>
                                        <div className='pb-8 border-b '>
                                            <Text
                                                as='p'
                                                className='text-gray-900 leading-relaxed font-medium '
                                            >
                                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
                                            </Text>
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
