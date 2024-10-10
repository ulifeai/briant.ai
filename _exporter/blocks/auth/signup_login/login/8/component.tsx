import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface button {
  title: string
  variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  image?: {
    src : string
    alt: string 
  }
}

interface image {
  src : string
  alt: string 
}


interface Loginprops{
  logo: image
  description: string
  signup_description: string
  signup_link_src: string
  title: string
  placeholders: string[]
  signuptext: string
  button: button
  buttons: button[]
  imageside: image
}

const LoginPage  = ({
  logo, 
  description, 
  signup_description,
  signup_link_src,
  title,
  button,
  placeholders,
  buttons,
  imageside
}: Loginprops) => {
  return (
    <div className=' h-screen'>

        <div className='flex'>

            {/* ---------------------- left side ---------------------- */}
      
            <div className='w-full sm:w-1/2 px-[5%]'>
                <div className='flex flex-col h-full'>

                    {/* ---------- Navbar ------------------- */}
                    <div className='flex justify-start items-center h-16'>
                        <div className=''>
                        <Image 
                            width={63} 
                            height={27} 
                            src={logo.src}
                            alt={logo.alt}
                        />
                        </div>
                    </div>

                    {/* ------------- Login Blog ----------------- */}
                    <div className='sm:mx-24 flex flex-col justify-center h-full'>
                    <div className='max-w-[480px]'>
                        <div className='flex flex-col gap-6'>
                      <h1 className='text-4xl sm:text-5xl text-black text-center font-bold '>
                        {title}  // title
                      </h1>

                      <p className='text-lg text-center'>
                        {description} //description
                      </p>

                      <form action="" className=' flex flex-col gap-9 '>

                        <div className='flex flex-col gap-4'>

                          { placeholders.map((item) => (
                            <div>
                            <Input 
                                className='border border-black min-h-11 px-3 py-2 rounded-none'
                                placeholder='Email'
                            />
                            </div>
                            ))}

                            <div className='w-full'>
                              <Button 
                                  className='rounded-none w-full px-3 py-6 text-base'
                                  variant={button.variant}
                                > 
                                  {button.title} //title
                                </Button>
                            </div>
                            
                        </div>

                        <hr className='border-black'/>


                        <div className='flex flex-col gap-4'>

                        { buttons.map((button) => (
                              <Button 
                                  className='text-black text-lg rounded-none w-auto px-3 py-6 bg-white border border-black flex gap-4'
                                  variant={button.variant}
                              >       
                                    <Image 
                                        src={!button.image?"":button.image.src} 
                                        alt={!button.image?"":button.image.alt} 
                                        width={17.28} 
                                        height={17.28}
                                    />
                                        {button.title} // title
                                    </Button>
                              ))}
                        <div className='flex gap-2 mx-auto'>
                            <span className='hidden sm:block'>
                                {signup_description}
                            </span>
                            <Link href={signup_link_src} className='underline decoration-solid'>
                                Sign up
                            </Link>
                        </div>
                        </div>
                      </form>
                      </div>
                    </div>
                </div>

                    
                </div>
            </div>

            {/* ---------------------- right side -------------------- */}

            <div className='w-1/2 bg-[#eeeeee] h-screen hidden sm:block'>
                <div className='h-full w-full'>
                    <Image
                         src={imageside.src}
                         width={100}
                         height={100}
                         alt={imageside.alt}
                         className='w-full h-full object-cover'
                    />
                </div>
            </div>
      </div>

    </div>
  )
}

export default LoginPage 
