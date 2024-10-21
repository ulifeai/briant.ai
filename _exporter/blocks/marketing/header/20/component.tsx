"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@uidotdev/usehooks";
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
  video: string;
}

export default function HeroHeaderBlock({
  title,
  description,
  buttons,
  video,
  images,
}: HeaderProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  return (
    <section className="relative md:min-h-screen">
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
          </div>

          <div className="flex flex-col items-end justify-center md:h-[60vh] lg:h-[80vh] lg:justify-start">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="relative flex size-full origin-top-right items-center justify-center"
                  style={{ scale: isMobile ? 1 : imageScale }}
                >
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="size-full object-cover"
                  />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                  <span className="absolute inset-0 z-10 bg-black/50" />
                </motion.button>
              </DialogTrigger>
              <DialogPortal>
                <DialogOverlay className="bg-black/90" />
                <DialogContent>
                  {!isIframeLoaded && (
                    <CgSpinner className="mx-auto size-16 animate-spin text-white" />
                  )}
                  <iframe
                    className={clsx(
                      "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                      {
                        visible: isIframeLoaded,
                        hidden: !isIframeLoaded,
                      }
                    )}
                    src={video}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setIsIframeLoaded(true)}
                  ></iframe>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
