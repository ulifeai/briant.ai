"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

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
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
        <div className="flex h-full flex-col justify-between">
          <Text
            as="hero"
            className="mb-4 text-8xl text-lowercase first-letter-uppercase"
          >
            {title}
          </Text>
          
          <div className="ml-[7.5%]">
            <Text
            as="p"
              className="text-base py-2"
            >
              {description}
            </Text>
            <div className="mt-6 flex gap-4 md:mt-8 md:flex-wrap">
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
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div key={index} className="w-full">
              <img
                src={image.src}
                alt={image.alt}
                className={clsx("size-full object-cover", {
                  "aspect-[2/3]": index === 0,
                  "aspect-square": index !== 0,
                })}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
