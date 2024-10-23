"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import {Text} from "@/components/ui/base/text";

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
  imagesPartOne?: {
    src: string;
    alt?: string;
  }[];

  imagesPartTwo?: {
    src: string;
    alt?: string;
  }[];
  carouselHeading?: string;
  carouselDescription?: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
}: HeaderProps) {
  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });
  const yFirst = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-87.5vh"]
  );
  const ySecond = useTransform(
    animatedScrollYProgress,
    [0, 1],
    ["0vh", "-39.6vh"]
  );

  return (
    <section
      ref={transformRef}
      className="relative h-[150vh] px-[5%] md:h-[300vh]"
    >
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-auto top-0 z-10">
          <motion.div
            className="flex flex-col gap-[26vw] pt-[70vh]"
            style={{ y: yFirst }}
          >
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[35vw] pt-[120%] sm:h-auto", {
                  "w-[30vw] md:w-[28vw] lg:w-[22vw]": index === 0,
                  "left-[52vw] mt-[-46vw] w-[30vw] md:w-[28vw] lg:left-[58vw] lg:w-[22vw]":
                    index === 1,
                  "left-[4vw] mt-[-5vw] w-[28vw] md:w-[26vw] lg:w-[20vw]":
                    index === 2,
                  "left-[64vw] mt-[-45vw] w-[26vw] md:w-[24vw] lg:w-[18vw]":
                    index === 3,
                })}
              >
                <img
                  src={image.src}
                  className="absolute inset-0 size-full object-cover"
                  alt={image.alt}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-auto right-0 top-0 z-0"
          style={{ y: ySecond }}
        >
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            {images.slice(4).map((image, index) => (
              <div
                key={index}
                className={clsx(
                  "relative h-[35vw] pt-[120%] opacity-75 sm:h-auto",
                  {
                    "w-[28vw] md:w-[26vw] lg:w-[20vw]": index === 0,
                    "right-[50vw] mt-[-44vw] w-[26vw] md:w-[24vw] lg:right-[54vw] lg:w-[18vw]":
                      index === 1,
                  }
                )}
              >
                <img
                  src={image.src}
                  className="absolute inset-0 size-full object-cover"
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="container mx-auto relative flex h-full max-w-2xl items-center pb-24 pt-16 text-center md:pt-24 lg:py-28 ">
          <div>
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
            <div className="relative z-20 mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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
        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
}
