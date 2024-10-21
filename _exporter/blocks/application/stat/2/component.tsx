import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface StatBlockProps {
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
    imageBox: {
      src: string;
      alt: string;
    };
    floatingBox: {
      name: string;
      href: string;
    }[];
    text: string;
    price: string;
    pourcentage: string;
    periode: string;
  }[];
}

export default function StatBlock({
  title,
  description,
  buttons,
  floatingBoxMenu,
  cards,
}: StatBlockProps) {
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
                className="whitespace-nowrap px-4 py-2 "
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
      <div className="lg:grid lg:grid-cols-3 flex flex-col justify-between items-center gap-6 pb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col border-[1px] border-black p-6"
          >
            <p className="text-start mb-2">{card.text}</p>
            <div className="flex flex-row items-center justify-between w-full mb-3">
              <div className="font-bold text-2xl">{card.price}</div>
              <Image
                src={card.imageBox.src}
                width={32}
                height={32}
                alt={card.imageBox.alt}
                className="w-8 h-8 object-cover"
              />
            </div>

            <div className="flex flex-row items-center justify-start gap-x-[0.20rem]">
              <div className="flex flex-row items-center">
                <ArrowUp size={16} />
                <div className="text-xs">{card.pourcentage}</div>
              </div>
              <div className="text-xs">{card.periode}</div>
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
