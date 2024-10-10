import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";

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
    floatingBox: {
      name: string;
      href: string;
    }[];
    buttons: {
      name: string;
      variant: string;
      size: string;
      href: string;
    }[];
    name: string;
    title: string;
    text: string;
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
              <Image
                src={card.image.src}
                width={200}
                height={200}
                alt={card.image.alt}
                className="h-20 w-20 rounded-full object-cover"
              />
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
            <div className="mb-4 text-center  w-full">
              <div className="font-semibold">{card.name}</div>
              <div className="text-sm">{card.title}</div>
            </div>
            <p>{card.text}</p>
            <div className="flex flex-col gap-y-2 mt-8 w-full">
              {card.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant as "default" | "outline" | "ghost"}
                  size={button.size as "default" | "sm" | "lg"}
                  style={{ borderRadius: "var(--button-radius)" }}
                  className="whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none w-full"
                  asChild
                >
                  <a href={button.href}>{button.name}</a>
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
