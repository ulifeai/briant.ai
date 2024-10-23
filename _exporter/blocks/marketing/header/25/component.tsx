"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
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
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
}: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { scrollYProgress } = useScroll();

  const createTransform = (mobileValues: string[], desktopValues: string[]) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      isMobile ? mobileValues : desktopValues
    );

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-32vw"]),
    width: createTransform(["50vw", "100vw"], ["36vw", "100vw"]),
    height: createTransform(["60vh", "100vh"], ["80vh", "100vh"]),
  };

  const rightImageGroup = {
    x: createTransform(["0vw", "25vw"], ["0vw", "32vw"]),
  };

  return (
    <section className="relative h-[250vh]">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="mx-auto w-full max-w-2xl text-center">
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
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
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
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%]  content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
          <motion.div
            className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                {...images[0]}
              />
            </div>

            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative">
                <img
                  className="aspect-square w-full object-cover"
                  {...images[1]}
                />
              </div>
              <div className="relative">
                <img
                  className="aspect-[3/4] w-full object-cover"
                  {...images[2]}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" style={centerImageContainer}>
            <img className="size-full object-cover" {...images[3]} />
          </motion.div>

          <motion.div
            className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
            style={rightImageGroup}
          >
            <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
              <div className="relative w-[40vw] sm:w-auto">
                <img
                  className="aspect-[3/4] w-full object-cover"
                  {...images[4]}
                />
              </div>
              <div className="relative w-[40vw] sm:w-auto">
                <img
                  className="aspect-square w-full object-cover"
                  {...images[5]}
                />
              </div>
            </div>

            <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                {...images[6]}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
