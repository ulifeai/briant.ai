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
    title: string;
    linkIcon: string;
    text: string;
    stars: {
      star: React.ReactNode;
    }[];
    notationStar: string;
    numberReview: string;
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
              <Button variant={"default"} size={"default"}>
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
          <div className="flex flex-col justify-center border-[1px] border-black">
            <Image
              src={card.image.src}
              width={510}
              height={340}
              alt={card.image.alt}
              className="max-w-[1280px] max-h-[720px] w-full h-full object-cover aspect-video"
            />
            <div className="flex flex-col justify-center items-center p-6">
              <div className="flex flex-row items-center justify-between w-full mb-2">
                <h1>{card.title}</h1>
                <a
                  href={card.linkIcon}
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
              <p className="mb-4">{card.text}</p>
              <div className="flex flex-row items-center justify-start w-full">
                <div className="flex flex-row items-center justify-start">
                  {card.stars.map((star, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center mr-1 w-4 h-4"
                    >
                      {star.star}
                    </div>
                  ))}
                </div>
                <div className="text-xs">
                  ({card.notationStar}) • {card.numberReview}
                </div>
              </div>
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
