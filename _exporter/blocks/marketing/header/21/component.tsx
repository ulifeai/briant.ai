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
  video: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  images,
}: HeaderProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section id="relume" className="relative md:min-h-screen">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <Text
              as="hero"
              className="mb-4 text-8xl text-lowercase first-letter-uppercase"
            >
              {title}
            </Text>
            <div className="mx-[7.5%] self-end md:mt-48">
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
          <motion.div
            className="flex origin-top-right flex-col items-end justify-center md:h-[60vh] lg:h-[80vh] lg:justify-start"
            style={{ scale: isMobile ? 1 : videoScale }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
