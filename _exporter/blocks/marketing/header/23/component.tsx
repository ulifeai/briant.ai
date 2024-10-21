"use client";

import {Text} from "@/components/ui/base/text";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
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
  const { scrollYProgress } = useScroll();

  const containerMotion = {
    y: useTransform(scrollYProgress, [0, 1], ["0%", "5%"]),
    scale: useTransform(scrollYProgress, [0, 1], [1, 0]),
    opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
  };

  const imageMotions = [
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "45vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "110%"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "80%"]),
    },
    { x: undefined, y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "-30vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "90%"]),
    },
    {
      x: useTransform(scrollYProgress, [0, 1], ["0vw", "-45vw"]),
      y: useTransform(scrollYProgress, [0, 1], ["0%", "120%"]),
    },
  ];

  return (
    <section>
      <div className="relative h-[110vh] md:h-[500vh]">
        <div className="sticky top-0 min-h-screen overflow-hidden">
          <div className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-3xl">
              <div className="relative z-20 text-center">
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
          <motion.div
            style={containerMotion}
            className="absolute inset-0 z-10 flex origin-bottom items-end justify-center"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                style={imageMotions[index]}
                className={clsx(
                  "absolute w-full max-w-[9rem] sm:max-w-[15rem] lg:max-w-xs",
                  {
                    "left-[-25%] top-[65%] sm:top-[45%] md:left-[-20%] lg:left-[-10%] lg:top-[12%] ":
                      index === 0,
                    "bottom-[5%] left-[-8%] md:left-[5%] lg:bottom-[10%]":
                      index === 1,
                    "bottom-[0%]": index === 2,
                    "bottom-[4%] right-[-5%] sm:bottom-[7%] md:right-[8%] lg:bottom-[15%] lg:right-[10%]":
                      index === 3,
                    "right-[-30%] top-[65%] sm:right-[-15%] sm:top-[45%] lg:right-[-8%] lg:top-[5%]":
                      index === 4,
                  }
                )}
              >
                <img className="size-full" src={image.src} alt={image.alt} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 mt-[100vh]" />
      </div>
    </section>
  );
}
