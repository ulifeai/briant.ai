import { Button } from "@/components/ui/base/button";
import React from "react";

type Props = {
  children: string;
  className?: string;
};

export default function ButtonFour({ className, children }: Props) {
  return (
    <Button className={className} variant={"third"} size={"third"}>
      {children}
    </Button>
  );
}
