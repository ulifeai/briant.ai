"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  description: string;
  buttons: {
    title: string;
    variant: string;
    size: string;
    href: string;
  }[];
  images: {
    src: string;
    alt?: string;
  }[];
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
}: HeaderProps) {
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <Text
              as="hero"
              className="mb-4 text-8xl text-lowercase first-letter-uppercase"
            >
              {title}
            </Text>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button
              variant={
                button.variant as
                  | "link"
                  | "default"
                  | "destructive"
                  | "outline"
                  | "secondary"
                  | "ghost"
                  | null
                  | undefined
              }
              size={
                button.size as
                  | "default"
                  | "sm"
                  | "lg"
                  | "icon"
                  | null
                  | undefined
              }
              key={index}
              
              className="whitespace-nowrap px-4 py-2 "
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 overflow-hidden bg-background-secondary py-8 md:py-16 lg:h-screen">
        <div className="grid shrink-0 grid-cols-1 gap-y-4">
          <div className="ml-[-20.5%] grid w-full animate-loop-horizontal auto-cols-fr grid-cols-2 gap-4 self-center">
            {[...new Array(2)].map((e, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                  >
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid w-full animate-loop-horizontal grid-cols-2 gap-4 self-center">
            {[...new Array(2)].map((e, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                  >
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
