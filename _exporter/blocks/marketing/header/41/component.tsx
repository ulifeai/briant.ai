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
      <div className="container ">
        <div className="mx-auto max-w-3xl grid grid-cols-1 items-start gap-2 md:gap-6 lg:mb-20 lg:gap-5 mb-16 text-center">
            <Text
              as="hero"
              className="mb-4 text-8xl text-lowercase first-letter-uppercase"
            >
              {title}
            </Text>
          <div className="flex flex-col justify-end ">
            <Text
            as="h6"
              className="text-base py-2"
            >
              {description}
            </Text>
            <div className="mt-6 flex gap-x-4 md:mt-8 mx-auto">
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

        <div className="flex flex-col lg:grid lg:grid-cols-[.4fr_1fr_.4fr] items-end gap-10 sm:gap-8">
          <div className="w-full self-start">
            <img
              className="aspect-[3/4] size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>

          <div className="w-full lg:my-[15%]">
            <img
              className="aspect-[3/2] size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>

          <div className="w-full">
            <img
              className="aspect-square size-full object-cover"
              src={images[2].src}
              alt={images[2].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
