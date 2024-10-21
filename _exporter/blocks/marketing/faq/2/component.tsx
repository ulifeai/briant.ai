import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface FAQ {
  title: string
  answer: string
}

interface FAQBlockProps {
  title: string
  description: string
  cta_title: string
  cta_description: string
  questions: FAQ[]
  button: {
    title: string
    variant: string
    size?: string
  }
}

export default function FAQBlock({
  title,
  description,
  cta_title,
  cta_description,
  questions,
  button,
}: FAQBlockProps) {
  return (
    <div className="flex flex-row container justify-center items-center hover:border border-primary">
      <div className="px-5 py-5 w-full">
        <div className="py-16 sm:py-28 px-[10%] flex flex-col gap-12 mx-auto">
          <div className="flex flex-col text-center items-center gap-4">
            <h1
              className="text-4xl font-bold sm:text-5xl text-start py-2"
              style={{ fontFamily: "var(--header-font)" }}
            >
              {title}
            </h1>
            <p
              className="text-lg text-start py-2"
              style={{ fontFamily: "var(--page-font)" }}
            >
              {description}
            </p>
          </div>
            <div className="border-t border-black mx-auto w-[40rem]">
              <Accordion type="single" collapsible>
                {questions.map((question, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="w-full border-b border-black py-2 sm:py-3"
                  >
                    <AccordionTrigger className="flex items-center justify-between gap-2 py-4 text-lg font-bold">
                      {question.title}
                    </AccordionTrigger>
                    <AccordionContent className="overflow-hidden text-sm">
                      {question.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h4 className="text-2xl sm:text-3xl text-start font-semibold py-2">
              {cta_title}
            </h4>
            <p
              className="text-lg text-start py-2"
              style={{ fontFamily: "var(--page-font)" }}
            >
              {cta_description}
            </p>
         
            <Button
            variant={button.variant as "default" | "outline"}
            size={button.size as "default" | "sm" | "lg"}
            className="whitespace-nowrap h-10 mx-2 w-32 px-4 py-2"
            style={{ borderRadius: "var(--button-radius)" }}
            >
            {button.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
