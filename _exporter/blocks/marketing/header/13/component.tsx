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
    <section className="py-16 md:py-24 lg:py-28">
      <div className="container p-[5%] flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
        
            <Text
              as="hero"
              className="mb-4 text-8xl text-lowercase first-letter-uppercase"
            >
              {title}
            </Text>
            <Text
            as="p"
              className="text-base py-2"
            >
              {description}
            </Text>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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

        <div className="flex w-screen justify-start overflow-hidden">
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
            <div className="ml-[-50%] grid w-full animate-loop-horizontal-reverse grid-cols-2 gap-4 self-center">
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
      </div>
    </section>
  );
}
