import BlockCustomizer from "@/components/custom/BlockCustomizer";
import { ThemeCustomizer } from "@/components/custom/theme-customizer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { File, GripHorizontal } from "lucide-react";

const layoutSections = [
  {
    title: 'Header navigations',
    description: 'Provides links to different sections of the landing page and other important pages like About, Contact, and Pricing.'
  },
  {
    title: 'Header sections',
    description: 'Introduces the AI app creation service with a compelling headline and subheadline, along with a brief description of the service.'
  },
  {
    title: 'Features sections',
    description: 'Highlights the key features of the AI app creation service, explaining how it can benefit agencies.'
  },
  {
    title: 'CTA sections',
    description: 'Encourages visitors to take a specific action, such as signing up for a demo or starting a free trial.'
  },
  {
    title: 'Metrics sections',
    description: 'Displays important metrics and statistics that demonstrate the effectiveness and reliability of the AI app creation service.'
  },
  {
    title: 'Testimonial sections',
    description: 'Showcases positive feedback and reviews from agencies that have successfully used the AI app creation service.'
  },
  {
    title: 'Social proof sections',
    description: 'Includes logos or names of well-known agencies or companies that use the AI app creation service to build credibility.'
  },
  {
    title: 'FAQ sections',
    description: 'Provides answers to common questions that potential customers might have about the AI app creation service.'
  },
  {
    title: 'Footers',
    description: 'Contains additional navigation links, contact information, social media links, and other relevant details.'
  }
]

type RightNavProps = {
  sideContent: any
}


export default function RightNav({sideContent}: RightNavProps) {
    return <div className=" bg-muted w-[17vw] border-r border-border bg-white absolute flex flex-col right-0 top-[3.5rem] h-full">
      
    <div className="p-4 ">
    {sideContent ? <div>
          <BlockCustomizer  componentType={sideContent.type} id={sideContent.id} onChange={(a: any)=>{console.log(a)}}/>  
      </div> :  <ThemeCustomizer></ThemeCustomizer>}
    </div>
    {/* <ScrollArea className="flex-grow">
      <div className="pt-4 space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-bold px-4 text-muted-foreground flex justify-start">
            <div>
            Home page sections

            </div>
          </h3>
          <Accordion type="single" className="my-0 py-0" collapsible>

            {layoutSections?.map((layoutSection, index)=>(
              <AccordionItem key={index} className="border-b  px-4 border-gray-900 py-0 my-0" value={"item-"+index}>
                <AccordionTrigger className="py-2 hover:bg-transparent">
                  <div className="space-y-1">
                    <div className="text-xs py-0 hover:bg-transparent hover:text-muted flex pt-4 font-light w-full justify-start">
                    <GripHorizontal className="mr-2 h-3 w-3 text-xs" />
                    <div>
                    {layoutSection.title}
                    </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs px-4">
                  {layoutSection.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
         
          <div className="space-y-1">
            <Button variant="ghost" className="text-xs font-light w-full justify-start">
            <LayoutIcon className="mr-2 h-3 w-3" />
              Contact
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="text-xs font-light w-full justify-start">
            <LayoutIcon className="mr-2 h-3 w-3" />
              About
            </Button>
          </div>
        </div>
       
       
      </div>
    </ScrollArea> */}
  </div>
}