import { Text } from '@/components/ui/base/text'
import { ArrowBigUp, ArrowUp, Mouse } from 'lucide-react'
import React from 'react'




interface FeatureBlockProps {
    tag: string;
    title: string;
    description: string;
  
    buttons: {
      title: string;
      variant: string;
      size: string;
    }[];
    image: {
      image: string;
      alt: string;
    };
    form?: {
      description?: string;
      placeholder?: string;
    };
    feature_items?: {
      title: string;
      image: string;
      description: string;
    }[]
  }


const FeaturesBlock = ({

    tag,
    title,
    description,
    buttons,
    form,
    image,
    feature_items
} : FeatureBlockProps) => {
  return (
    
    <div className='box-border'>
      
        <section className='py-24 bg-indigo-600 overflow-hidden '>

            <div className='px-4 mx-auto'>

                <div className='flex flex-wrap '>

                    {/* first block */}

                    <div className='p-8 w-full md:w-1/2 lg:w-1/3'>
                        <div className='blog box-border'>
                            <Text 
                                as='h2'
                                className='text-white leading-tight font-bold text-6xl mb-7'
                            >
                                {title}
                            </Text>
                            <Text
                                as='p'
                                className='text-opacity-80 text-white '
                            >
                                {description}
                            </Text>
                        </div>
                    </div>

                    {/* second block */}

                    <div className='p-8 w-full md:w-1/2 lg:w-1/3'>

                        <div className='flex flex-wrap justify-center items-center'>

                            <div className='transition duration-1000 ease-in-out rounded-3xl overflow-hidden relative'>

                                <img 
                                    src={image?.image ?? "/7.jpg"} 
                                    alt="image" 
                                    className='w-full h-auto align-middle'
                                />

                                <div className='py-8 px-9 bg-opacity-30 bg-white absolute left-0 bottom-0 backdrop-blur-xl'>

                                    <Text
                                        as='p'
                                        className='text-white tracking-normal uppercase font-semibold py-[0.375rem] px-[0.875rem] bg-red-500 inline-block mb-3 rounded-full'
                                    >
                                        Live
                                    </Text>

                                    <Text
                                        as='h3'
                                        className='font-bold text-xl mb-3'
                                    >
                                        Give an amazing on-board experience of your product
                                    </Text>

                                    <Text
                                        as='p'
                                        className='text-gray-600 font-semibold text-sm '
                                    >
                                        4096 people are joining
                                    </Text>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* third block */}

                    <div className='px-8 w-full md:w-1/2 lg:w-1/3'>
                        <div className='flex flex-wrap h-full '>
                            <div className='self-end flex flex-wrap items-center'>

                                {feature_items?.map((item, index)=>(
                                    <>
                                    
                                        {/* first box */}
                                        <div className='p-10 w-full '>
                                            <div className='bg-indigo-600'>
                                                <Text
                                                    as='h3'
                                                    className='text-white font-bold text-2xl mb-5 leading-snug'
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    as='p'
                                                    className='text-opacity-70 leading-relaxed font-medium text-white'
                                                >
                                                    {item.description}
                                                </Text>
                                            </div>
                                        </div>

                                        {index != feature_items.length && (
                                            <div className='px-10 w-full bg-indigo-600'>
                                                <div className='bg-indigo-500 h-px '>

                                                </div>
                                            </div>
                                        )}
                                        
                                    </>
                                ))}

                               
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
