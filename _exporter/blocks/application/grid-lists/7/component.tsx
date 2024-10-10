import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface GridListBlockProps {
  title: string;
  description: string;
  placeholder: string;
  SortByName: string;
  floatingBoxMenu: {
    name: string;
    href: string;
  }[];
  cards: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
    Location: string;
    fullTime: string;
    remote: string;
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
  placeholder,
  SortByName,
  floatingBoxMenu,
  cards,
}: GridListBlockProps) {
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-2 pb-6">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex flex-row lg:justify-between lg:items-center gap-4">
          <form action="">
            <div className="flex items-center relative ">
              <input
                type="text"
                placeholder={placeholder}
                className="border-[1px] border-black rounded-none text-black bg-white h-auto min-h-10 px-3 py-2 text-base pl-11 lg:w-72 w-56"
              />
              <div className="absolute top-auto bottom-auto left-3 right-auto">
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <Search />
                </div>
              </div>
            </div>
          </form>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"none"} size={"none"}>
                <div className="flex flex-row items-center justify-center px-4 py-2 gap-1 border-[1px] border-black rounded-none cursor-pointer">
                  <div className="">{SortByName}</div>
                  <ChevronDown />
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
                <Image
                  src={card.image.src}
                  width={32}
                  height={32}
                  alt={card.image.alt}
                  className="h-20 w-20 object-cover"
                />
              </div>

              <a
                href="#"
                className="flex flex-col items-center justify-start h-full"
              >
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2H6C4.897 2 4 2.897 4 4V22L12 17.428L20 22V4C20 2.897 19.103 2 18 2ZM18 18.553L12 15.125L6 18.553V4H18V18.553Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start w-full mb-4">
              <div className="text-lg font-semibold">{card.title}</div>
              <div className="flex flex-row items-center justify-start">
                <div className="text-sm">{card.Location}</div>
                <div className="mx-2">•</div>
                <div className="text-sm">{card.fullTime}</div>
                <div className="mx-2">•</div>
                <div className="text-sm">{card.remote}</div>
              </div>
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
    </div>
  );
}
