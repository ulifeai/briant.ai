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
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <Text
            as="hero"
            className="text-3xl font-bold md:text-6xl lg:text-7xl"
          >
            {title}
          </Text>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
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

        <div className="grid grid-cols-[1fr_1.5fr_1fr] items-start gap-6 sm:gap-8">
          <div className="mt-[70%] w-full">
            <img
              className="aspect-square size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-[2/3] size-full object-cover"
              src={images[2].src}
              alt={images[2].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
