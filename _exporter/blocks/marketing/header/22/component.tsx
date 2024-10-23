"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

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
  video: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
  video,
}: HeaderProps) {
  const { scrollYProgress } = useScroll();

  const leftImageTranslate = {
    y: useTransform(scrollYProgress, [0, 1], ["-15.444%", "0%"]),
  };

  const centerImageTranslate = {
    y: useTransform(scrollYProgress, [0, 1], ["15.333%", "0%"]),
  };

  const rightImageTranslate = {
    y: useTransform(scrollYProgress, [0, 0.5], ["11.333%", "-20%"]),
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <Text
                as="hero"
                className="mb-4 text-8xl text-lowercase first-letter-uppercase"
              >
                {title}
              </Text>
            <Text
            as="h6"
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
        </div>
        <div className="relative flex justify-center gap-6 sm:gap-8 md:gap-0">
          <motion.div
            className="absolute bottom-0 left-0 z-10 w-2/5"
            style={leftImageTranslate}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="aspect-square size-full object-cover"
            />
          </motion.div>
          <motion.div
            className="mx-[10%] mb-[10%] w-1/2"
            style={centerImageTranslate}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="aspect-square size-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute right-0 top-[10%] w-2/5"
            style={rightImageTranslate}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="aspect-[4/3] size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
