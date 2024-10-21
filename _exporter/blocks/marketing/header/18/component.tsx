"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const options = {
  loop: true,
};

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

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
  carouselHeading: string;
  carouselDescription: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
  carouselHeading,
  carouselDescription,
}: HeaderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0">
      <div className=" max-w-2xl justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
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
      <div className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#eee] text-center">
        <Carousel
          opts={options}
          plugins={plugins}
          setApi={setApi}
          className="relative left-0 right-0 z-10 block h-full overflow-hidden whitespace-nowrap"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative inline-block size-full whitespace-normal text-left align-top">
                  <div className="flex h-screen flex-col">
                    <div className="relative flex-1">
                      <img
                        className="absolute size-full object-cover"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                    <div className="relative bg-background-secondary px-6 pb-32 pt-6 sm:px-8 sm:pt-8">
                      <div className="w-full max-w-lg">
                        <h6 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                          {carouselHeading}
                        </h6>
                        <p>{carouselDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-between pl-4  ">
            <div className="absolute bottom-[52px] left-8 right-auto top-auto flex w-full items-start justify-start">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-[#ddd]": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <CarouselPrevious className="bottom-2 left-auto right-[5.5rem] top-auto size-12 bg-transparent md:right-24 border-black" />
            <CarouselNext className="bottom-2 left-auto right-8 top-auto size-12 bg-transparent border-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
