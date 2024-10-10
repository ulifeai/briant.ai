import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  content: string;
};

export default function CardNav1({ title, content }: Props) {
  return (
    <a className="flex flex-row items-start gap-x-3 max-w-56" href="#">
      <Image
        src="img/624380709031626fc14aee84_icon.svg"
        width={150}
        height={150}
        alt="palcehplder"
        className="w-6 h-6 object-cover"
      />

      <div className="flex flex-col items-start gap-y-2">
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-lg">{content}</div>
      </div>
    </a>
  );
}
