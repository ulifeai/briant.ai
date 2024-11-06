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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col lg:grid lg:grid-cols-[1fr_1fr] gap-10 sm:gap-8">
        <div className="mx-auto my-auto max-w-xl flex flex-col items-start justify-between">
          <Text
            as="hero"
            className="text-2xl font-bold md:text-5xl lg:text-6xl mb-6 md:mb-8"
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
        <div className="relative flex items-center">
          <div className="w-[45%] absolute">
            <img
              className="aspect-[2/3] size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="w-full ml-[10%]">
            <img
              className="aspect-square w-full h-[100vh] object-cover min-h-14"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
