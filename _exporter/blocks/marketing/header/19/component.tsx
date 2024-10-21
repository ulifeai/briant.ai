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
  video,
  images,
}: HeaderProps) {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const transformRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, {
    bounce: 0,
  });

  const halfViewportHeight =
    typeof window !== "undefined" ? window.innerHeight * 0.5 : 100;
  const fadeOut = useTransform(scrollY, [0, halfViewportHeight], [1, 0]);
  const scaleDown = useTransform(scrollY, [0, halfViewportHeight], [1, 0.95]);

  const width = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["90%", "100%"]
  );
  const height = useTransform(
    animatedScrollYProgress,
    [0.3, 1],
    ["80vh", "100vh"]
  );
  const y = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-10vh"]);

  return (
    <section
      ref={transformRef}
      className="relative flex h-[300vh] flex-col items-center"
    >
      <div className="px-[5%]">
        <div className="sticky top-0 z-0 mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <motion.div style={{ opacity: fadeOut, scale: scaleDown }}>
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
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ width, height, y }}
        className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start"
      >
        <Dialog>
          <DialogTrigger className="relative flex size-full items-center justify-center">
            <img
              src={images[0].src}
              className="size-full object-cover"
              alt={images[0].alt}
            />
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
            <span className="absolute inset-0 z-10 bg-black/50" />
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
