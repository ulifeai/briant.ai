import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import React, { useState } from "react";

interface GridListBlockProps {
  title: string;
  description: string;
  buttons: {
    name: string;
    variant: string;
    size: string;
    href: string;
  }[];
  floatingBoxMenu: {
    name: string;
    href: string;
  }[];
  cards: {
    image: {
      src: string;
      alt: string;
    };
    projectName: string;
    date: string;
    categorie: string;
    floatingBox: {
      name: string;
      href: string;
    }[];
    text: string;
    button: {
      name: string;
      variant: string;
      size: string;
      href: string;
    };
  }[];
}

export default function GridListBlock({
  title,
  description,
  buttons,
  floatingBoxMenu,
  cards,
}: GridListBlockProps) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle((toggle) => !toggle);

  const [toggle2, setToggle2] = useState(false);
  const handleClick2 = () => setToggle2((toggle2) => !toggle2);

  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-2 pb-6">
        <div className="flex flex-col justify-between items-start mb-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex flex-row lg:items-center items-center justify-between lg:w-fit w-full">
          <div className="flex flex-row gap-x-4 mr-3">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant as "default" | "outline" | "ghost"}
                size={button.size as "default" | "sm" | "lg"}
                style={{ borderRadius: "var(--button-radius)" }}
                className="whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none"
                asChild
              >
                <a href={button.href}>{button.name}</a>
              </Button>
            ))}
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"none"}>
                <div className="flex flex-row items-center justify-center gap-x-1 cursor-pointer w-8 h-8 my-auto">
                  <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                  <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                  <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit bg-[#fff] text-left border-[1px] border-black rounded-none">
              {floatingBoxMenu.map((box, index) => (
                <a
                  key={index}
                  href={box.href}
                  tabIndex={0}
                  className="px-4 py-2 block text-[#222222] text-left mx-auto relative whitespace-nowrap"
                >
                  {box.name}
                </a>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-auto gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-start border-[1px] border-black p-6"
          >
            <div className="flex flex-row items-center justify-between mb-6 w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="bg-[#eee] p-2 mr-4">
                  <Image
                    src={card.image.src}
                    width={32}
                    height={32}
                    alt={card.image.alt}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-x-4">
                  <div className="font-semibold">{card.projectName}</div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="text-sm">{card.date}</div>
                    <div className="mx-2">•</div>
                    <div className="text-sm">{card.categorie}</div>
                  </div>
                </div>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={"none"}>
                    <div className="flex flex-row items-center justify-center gap-x-1 cursor-pointer w-8 h-8 my-auto">
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                    </div>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit bg-[#fff] text-left border-[1px] border-black rounded-none">
                  {card.floatingBox.map((box, index) => (
                    <a
                      key={index}
                      href={box.href}
                      tabIndex={0}
                      className="px-4 py-2 block text-[#222222] text-left mx-auto relative whitespace-nowrap"
                    >
                      {box.name}
                    </a>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
            <p>{card.text}</p>
            <div className="flex flex-col gap-y-2 mt-8 w-full">
              <Button
                key={index}
                variant={card.button.variant as "default" | "outline" | "ghost"}
                size={card.button.size as "default" | "sm" | "lg"}
                style={{ borderRadius: "var(--button-radius)" }}
                className="whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none w-full"
                asChild
              >
                <a href={card.button.href}>{card.button.name}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={handleClick}
        className={`absolute inset-0 z-0 ${toggle ? "" : "hidden"}`}
      ></div>
      <div
        onClick={handleClick2}
        className={`absolute inset-0 z-0 ${toggle2 ? "" : "hidden"}`}
      ></div>
    </div>
  );
}
