"use client";

import { Text } from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  description: string;
  buttons: {
    name: string;
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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="ml-[5%] max-w-3xl grid grid-cols-1 items-start gap-2 md:gap-6 lg:mb-20 lg:gap-5 mb-16">
          <Text
            as="hero"
            className="text-3xl font-bold md:text-6xl lg:text-7xl"
          >
            {title}
          </Text>
          <div className="flex flex-col justify-end ">
            <Text as="p" className="md:text-md">
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
                  {button.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_.4fr_.4fr] items-end gap-10 sm:gap-8">
          <div className="w-full lg:my-[15%]">
            <img
              className="aspect-[3/2] size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="w-full">
            <img
              className="aspect-square size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
          <div className="w-full self-start">
            <img
              className="aspect-[3/4] size-full object-cover"
              src={images[2].src}
              alt={images[2].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
