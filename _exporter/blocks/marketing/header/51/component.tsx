"use client";

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
      <div className="container flex flex-col gap-10 sm:gap-8">
        <div className="max-w-2xl flex flex-col items-start justify-between lg:mb-20">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl mb-6 md:mb-8">
            {title}
          </h1>
          <div className="flex flex-col justify-end ">
            <p className="md:text-md">{description}</p>
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
          <div className="w-[25%] absolute top-auto bottom-[10%] left-0 right-auto">
            <img
              className="aspect-square size-full object-cover"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="w-full mx-[10%] mt-[5%]">
            <img
              className="aspect-[3/2] size-full object-cover"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
          <div className="w-[25%] absolute top-0 bottom-auto left-auto right-0">
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
