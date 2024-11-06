"use client";

import { Text } from "@/components/ui/base/text";
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
  video?: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
  video,
}: HeaderProps) {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="flex flex-col lg:h-[100svh] h-auto lg:max-h-[100svh] max-h-none gap-10 sm:gap-8">
        <div className="relative flex flex-col flex-1 w-full">
          <div className="lg:flex-1 relative">
            <img
              className="aspect-[3/2] absolute size-full object-cover inset-0"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="lg:w-[20%] w-[30%] absolute bottom-[-15%] right-[5%]">
            <img
              className="aspect-square size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
        </div>
        <div className="mx-auto max-w-[100rem] p-[5%] flex flex-col  lg:grid lg:grid-cols-[1fr_1fr] items-start justify-between gap-x-5 md:gap-6 lg:gap-12 lg:mb-20">
          <Text
            as="hero"
            className="text-2xl font-bold md:text-5xl lg:text-6xl"
          >
            {title}
          </Text>
          <div className="flex flex-col justify-end ">
            <Text as="h6" className="md:text-md">
              {description}
            </Text>
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
        </div>
      </div>
    </section>
  );
}
