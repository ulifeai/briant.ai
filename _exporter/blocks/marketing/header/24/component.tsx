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

  const containerHeight = {
    height: createTransform(["60vh", "100vh"], ["70vh", "100vh"]),
  };

  const leftImageGroup = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-50vw"]),
  };

  const centerImageContainer = {
    x: createTransform(["0vw", "-25vw"], ["0vw", "-50vw"]),
    width: createTransform(["50vw", "100vw"], ["30vw", "100vw"]),
    height: createTransform(["50vh", "100vh"], ["70vh", "100vh"]),
  };

  const rightImage = {
    x: createTransform(["0vw", "25vw"], ["0vw", "20vw"]),
  };

  return (
    <section className="relative h-[250vh]">
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="w-full max-w-2xl">
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
      </div>

      <div className="sticky top-0 mt-[-10rem] flex h-screen w-full items-center overflow-hidden">
        <motion.div
          className="z-10 grid w-full grid-flow-col grid-cols-[25%_50%_25%] justify-center md:grid-cols-[50%_30%_20%]"
          style={containerHeight}
        >
          <motion.div
            className="grid grid-flow-col grid-cols-1 justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative top-[5%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img
                className="aspect-[2/3] w-full object-cover"
                {...images[0]}
              />
            </div>

            <div className="relative top-[-5%] flex flex-col gap-4 self-center">
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img
                  className="aspect-square w-full object-cover"
                  {...images[1]}
                />
              </div>
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img
                  className="aspect-[3/4] w-full object-cover"
                  {...images[2]}
                />
              </div>
            </div>

            <div className="relative top-[15%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img
                className="aspect-square w-full object-cover"
                {...images[3]}
              />
            </div>
          </motion.div>

          <motion.div className="relative" style={centerImageContainer}>
            <img className="size-full object-cover" {...images[4]} />
          </motion.div>

          <motion.div
            className="grid grid-flow-col grid-cols-1 gap-4 justify-self-start px-4"
            style={rightImage}
          >
            <div className="relative top-[5%] w-[40vw] md:w-[25vw] lg:w-[22vw]">
              <img
                className="aspect-[3/4] w-full object-cover"
                {...images[5]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
