"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  video: string;
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
  video,
}: HeaderProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 991px)");

  const { scrollYProgress } = useScroll();

  const createTransform = (
    mobileValues: string[],
    tabletValues: string[] | null,
    desktopValues: string[]
  ) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      isMobile
        ? mobileValues
        : isTablet && tabletValues
        ? tabletValues
        : desktopValues
    );

  const videoDialogMotion = {
    y: useTransform(scrollYProgress, [0.5, 1], ["0vh", "40vh"]),
    width: createTransform(["100%", "50%"], ["100%", "25%"], ["100%", "10%"]),
    height: createTransform(["100%", "25%"], ["100%", "30%"], ["100%", "20%"]),
    top: createTransform(["0%", "37.5%"], ["0%", "35%"], ["0%", "40%"]),
    left: createTransform(["0%", "25%"], ["0%", "37.5%"], ["0%", "45%"]),
  };

  return (
    <section
      id="relume"
      className="relative flex h-[300vh] flex-col items-center"
    >
      <div className="sticky top-0 flex w-full flex-col items-center justify-center">
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                style={videoDialogMotion}
                className="absolute inset-0 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center"
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
        <div className="relative py-16 md:py-24 lg:pb-28 lg:pt-6">
          <div className="px-[5%]">
            <div className="container max-w-3xl">
              <div className="mx-auto w-full text-center">
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
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
}
