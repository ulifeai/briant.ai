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
    nameProperty: string;
    text: string;
    Location: string;
    numberBed: string;
    numberBath: string;
    price: string;
    pricePeriode: string;
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
      <div className="grid lg:grid-cols-2 grid-cols-1 auto-rows-auto gap-6">
        {cards.map((card, index) => (
          <div className="lg:grid lg:grid-cols-[0.5fr_1fr] flex flex-col items-center justify-center text-center border-[1px] border-black">
            <div className="overflow-hidden h-full w-full">
              <Image
                src={card.image.src}
                width={510}
                height={255}
                alt={card.image.alt}
                className="w-full h-full object-cover aspect-[3/2]"
              />
            </div>
            <div className="flex flex-col items-center justify-center text-start p-6">
              <div className="flex flex-row items-center justify-between mb-4 w-full">
                <div className="font-semibold">{card.nameProperty}</div>
                <a href="#" className="px-5 py-2">
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
              <div className="flex flex-row items-end justify-start w-full gap-x-3">
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center w-6 h-6 mr-2">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.4201 21.814C11.5893 21.9349 11.7921 21.9998 12.0001 21.9998C12.2081 21.9998 12.4108 21.9349 12.5801 21.814C12.8841 21.599 20.0291 16.44 20.0001 10C20.0001 5.589 16.4111 2 12.0001 2C7.58909 2 4.00009 5.589 4.00009 9.995C3.97109 16.44 11.1161 21.599 11.4201 21.814ZM12.0001 4C15.3091 4 18.0001 6.691 18.0001 10.005C18.0211 14.443 13.6121 18.428 12.0001 19.735C10.3891 18.427 5.97909 14.441 6.00009 10C6.00009 6.691 8.69109 4 12.0001 4Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-sm">{card.Location}</div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center w-6 h-6 mr-2">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 9.557V3H18V5H6V3H4V9.557C2.81 10.25 2 11.525 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H4V22H6V18H18V22H20V18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17V13C22 11.525 21.189 10.25 20 9.557ZM18 7V9H13V7H18ZM6 7H11V9H6V7ZM20 16H4V13C4 11.897 4.897 11 6 11H18C19.103 11 20 11.897 20 13V16Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-sm">{card.numberBed}</div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center w-6 h-6 mr-2">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10H7V7C7 5.897 7.897 5 9 5C10.103 5 11 5.897 11 7H13C13 4.794 11.206 3 9 3C6.794 3 5 4.794 5 7V10H3C2.73478 10 2.48043 10.1054 2.29289 10.2929C2.10536 10.4804 2 10.7348 2 11V13C2 15.606 3.674 17.823 6 18.65V22H8V19H16V22H18V18.65C20.326 17.823 22 15.606 22 13V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10ZM20 13C20 15.206 18.206 17 16 17H8C5.794 17 4 15.206 4 13V12H20V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-sm">{card.numberBath}</div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-6 w-full">
                <div className="text-2xl font-bold">
                  {card.price}{" "}
                  <span className="text-base font-normal">
                    / {card.pricePeriode}
                  </span>
                </div>
                <Button
                  key={index}
                  variant={
                    card.button.variant as "default" | "outline" | "ghost"
                  }
                  size={card.button.size as "default" | "sm" | "lg"}
                  style={{ borderRadius: "var(--button-radius)" }}
                  className="whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none w-full"
                  asChild
                >
                  <a href={card.button.href}>{card.button.name}</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
