import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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
    href: string;
    srcImage: string;
    altImage: string;
    name: string;
    date: string;
    categorie: string;
    teamImage: {
      src: string;
      alt: string;
    }[];
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
      <div className="flex flex-col border-t-[1px] border-black">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="flex flex-col lg:items-center items-start justify-center gap-y-4 lg:grid lg:grid-cols-[1fr_max-content] auto-rows-auto	border-b-[1px] border-black gap-x-3 px-6 py-4"
          >
            <div className="flex flex-row justify-start items-center gap-3">
              <div className="p-2 bg-[#eee]">
                <Image
                  src={card.srcImage}
                  width={200}
                  height={200}
                  alt={card.altImage}
                  className="h-8 w-8 object-cover"
                />
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="font-semibold">{card.name}</p>
                <div className="flex flex-row gap-x-3 justify-start items-center">
                  <div className="text-sm">{card.date}</div>
                  <div>•</div>
                  <div className="text-sm">{card.categorie}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center lg:justify-center justify-between gap-x-10 w-full">
              <div className="flex flex-row justify-start items-center">
                {card.teamImage.map((team, index) => (
                  <Image
                    key={index}
                    src={team.src}
                    width={24}
                    height={24}
                    alt={team.alt}
                    className="h-10 w-10 rounded-full object-cover -ml-2 border-2 border-white"
                  />
                ))}
              </div>
              <ChevronRight />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
