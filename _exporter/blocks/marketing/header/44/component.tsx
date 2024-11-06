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
        <div className="my-auto max-w-3xl flex flex-col gap-2 md:gap-6 lg:gap-5">
          <Text
            as="hero"
            className="text-3xl font-bold md:text-6xl lg:text-7xl"
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
        <div className="relative flex w-full gap-10">
          <div className="w-[60%] absolute top-[10%] bottom-auto left-0 right-auto">
            <img
              className="aspect-[3/2] size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="w-full ml-[15%]">
            <img
              className="aspect-square size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
