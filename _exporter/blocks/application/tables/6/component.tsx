import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface TableBlockProps {
  title: string;
  description: string;
  buttons: {
    name: string;
    variant: string;
    size: string;
    href: string;
  }[];
  firstColHeader: {
    name: string;
    href: string;
  };
  secondColHeader: {
    name: string;
    href: string;
  };
  thirdColHeader: {
    name: string;
    href: string;
  };
  fourthColHeader: {
    name: string;
    href: string;
  };
  fifthColHeader: {
    name: string;
    href: string;
  };
  sixthColHeader: {
    name: string;
    href: string;
  };
  bodyRowContent: {
    firstCol: string;
    secondCol: string;
    thirdCol: string;
    fourthCol: string;
    fifthCol: string;
    sixthCol: string;
    menuCol: {
      name: string;
      href: string;
    }[];
  }[];
  buttonNextFooter: {
    variant: string;
    size: string;
    name: string;
    href: string;
  };
  buttonPrevFooter: {
    variant: string;
    size: string;
    name: string;
    href: string;
  };
  linkPageFooter: {
    numero: string;
    href: string;
  }[];
}

export default function TableBlock({
  title,
  description,
  buttons,
  firstColHeader,
  secondColHeader,
  thirdColHeader,
  fourthColHeader,
  fifthColHeader,
  sixthColHeader,
  bodyRowContent,
  buttonNextFooter,
  buttonPrevFooter,
  linkPageFooter,
}: TableBlockProps) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle((toggle) => !toggle);
  return (
    <div className="mx-auto lg:max-w-7xl max-w-80">
      <div className="flex flex-col border-t-[1px] border-l-[1px] border-r-[1px] border-black mb-14">
        {/* Header table */}
        <div className="flex lg:flex-row flex-col p-6 justify-between lg:items-center items-start border-b-[1px] border-black ">
          <div className="flex flex-col mb-4">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="">{description}</p>
          </div>
          <div className="flex flex-row gap-3">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant as "default" | "outline" | "ghost"}
                size={button.size as "default" | "sm" | "lg"}
                style={{ borderRadius: "var(--button-radius)" }}
              >
                <a href={button.href}>{button.name}</a>
              </Button>
            ))}
          </div>
        </div>
        {/* Row header */}
        <div className="flex flex-col lg:overflow-x-visible overflow-x-auto w-full">
          <div
            className="grid justify-between border-b-[1px] border-black min-w-[72rem]"
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 0.5fr" }}
          >
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={firstColHeader.href} className="underline font-bold">
                {firstColHeader.name}
              </a>
            </div>
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={secondColHeader.href} className="underline font-bold">
                {secondColHeader.name}
              </a>
            </div>
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={thirdColHeader.href} className="underline font-bold">
                {thirdColHeader.name}
              </a>
            </div>
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={fourthColHeader.href} className="underline font-bold">
                {fourthColHeader.name}
              </a>
            </div>
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={fifthColHeader.href} className="underline font-bold">
                {fifthColHeader.name}
              </a>
            </div>
            <div className="flex flex-col justify-center items-start px-6 py-4">
              <a href={sixthColHeader.href} className="underline font-bold">
                {sixthColHeader.name}
              </a>
            </div>
          </div>
          <div>
            {/* Header body */}
            {bodyRowContent.map((bodyColContent, index) => (
              <div
                key={index}
                className="grid justify-between items-start border-b-[1px] border-black min-w-[72rem]"
                style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 0.5fr" }}
              >
                <div className="flex flex-col justify-center items-start px-6 py-4 font-bold">
                  {bodyColContent.firstCol}
                </div>
                <div className="flex flex-col justify-center items-start px-6 py-4">
                  {bodyColContent.secondCol}
                </div>
                <div className="flex flex-col justify-center items-start px-6 py-4">
                  {bodyColContent.thirdCol}
                </div>
                <div className="flex flex-col justify-center items-start px-6 py-4">
                  {bodyColContent.fourthCol}
                </div>
                <div className="flex flex-col justify-center items-start px-6 py-4">
                  {bodyColContent.fifthCol}
                </div>
                <div className="flex flex-col justify-center items-start px-6 py-3">
                  <div className="px-3 py-1 bg-[#f4f4f4]">
                    {bodyColContent.sixthCol}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-end mx-6 my-3">
                  <div className="relative">
                    <div
                      className="flex flex-row items-center justify-center gap-x-1 cursor-pointer w-8 h-8 my-auto"
                      onClick={handleClick}
                    >
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                      <div className="w-1 h-1 rounded-[0.25rem] bg-black"></div>
                    </div>
                    <div
                      className={`absolute z-10 min-w-full bg-[#fff] text-left border-[1px] border-black opacity-[1] right-[-80%] bottom-[-380%] ${
                        toggle ? "" : "hidden"
                      }`}
                    >
                      {bodyColContent.menuCol.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          tabIndex={0}
                          className="px-4 py-2 block text-[#222222] text-left mx-auto relative whitespace-nowrap"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* overlay */}
                <div
                  onClick={handleClick}
                  className={`absolute inset-0 z-0 ${toggle ? "" : "hidden"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <Button
          variant={buttonPrevFooter.variant as "default" | "outline" | "ghost"}
          size={buttonPrevFooter.size as "default" | "sm" | "lg"}
          className="flex flex-row gap-1 whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none"
        >
          <ChevronLeft size={16} />
          <a href={buttonPrevFooter.href} className="underline">
            {buttonPrevFooter.name}
          </a>
        </Button>
        <div className="lg:flex lg:flex-row gap-6 items-center hidden">
          {linkPageFooter.map((link, index) => (
            <div key={index}>
              <a href={link.href} className="underline">
                {link.numero}
              </a>
            </div>
          ))}
        </div>
        <Button
          variant={buttonNextFooter.variant as "default" | "outline" | "ghost"}
          size={buttonNextFooter.size as "default" | "sm" | "lg"}
          style={{ borderRadius: "var(--button-radius)" }}
          className="flex flex-row gap-1 whitespace-nowrap px-4 py-2 border-[1px] border-black rounded-none"
        >
          <a href={buttonNextFooter.href} className="underline">
            {buttonNextFooter.name}
          </a>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
