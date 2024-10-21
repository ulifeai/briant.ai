import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";

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
    name: string;
    href: string;
    date: string;
    complete: string;
  }[];
}

export default function StackedListBlock({
  title,
  description,
  buttons,
  floatingBoxMenu,
  cards,
}: StatBlockProps) {
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
      <div className="flex flex-col border-t-[1px] border-black">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="flex flex-col lg:items-center items-start justify-center gap-y-4 lg:grid lg:grid-cols-[1fr_max-content] auto-rows-auto	border-b-[1px] border-black gap-x-3 py-4 px-6"
          >
            <div className="flex flex-col justify-center items-start gap-y-1">
              <div className="font-semibold">{card.name}</div>
              <div>{card.date}</div>
            </div>
            <div className="flex flex-row items-center lg:justify-center justify-between gap-x-10 w-full">
              <div className="px-2 py-1 bg-[#eee]">{card.complete}</div>
              <ChevronRight />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
