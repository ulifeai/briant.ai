import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  description: string[]
  footer_description: string
  signup_link_src: string
  title: string[]
  placeholders: string[]
  signup_description: string
  button: button
  buttons: button[]
  rightsideparagraph: string
}



import React from 'react'

const SignUpPage = ({
  logo, 
  description, 
  footer_description,
  signup_description,
  signup_link_src,
  title,
  button,
  buttons,
  placeholders,

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

      {/* ------------- Login and Sign Up Blog ----------------- */}
        <div className='w-full'>
        <div className='flex flex-col justify-center items-center'>
        <Tabs defaultValue="Sign Up" className="max-w-[40rem] flex flex-col gap-6">
            <TabsList className='flex justify-center '>
                <TabsTrigger value="Sign Up" className="rounded-none w-1/2 text-base px-6 py-3 ">Sign Up</TabsTrigger>
                <TabsTrigger value="Login" className="rounded-none w-1/2 text-base px-6 py-3 ">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="Sign Up" className='flex flex-col gap-6'>
                <h1 className='text-4xl sm:text-5xl text-black text-center font-bold '>
                 {title[0]}
                </h1>

                <p className='text-lg text-center'>
                  {description[0]}
                </p>

                <form action="" className=' flex flex-col gap-9 '>

                <div className='flex flex-col gap-4'>
                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder='Name'
                    />

                    </div>
                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder='Email'
                    />

                    </div>

                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder='Password'
                        />
                    </div>

                </div>


                <div className='flex flex-col gap-4'>
                  <Button 
                      className='rounded-none w-full px-3 py-6 text-base'
                    > 
                      Log in
                </Button>

                <Button 
                    className='text-black text-lg rounded-none w-auto px-3 py-6 bg-white border border-black flex gap-4'
                >
                    <Image src="/images/logo-google.svg" alt='' width={17.28} height={17.28}/>
                    Log in with Google 
                </Button>
                </div>
                
                </form>

            </TabsContent>
            <TabsContent value="Login" className='flex flex-col gap-6 '>

                <h1 className='text-4xl sm:text-5xl text-black text-center font-bold '>
                    {title[1]}
                </h1>

                <p className='text-lg text-center'>
                  {description[1]}
                </p>

                <form action="" className=' flex flex-col gap-9 '>

                <div className='flex flex-col gap-4'>
                    <div>

                    </div>
                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder='Email'
                    />

                    </div>

                    <div>
                    <Input 
                        className='border border-black min-h-11 px-3 py-2 rounded-none'
                        placeholder='Password'
                        />
                    </div>

                </div>


                <div className='flex flex-col gap-4'>
                <Button 
                    className='rounded-none w-full px-3 py-6 text-base'
                > 
                        Log in
                </Button>

                <Button 
                    className='text-black text-lg rounded-none w-auto px-3 py-6 bg-white border border-black flex gap-4'
                >
                    <Image src="/images/logo-google.svg" alt='' width={17.28} height={17.28}/>
                    Log in with Google 
                </Button>
                </div>
                
                </form>

            </TabsContent>
        </Tabs>
        </div>
        </div>

      {/* ---------- footer ----------------- */}
      <div className='text-center text-sm h-16 fixed bottom-0 right-0 left-0'>
      © 2022 Relume
      </div>
      
    </div>
  </div>
  )
}

export default SignUpPage
