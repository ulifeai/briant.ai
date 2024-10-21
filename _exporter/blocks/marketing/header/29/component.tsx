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
    <section className="relative">
      <div className="px-[5%]">
        <div className="container flex max-h-[60rem] min-h-svh">
          <div className="py-16 md:py-24 lg:py-28">
            <div className="grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
              <div className="mx-[7.5%] flex flex-col justify-end">
              <Text
                  as="p"
                  className="text-white py-2"
                >
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
              <div className="order-first flex flex-col md:order-last">
                <Text
                  as="hero"
                  className="mb-4 text-8xl text-white text-lowercase first-letter-uppercase"
                >
                  {title}
                </Text>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/50">
        <div className="absolute inset-0 z-10 bg-black/50" />
        <img
          src={images[0].src}
          className="absolute inset-0 size-full object-cover"
          alt={images[0].alt}
        />
      </div>
    </section>
  );
}
