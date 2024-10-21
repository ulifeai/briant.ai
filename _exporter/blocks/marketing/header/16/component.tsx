"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
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
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
}: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const { scrollYProgress } = useScroll({ target: headerRef });
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  });
  const width = useTransform(smoothScrollYProgress, [0, 1], ["50%", "100%"]);

  return (
    <section ref={headerRef} className="relative md:h-[300vh]">
      <div className="static top-0 grid auto-cols-fr grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:sticky lg:h-screen lg:grid-cols-2 lg:gap-y-0 lg:pt-0">
        <div className="relative mx-[5%] max-w-md lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
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
        <div>
          {isMobile ? (
            <div className="static w-full">
              <div className="relative size-full pt-[100%] lg:pt-0">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          ) : (
            <motion.div
              style={{ width }}
              className="absolute inset-0 left-auto w-auto"
            >
              <div className="relative size-full pt-[100%] lg:pt-0">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
