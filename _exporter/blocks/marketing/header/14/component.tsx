"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt?: string;
  }[];
  imagesPartOne: {
    src: string;
    alt?: string;
  }[];

  imagesPartTwo: {
    src: string;
    alt?: string;
  }[];
  buttons: {
    title: string;
    variant: string;
    size: string;
    href: string;
  }[];
}

const imageColumns = [
  { className: "-mt-[20%] animate-loop-vertically" },
  { className: "-mt-[1000%] animate-loop-vertically-reverse" },
  { className: "animate-loop-vertically" },
  { className: "-mt-[1000%] animate-loop-vertically-reverse" },
  { className: "mt-[-20%] animate-loop-vertically" },
];

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  imagesPartOne,
  imagesPartTwo,
}: HeaderProps) {
  return (
    <section className="relative">
      <div className="px-[5%]">
        <div className="flex max-h-[60rem] min-h-svh items-center">
          <div className="container py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-lg text-center">
            
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
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/50" />
            <div className="grid w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
              {imageColumns.map((column, index) => (
                <div
                  key={index}
                  className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${column.className}`}
                >
                  {imagesPartOne.map((image, index) => (
                    <div
                      key={index}
                      className="grid size-full grid-cols-1 gap-4"
                    >
                      <div className="relative w-full pt-[120%]">
                        <img
                          className="absolute inset-0 size-full object-cover"
                          src={image.src}
                          alt={image.alt}
                        />
                      </div>
                    </div>
                  ))}
                  {imagesPartTwo.map((image, index) => (
                    <div
                      key={index}
                      className="grid size-full grid-cols-1 gap-4"
                    >
                      <div className="relative w-full pt-[120%]">
                        <img
                          className="absolute inset-0 size-full object-cover"
                          src={image.src}
                          alt={image.alt}
                        />
                      </div>
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
