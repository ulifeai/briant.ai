import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  type Props = {
    title: string,
    content: string,
    classNameTitle: string,
    classItem: string
  }
  
  export function AccordionDemo({title, content, classNameTitle, classItem}:Props) {
    return (
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" className={classItem}>
          <AccordionTrigger className={classNameTitle}>{title}</AccordionTrigger>
          <AccordionContent >
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  