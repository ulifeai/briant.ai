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
  title: string
  labels: string[]
  button: button
  buttons: button[]
  rightsideparagraph: string
}

const SignUpPage = ({
  logo, 
  description, 
  footer_description,
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

            </div>
          </div>

        {/* ------------- Login Blog ----------------- */}

        <div>
            <div 
              className='max-w-[30vw] flex flex-col gap-6 mx-auto'
            >

              <h1 className='text-4xl sm:text-5xl text-black text-center font-bold '>
                {title}
              </h1>

              <p className='text-base text-center'>
                {description}
              </p>

              
              <div>
                <div className='text-base text-black mb-2' >
                  {labels[0]} 
                </div>

                <Input className='border border-black min-h-11 px-3 py-2 rounded-none'/>

              </div>

              <div>
                <div 
                  className='text-base text-black mb-2'
                >
                  {labels[1]} 
                </div>
                <Input className='border border-black min-h-11 px-3 py-2 rounded-none'/>
              </div>
              <div>
                <div 
                  className='text-base text-black mb-2'
                >
                  {labels[2]} 
                </div>
                <Input className='border border-black min-h-11 px-3 py-2 rounded-none'/>
              </div>
              <div className='flex flex-col gap-4'>
              <Button 
                  className='rounded-none w-full px-3 py-6 text-base'
                  variant={button.variant}
                > 
                    {button.title}
              </Button>

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

export default SignUpPage
