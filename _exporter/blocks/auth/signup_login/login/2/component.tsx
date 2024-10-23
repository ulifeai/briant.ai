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
  footer_description: string
  signup_link_src: string
  title: string
  labels: string[]
  signup_description: string
  button: button
  buttons: button[]
  rightsideparagraph: string
}

const LoginPage = ({
  logo, 
  description, 
  footer_description,
  signup_description,
  signup_link_src,
  title,
  button,
  buttons,
  labels,

}: Loginprops) => {
  return (
    <div className='px-[5%] h-screen'>

      <div className='flex flex-col gap-32 h-svh'>

        {/* ---------- Navbar ------------------- */}
          <div className='flex justify-between items-center h-16'>
            <div className=''>
              <Image 
                width={63} 
                height={27} 
                src={logo.src}
                alt={logo.alt}
              />
            </div>
            <div className='flex gap-2'>
              <span 
                className='hidden sm:block'
              >
               {signup_description}
              </span>
              <Link href={signup_link_src}
                className='underline decoration-solid'>
                  Sign up
              </Link>
            </div>
          </div>

        {/* ------------- Login Blog ----------------- */}

        <div>
            <div className='max-w-[480px] flex flex-col gap-6 mx-auto'>

              <h1 className='text-4xl sm:text-5xl text-black text-center font-bold '>
                {title}
              </h1>

              <p className='text-lg text-center'>
                {description}
              </p>

              <form action="" className=' flex flex-col gap-9 '>

                <div className='flex flex-col gap-4'>
                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder={labels[0]}
                    />

                    </div>

                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder={labels[1]}
                        />
                    </div>

                    <div className='w-full'>
                      <Button 
                        className='rounded-none w-full px-3 py-6 text-base'
                        variant={button.variant}
                      > 
                          {button.title}
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
                              {button.title}
                        </Button>
                    ))}
                </div>
              </form>
            </div>
        </div>

        {/* ---------- footer ----------------- */}
        <div className='text-center text-sm h-16 fixed bottom-0 right-0 left-0'>
          {footer_description}
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage 
