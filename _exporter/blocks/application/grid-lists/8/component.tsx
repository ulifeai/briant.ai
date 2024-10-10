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
    href: string;
    image: {
      src: string;
      alt: string;
    };
    title: string;
    Location: string;
    fullTime: string;
    remote: string;
    text: string;
    hours: string;
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
      <div className="grid lg:grid-cols-2 grid-cols-1 auto-rows-auto gap-6">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="lg:grid lg:grid-cols-[max-content_1fr] flex flex-col items-start justify-start text-start border-[1px] border-black p-6  gap-x-7 gap-y-5"
          >
            <div className="flex flex-row items-start justify-between w-full h-full">
              <Image
                src={card.image.src}
                width={32}
                height={32}
                alt={card.image.alt}
                className="h-20 w-20 object-cover"
              />
              <div className="flex flex-row justify-center items-start gap-x-3 lg:hidden">
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <svg
                    width=" 100%"
                    height=" 100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="currentColor"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12.88 6.5V11.64L16.51 15.27C16.7018 15.4678 16.7018 15.7822 16.51 15.98L15.98 16.51C15.7822 16.7018 15.4678 16.7018 15.27 16.51L11.27 12.51C11.1784 12.4159 11.1249 12.2912 11.12 12.16V6.5C11.12 6.22386 11.3439 6 11.62 6H12.38C12.6561 6 12.88 6.22386 12.88 6.5Z"
                    ></path>
                  </svg>
                </div>
                <div className="text-base whitespace-nowrap"> {card.hours}</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="flex flex-col">
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
              </div>
              <div className="lg:flex flex-row justify-center items-start gap-x-3 hidden">
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <svg
                    width=" 100%"
                    height=" 100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="currentColor"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12.88 6.5V11.64L16.51 15.27C16.7018 15.4678 16.7018 15.7822 16.51 15.98L15.98 16.51C15.7822 16.7018 15.4678 16.7018 15.27 16.51L11.27 12.51C11.1784 12.4159 11.1249 12.2912 11.12 12.16V6.5C11.12 6.22386 11.3439 6 11.62 6H12.38C12.6561 6 12.88 6.22386 12.88 6.5Z"
                    ></path>
                  </svg>
                </div>
                <div className="text-base whitespace-nowrap">{card.hours}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        onClick={handleClick}
        className={`absolute inset-0 z-0 ${toggle ? "" : "hidden"}`}
      ></div>
    </div>
  );
}
