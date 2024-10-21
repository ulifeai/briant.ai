import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

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
    text: string;
    numberLessons: string;
    iconLink: string;
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
      <div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-auto gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-[1px] border-black"
          >
            <a
              href={card.href}
              className="flex flex-col items-center justify-center w-full h-full relative"
            >
              <Image
                src={card.image.src}
                width={510}
                height={340}
                alt={card.image.alt}
                className="max-w-[1280px] max-h-[720px] w-full h-full object-cover aspect-video"
              />
              <div className="z-[2] text-white flex justify-center items-center absolute">
                <div className="flex flex-col items-start justify-center w-20 h-20">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z"
                      fill="CurrentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="z-[1] bg-black/50 absolute top-0 left-0 right-0 bottom-0"></div>
            </a>
            <div className="flex flex-col justify-center items-center p-6">
              <div className="flex flex-row items-center justify-start w-full mb-2">
                <h1 className="font-extrabold">{card.title}</h1>
              </div>
              <p className="mb-4">{card.text}</p>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center justify-start">
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex items-center justify-center mr-1 w-6 h-6">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 3H14C13.2596 3.00251 12.5466 3.28057 12 3.78C11.4534 3.28057 10.7404 3.00251 10 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H8.758C9.284 20 9.8 20.214 10.172 20.586L11.293 21.707C11.302 21.716 11.314 21.719 11.323 21.728C11.409 21.807 11.505 21.877 11.617 21.924H11.619C11.863 22.025 12.137 22.025 12.381 21.924H12.383C12.495 21.877 12.591 21.807 12.677 21.728C12.686 21.719 12.698 21.716 12.707 21.707L13.828 20.586C14.2039 20.2123 14.7119 20.0017 15.242 20H21C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8946 19.5196 22 19.2652 22 19V4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3ZM8.758 18H4V5H10C10.552 5 11 5.449 11 6V18.689C10.3375 18.2422 9.5571 18.0024 8.758 18ZM20 18H15.242C14.443 18 13.658 18.246 13 18.689V6C13 5.449 13.448 5 14 5H20V18Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs">{card.numberLessons}</div>
                </div>
                <a
                  href={card.iconLink}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
