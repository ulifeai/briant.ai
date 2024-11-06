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
import { Text } from "@/components/ui/base/text";

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

  const { scrollYProgress } = useScroll();

  const containerMotion = {
    y: useTransform(scrollYProgress, [0, 0.4], ["0vh", "-5vh"]),
    width: useTransform(scrollYProgress, [0, 0.4], ["90%", "100%"]),
    height: useTransform(scrollYProgress, [0, 0.4], ["90vh", "100vh"]),
  };

  const imageTranslate = {
    y: useTransform(scrollYProgress, [0.4, 1], ["0%", "70%"]),
  };

  const videoDialogTranslate = {
    y: useTransform(scrollYProgress, [0.3, 0.4], ["0%", "200%"]),
  };

  return (
    <section className="relative flex h-[150vh] flex-col items-center">
      <motion.div
        className="sticky top-[5vh] z-10 mb-[-5vh] mt-[5vh] flex h-[90vh] w-[90%] flex-col items-start justify-center overflow-hidden"
        style={containerMotion}
      >
        <div className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-md">
              <Text
                as="hero"
                className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-4xl lg:text-7xl"
              >
                {title}
              </Text>
              <Text
                as="h6"
                className="text-base text-text-alternative md:text-md"
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
        <motion.div className="absolute inset-0 -z-10" style={imageTranslate}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <Dialog>
          <DialogTrigger className="hidden md:flex" asChild>
            <motion.button
              className="absolute bottom-[5%] right-[5%] flex w-full items-center justify-center md:max-w-[14rem] lg:max-w-xxs"
              style={videoDialogTranslate}
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="size-full object-cover"
              />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
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
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
