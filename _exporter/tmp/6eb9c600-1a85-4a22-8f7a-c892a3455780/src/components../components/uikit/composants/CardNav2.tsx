import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  content: string;
  btnName: string;
  orientation?: "Vertical";
};

export default function CardNav2({
  title,
  content,
  btnName,
  orientation,
}: Props) {
  return (
    <a
      className={`flex  max-w-md  ${
        orientation === "Vertical"
          ? "flex-col w-64 gap-y-6"
          : "flex-row gap-x-8"
      }`}
      href="#"
    >
      <Image
        src="img/6243807090316203124aee66_placeholder-image.svg"
        width={150}
        height={150}
        alt="palcehplder"
        className="w-[250px] h-[175px] object-cover"
      />
      <div className="flex flex-col gap-y-1 items-start justify-center">
        <h3 className="font-bold">{title}</h3>
        <p>{content}</p>
        <a href="#" className="underline">
          {btnName}
        </a>
      </div>
    </a>
  );
}
