import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectGroup, SelectItem, SelectLabel } from '@radix-ui/react-select'
import { Eye, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'



interface button {
    children: string
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
}

interface inputs {
    label: string
    placeholder: string
    class?: string
}

interface pricing{
    title: string
    price: string
    description: string
    image: {
        src: string
        alt: string
    }
    class?: string
}


interface textareas {
    label: string
    placeholder: string
    class?: string
}

interface selects {
    label: string
    placeholder: string
    choices: string[]
    class?: string
}

// interface pricing {
//     label: string
//     placeholder: string
//     plans: plan[]
// }

interface multiplechoices {
    question: string
    buttons: button[]
    class?: string
}


interface radioblock {
    title: string
    description: string
    radiochoices: string[]
    class?: string
}

interface checkbox {
    title: string
    description: string
    rcheckboxchoices: string[]
    class?: string
}

interface switchChoices{
    title: string
    description: string
    choices: string[]
    class?: string
}

interface FormPageProps {
    heading: string
    paragraphtext: string
    profil?: {
        src: string
        alt: string
        class?: string
    }
    uploadbuttontext: string,
    inputs?: inputs[]
    textareas?: textareas[]
    selects?: selects[]
    thereispassword?: boolean
    pricings?: pricing[]
    multiplechoices?: multiplechoices[]
    radioblocks?: radioblock[]
    switchChoices?: switchChoices[]
    checkboxes?: checkbox[]
    classNameContainer?: string
}




const FormPage = ({
    heading,
    paragraphtext,
    profil,
    uploadbuttontext,
    inputs,
    textareas,
    selects,
    thereispassword,
    multiplechoices,
    radioblocks,
    switchChoices,
    pricings,
    checkboxes,
    classNameContainer
}:FormPageProps) => {
  return (
    <div className={`flex flex-col gap-4 max-w-[560px] ${classNameContainer}`}>

      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>{heading}</h2>
        <div className='text-base'>
            {paragraphtext}
        </div>
      </div>


      {/* ------------------------ profile section ------------------------- */}

     <form action="" className='flex flex-col gap-4 '>

        { profil && (
            <div className={`flex flex-col gap-2  ${profil.class}`}>

                <label>Photo</label>
                <div className='flex flex-row gap-8 items-center'>
                    <Image 
                        width={80} 
                        height={80} 
                        src="/images/imageform.svg" 
                        alt=''
                        className='rounded-full'
                    />
                    <Button className='rounded-none border-black px-5 py-2 text-base' variant="outline"> 
                        {uploadbuttontext}
                    </Button>
                </div>
            </div>
        )}



        {/* <div className='flex flex-col gap-2 max-w-[560px]'>
            <label>User name</label>
            <Input className='border border-black rounded-none px-3 py-2 min-h-11'/>
        </div>

        <div className='flex flex-col gap-2 max-w-[560px]'>
            <label>Website</label>
            <div className='flex '>
            <div className='border border-black border-e-0 px-2 flex items-center min-h-11'>http://</div>
            <Input  
                className='border border-black rounded-none px-3 py-2 min-h-11 text-base'
                placeholder='www.relume.io'
            />
            </div>
        </div>

        <div className='flex flex-col gap-2 max-w-[560px]'>
            <label>Email address</label>
            <div className='flex flex-row border border-black items-center px-3'>
                <div>
                    <Mail className='me-3'/>
                </div>
                <Input
                    placeholder='hello@relume.io'  
                    className='border-none rounded-none px-3 py-2 min-h-11 text-base' 
                />
            </div>
            
        </div>

        <div className='flex flex-col gap-2 max-w-[560px]'>
            <label>About</label>
            <Textarea  
                className='border border-black rounded-none px-3 p-3 min-h-48 text-base'
                placeholder='Type your message...'
            />
        </div> */}



        {/* ------------------------ inputs section ------------------------- */}

        {inputs?.map((input) => (
            <div className={`flex flex-col gap-2  ${input.class}`}>

                <label>{input.label}</label>
                <Input 
                    className='border border-black rounded-none px-3 py-2 min-h-11'
                    placeholder={input.placeholder}
                />
            </div>
        ))}


        {/* ------------------------ textareas section ------------------------- */}

        { textareas?.map((textarea) => (
         <div className={`flex flex-col gap-2 ${textarea.class}`}>
            <label>{textarea.label}</label>
            <Textarea  
                className='border border-black rounded-none px-3 p-3 min-h-48 text-base'
                placeholder={textarea.placeholder}
            />
         </div>           
        ))}

        {/* ------------------------ password section ------------------------- */}

        { thereispassword && (
        <div className='flex flex-col gap-2'>
            <label>Password</label>
            <div className='flex flex-row border border-black items-center px-3'>
                <Input  
                    className='border-none rounded-none px-3 py-2 min-h-11 text-base' 
                    placeholder='Curren password'
                />
                <div>
                    <Eye className='ms-3'/>
                </div>
            </div>
            <div className='flex flex-row border border-black items-center px-3'>
                <Input  
                    className='border-none rounded-none px-3 py-2 min-h-11 text-base ' 
                    placeholder='New password'
                />
                <div>
                    <Eye className='ms-3'/>
                </div>
            </div>
        </div>
        )}

        {/* ------------------------ selects inputs section ------------------------- */}

        { selects?.map((item) => (
        <div className={`flex flex-col gap-2  ${item.class}`}>

        <label>{item.label}</label>
            <Select >
            <SelectTrigger className="rounded-none border border-black">
                <SelectValue placeholder="Select one..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>{item.label}</SelectLabel>
                {item.choices.map((choice) => (
                    <SelectItem value="apple">{choice}</SelectItem>
                ))}
                </SelectGroup>
            </SelectContent>
            </Select>
        </div>
        ))}

        {/* ------------------------ multiple choices section ------------------------- */}

        { multiplechoices?.map((item) => (
            <div className={`flex flex-col gap-2  ${item.class}`}>
             <label>{item.question}</label>
            <div>
                {item.buttons.map((button) => (
                    <Button className='rounded-none border-black px-5 py-2 text-base' variant={button.variant}>
                        {button.children}
                    </Button>
                ))}
            </div>
         </div>
        ))}

        {/* ------------------------ Radios section ------------------------- */}

        {radioblocks?.map((item) => (

            <div className={`flex flex-col gap-2  ${item.class}`}>

                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-base'> {item.description}</p>
                <RadioGroup defaultValue="comfortable">
                    {item.radiochoices.map((radiochoice) => (
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">{radiochoice}</Label>
                    </div>
                    ))}
                </RadioGroup>
            </div>
        ))}

        {/* ------------------------ checkboxes section ------------------------- */}

        {checkboxes?.map((item) => (
            <div className={`flex flex-col gap-2  ${item.class}`}>

                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-base'>{item.description}</p>
                <div className='flex flex-col gap-2'>
                    {item.rcheckboxchoices.map((choice) => (
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms2"  />
                        <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {choice}
                        </label>
                    </div>
                    ))}
                </div>
            </div>
        ))}

        {/* ------------------------ switch section ------------------------- */}

        {switchChoices?.map((item) => (
            <div className={`flex flex-col gap-2  ${item.class}`}>

                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-base'>{item.description}</p>
                <div className='flex flex-col gap-2'>
                    {item.choices.map((choice) => (
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="airplane-mode">{choice}</Label>
                        <Switch id="airplane-mode" />
                    </div>
                    ))}
                </div>
            </div>
        ))}
        
        {/* ------------------------ pricing section ------------------------- */}

        { pricings?.map((item) => (
        <div className={`flex  gap-4 items-center relative border border-black py-6 ps-24 pe-16 ${item.class}`}>
            <div className='p-3 bg-[#EEEEEE] absolute left-5'>
                <Image 
                    src={item.image.src}
                    alt={item.image.alt}
                    height={32}
                    width={32}
                />
            </div>
            <RadioGroup className='flex flex-col gap-2 text-lg'>
                <div><strong>{item.title}</strong>{item.price}</div>
                <div>{item.description}</div>
            <RadioGroupItem value="compact" id="r3" className='absolute right-5 top-5'/>
            </RadioGroup>
            
        </div>
        ))}
        
        {/* ------------------------ buttons section ------------------------- */}

        <div className='flex justify-end flex-row gap-2  pt-4'>
            <Button className='rounded-none border-black px-5 py-2 text-base' variant="outline">Cancel</Button>
            <Button className='rounded-none px-5 py-2 text-base'>Save</Button>
        </div>

      </form>
    </div>
  )
}

export default FormPage
