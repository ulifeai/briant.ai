import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";

interface StatBlockProps {
  title: string;
  description: string;
  placeholder: string;
  SortByName: string;
  floatingBoxMenu: {
    name: string;
    href: string;
  }[];
  cards: {
    day: string;
    month: string;
    name: string;
    hour: string;
    floatingBox: {
      name: string;
      href: string;
    }[];
  }[];
}

export default function StackedListBlock({
  title,
  description,
  placeholder,
  SortByName,
  floatingBoxMenu,
  cards,
}: StatBlockProps) {

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
      <div className="flex flex-col border-t-[1px] border-black">
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_max-content] auto-rows-auto border-b-[1px] border-black gap-x-3 py-4 px-6"
          >
            <div className="flex flex-row justify-start items-center gap-3">
              <div className="flex flex-col items-center justify-center  border-[1px] border-black w-14 h-14 py-1">
                <div className="text-lg font-semibold">{card.day}</div>
                <div className="text-sm">{card.month}</div>
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="font-semibold">{card.name}</div>
                <div className="text-sm">{card.hour}</div>
              </div>
            </div>
            <div className="flex flex-row items-center lg:justify-center justify-between gap-x-4 w-full">
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
          </div>
        ))}
      </div>
    </div>
  );
}
